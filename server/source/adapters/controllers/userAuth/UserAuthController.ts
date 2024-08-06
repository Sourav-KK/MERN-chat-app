import { NextFunction, Request, Response } from "express";
import { T_UseCases } from "../../../useCase";
import { T_userRepoUseCase } from "../../../Frameworks/express/services/userAuth";

//  handles user login, create user, delete user account, suspend account
export default function UserAuthController(createNewUser: T_UseCases) {
  const { userCreation, login } = createNewUser();

  const userSignUp = async (
    req: Request,
    res: Response,
    next: NextFunction,
    superUserUserCase: T_userRepoUseCase
  ) => {
    try {
      const response = await userCreation(req.body, superUserUserCase);
      res.status(200).json(response.succesMsg);
    } catch (error) {
      console.error("error in userSignup controller");
      next(error);
    }
  };

  const userLoginControl = async (
    req: Request,
    res: Response,
    next: NextFunction,
    superUserUserCase: T_userRepoUseCase
  ) => {
    try {
      const response = await login(req.body, superUserUserCase);

      const {
        cookieName,
        cookieOptions,
        cookieValue,
        successMessage,
        userData,
      } = response;
      res.cookie(cookieName, cookieValue, cookieOptions);

      return res.status(200).json({ successMessage, userData });
    } catch (error) {
      next(error);
    }
  };
  return {
    userLoginControl,
    userSignUp,
  };
}
