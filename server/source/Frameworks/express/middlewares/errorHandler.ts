import { NextFunction, Request, Response } from "express";
import {
  DuplicateError,
  InvalidUrlError,
  MongoDBError,
} from "../../../Utilities/customErrors/errorClass";

const errorHandlingMiddleWare = async (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("error in err handleer:", err);

  if (err instanceof DuplicateError) {
    return res
      .status(err.errCode)
      .json({ errMessage: err.message, errName: err.name });
  }

  if (err instanceof MongoDBError) {
    return res.status(err.errCode).json({ msg: err.message });
  }

  if (err instanceof InvalidUrlError) {
    return res.status(err.errCode).json({ msg: err.message });
  }

  if (err.isJoi) {
    //     console.log("error.message:", err?.message);
    console.log("err.details:", err?.details[0]);
    return res
      .status(420)
      .json({ errPath: err.details[0].path, validationErrMsg: err.message });
  }

  // Mongodb error
  if (err?.name === "MongoServerError" && err.code === 11000) {
    console.log("err from mongodb in errhandler");
    const keyValueObj = err.keyValue;

    const arr = Object.entries(keyValueObj);

    const message = `${arr[0][0]}: ${arr[0][1]} already registered`;

    return res
      .status(400)
      .json({ errMessage: message, errResaon: "DuplicateRecord" });
  }
};
export default errorHandlingMiddleWare;
