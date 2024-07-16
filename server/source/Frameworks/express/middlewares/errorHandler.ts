import { NextFunction, Request, Response } from "express";

const errorHandlingMiddleWare = async (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(":inside erro handleer");

  if (err.isJoi) {
    //     console.log("error.message:", err?.message);
    console.log("err.details:", err?.details[0]);
    return res
      .status(420)
      .json({ errPath: err.details[0].path, validationErrMsg: err.message });
  }
};
export default errorHandlingMiddleWare;
