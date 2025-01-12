import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { User } from './../models/user.models';

// here we don't want to use req so we have to user underscore   _
export const verifyJWT = asyncHandler( async (req, _, next)) => {
  const token = req.cookies.accessToken || req.headers("Authorization")?.replace("Bearer ", "")

  if(!token) {
    throw new ApiError(401, "Unauthorized")
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

    if(!user) {
      throw new ApiError(401, "Unauthorized")
    }

    req.user = user

    next()

  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token")
  }

}