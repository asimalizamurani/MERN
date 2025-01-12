import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { jwt } from "jsonwebtoken";

// Helper Function To Generate Access and Refresh tokens
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError();
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // accept data from the user
  const { fullname, email, username, password } = req.body;

  // validation

  if (
    [fullname, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(400, "User with email or username already exists");
  }

  console.warn(req.files);
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  // upload images on cloudinary
  // const avatar = await uploadOnCloudinary(avatarLocalPath)
  // // check if coverImage is present then upload it on cloudinary not compuosary
  // // if not present then set it to empty string
  // let coverImage = ""
  // if(coverImageLocalPath) {
  //   coverImage = await uploadOnCloudinary(coverImageLocalPath)
  // }

  let avatar;
  try {
    avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log("Uploaded avatar", avatar);
  } catch (error) {
    console.log("Error uploading avatar", error);
    throw new ApiError(500, "Faided to upload avatar");
  }

  let coverImage;
  try {
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
    console.log("Uploaded coverImage", coverImage);
  } catch (error) {
    console.log("Error uploading coverImage", error);
    throw new ApiError(500, "Faided to upload coverImage");
  }

  try {
    // create new user in the database
    const user = await User.create({
      fullname,
      avatar: avatar?.url,
      coverImage: coverImage?.url || "", // if not present then set it to empty string
      email,
      password,
      username: username.toLowerCase(),
    });

    // createdUser now give the all fields of user even the password but we need
    // to deselect the password field by using (select) and write the filed name
    // with a negative sign (-)filedname
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering a user");
    }

    res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered successfully"));
  } catch (error) {
    console.log("User creation failed");

    if (avatar && avatar.public_id) {
      await deleteFromCloudinary(avatar.public_id);
    }

    if (coverImage) {
      await deleteFromCloudinary(coverImage.public_id);
    }

    throw new ApiError(
      500,
      "Something went wrong while registering a user and images were deleted"
    );
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.user;

  if (!email || !username) {
    throw new ApiError(400, "All fields are required");
  }

  if (!password) {
    throw new ApiError(400, "Password is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(401, "User not found");
  }

  // Validate password

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  // Generate access and refresh tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  console.log(
    "Asim you wanted to see this LoggedInUser on line no 163 in userController",
    loggedInUser
  );

  if (!loggedInUser) {
    throw new ApiError(500, "Something went wrong while logging in a user");
  }

  const options = {
    httpOnly: true, // these are not modifiable from client side
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        201,
        { user: loggedInUser, accessToken, refreshToken },
        "User logged in successfully"
      )
    );
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookie.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Refresh token is required");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    // here (?) optional checks there can be a user or not
    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(403, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(403, "Invalid refresh token");
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed successfully"
        )
      );
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while refreshing access token"
    );
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  const checkItOut = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    { new: true }
  );
  console.log(
    "Asim You wanted to check this see the output when you logout and making refresh token undefined",
    checkItOut
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .clearCookies("accessToken", options)
    .clearCookies("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

export { 
  registerUser,
   loginUser,
    refreshAccessToken,
  logoutUser
 };
