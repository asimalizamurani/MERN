import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req, res) => {
    // accept data from the user
    const { fullname, email, username, password } = req.body

    // validation

     if(
      [fullname, username, email, password].some((field) => field?.trim() === "")
     ) {
      throw new ApiError(400, "All fields are required")
     }

    const existedUser = await User.findOne({ 
      $or: [{ username }, { email }]
     })
    
    if(existedUser) {
      throw new ApiError(400, "User with email or username already exists")
    }

  console.warn(req.files)
    const avatarLocalPath = req.files?.avatar?.[0]?.path
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path

    if(!avatarLocalPath) {
      throw new ApiError(400, "Avatar file is missing")
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
      avatar = await uploadOnCloudinary(avatarLocalPath)
      console.log("Uploaded avatar", avatar);
    } catch (error) {
      console.log("Error uploading avatar", error)
      throw new ApiError(500, "Faided to upload avatar")
    }
    
    let coverImage;
    try {
      coverImage = await uploadOnCloudinary(coverImageLocalPath)
      console.log("Uploaded coverImage", coverImage);
    } catch (error) {
      console.log("Error uploading coverImage", error)
      throw new ApiError(500, "Faided to upload coverImage")
    }

    try {
      // create new user in the database
      const user = await User.create({
        fullname,
        avatar: avatar?.url,
        coverImage: coverImage?.url || "", // if not present then set it to empty string
        email,
        password,
        username: username.toLowerCase()
      })
  
      // createdUser now give the all fields of user even the password but we need
      // to deselect the password field by using (select) and write the filed name
      // with a negative sign (-)filedname
      const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
      )
  
      if(!createdUser) {
        throw new ApiError(500, "Something went wrong while registering a user")
      }    
  
      res
      .status(201)
      .json( new ApiResponse(200, createdUser, "User registered successfully"))
    } catch (error) {
      console.log("User creation failed")

      if(avatar && avatar.public_id) {
        await deleteFromCloudinary(avatar.public_id)
      }

      if(coverImage) {
        await deleteFromCloudinary(coverImage.public_id)
      }

      throw new ApiError(500, "Something went wrong while registering a user and images were deleted");
    }
  
})



export { 
  registerUser
}