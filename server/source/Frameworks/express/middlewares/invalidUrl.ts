import { NextFunction, Request, Response } from "express";
import { InvalidUrlError } from "../../../Utilities/customErrors/errorClass";

export const invalidURLMiddleware = (
  req: Request,
  _res: Response,
  _next: NextFunction
) => {
  console.log("in invalidURLMiddleware");
  throw new InvalidUrlError(404, `Path Not Found:- ${req.originalUrl}`);
};
