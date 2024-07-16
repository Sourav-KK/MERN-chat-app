import { NextFunction, Request, Response } from "express";
import {
  InvalidUrlError,
  MongoDBError,
} from "../../../Utilities/customErrors/errorClass";

const errorHandlingMiddleWare = async (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(":inside erro handleer", err);

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
};
export default errorHandlingMiddleWare;
