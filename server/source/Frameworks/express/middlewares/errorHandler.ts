import { NextFunction, Request, Response } from "express";
import {
  AuthenticationError,
  DuplicateError,
  EmptyFieldError,
  InvalidUrlError,
  MongoDBError,
} from "../../../Utilities/customErrors/errorClass";
import errResponseOptions from "../../../Utilities/customErrors/errResponseOptions";

const errorHandlingMiddleWare = async (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("error in errorHandlingMiddleWare:", err);

  if (err instanceof AuthenticationError) {
    return res
      .status(err.errCode)
      .json({ errMessage: err.message, errName: err.name });
  }

  if (err instanceof EmptyFieldError) {
    return res
      .status(err.errCode)
      .json({ errMessage: err.message, errName: err.name });
  }

  if (err instanceof DuplicateError) {
    const options = errResponseOptions(
      "axiosErr",
      err.message,
      err.name,
      "DuplicateRecord"
    );

    return res.status(err.errCode).json(options);
  }

  if (err instanceof MongoDBError) {
    return res.status(err.errCode).json({ msg: err.message });
  }

  if (err instanceof InvalidUrlError) {
    const options = errResponseOptions(
      "axiosErrrrr",
      err.message,
      err.name,
      "InvalidURL"
    );

    return res.status(err.errCode).json(options);
  }

  if (err.isJoi) {
    console.log("err.details:", err?.details[0]);
    const options = errResponseOptions(
      err.details[0].path,
      err.message,
      err.name,
      "ValidationError"
    );

    return res.status(420).json(options);
  }

  // Mongodb error
  if (err?.name === "MongoServerError" && err.code === 11000) {
    console.log("err from mongodb in errhandler");
    const keyValueObj = err.keyValue;

    const arr = Object.entries(keyValueObj);

    const message = `${arr[0][0]}: ${arr[0][1]} already registered`;

    const options = errResponseOptions(
      "axiosErr",
      message,
      err.name,
      "DuplicateError"
    );

    return res.status(400).json(options);
  }

  return res.status(400).json({ errMessage: err?.message });
};
export default errorHandlingMiddleWare;
