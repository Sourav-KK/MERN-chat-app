import { NextFunction, Request, Response } from "express";
import { InvalidUrlError } from "../../../Utilities/customErrors/errorClass";

export const invalidURLMiddleware = (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("in invalidURLMiddleware");
  const error = new InvalidUrlError(`Path Not Found:- ${req.originalUrl}`);
  return res.status(error.errCode).json({ errMessage: error.message });
  // next(error);
};
