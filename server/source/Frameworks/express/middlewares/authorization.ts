import { NextFunction, Request, Response } from "express";
import { validateToken } from "../../../Utilities/jwtUtils";
import { userRepoUseCase } from "../services/userAuth";
import { UserTypesForRequest } from "../../../Utilities/interface_nd_Types/activeUser_T";

const authorizationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("in authorizationMiddleware");
  const { searchByUserId } = userRepoUseCase;

  // let token;

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {

  try {
    // token = req.headers.authorization.split(" ")[1];
    const { encryptedToken } = req.signedCookies;
    // console.log("encryptedTokenin authorization middlware :", encryptedToken);

    const decoded = validateToken(encryptedToken);

    if (!decoded || !decoded.payload.userId) {
      console.error("jwt token cannot be verified or user ID not found");
      return res.status(401).json({ errMessage: "Unable to authorize user" });
    }
    // console.log("decodeing successfull");

    const isUser = await searchByUserId(decoded.payload.userId);
    if (!isUser || !isUser.userName || !isUser.fullName) {
      console.error("user with this id not found in auth middleware");
      return res.status(401).json({ errMessage: "User not found" });
    }

    const userDetails: UserTypesForRequest = {
      id: isUser._id,
      fullName: isUser.fullName,
      userName: isUser.userName,
      gender: isUser.gender,
      displayPicture: isUser.profilePic,
    };
    console.log("user authorization successfull in authorizartion middleware");
    req.authUserDetails = userDetails;
    next();
  } catch (error) {
    console.log("error userdetails in authorizartion middleware", error);

    return res
      .status(401)
      .send({ errMesage: "Please login again", errName: "authError" });
  }
};

export default authorizationMiddleware;
