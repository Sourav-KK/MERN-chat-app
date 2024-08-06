import { NextFunction, Request, Response } from "express";
import { T_UseCases } from "../../../useCase";
import { T_userRepoUseCase } from "../../../Frameworks/express/services/userAuth";
import { AuthenticationError } from "../../../Utilities/customErrors/errorClass";

//  handles fetching user data
export default function userDataController(fetchUserData: T_UseCases) {
  console.log("inside userDataController");
  const { findAllUser } = fetchUserData();

  const fetchAllUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
    useCase: T_userRepoUseCase
  ) => {
    try {
      const response = await findAllUser({
        req,
        useCase,
      });
      res.status(200).json(response);
    } catch (error) {
      console.error("error in fetchAllUser userDataController", error);
      next(error);
    }
  };

  return {
    fetchAllUser,
  };
}
