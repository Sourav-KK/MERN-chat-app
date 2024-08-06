import JWT, { JwtPayload } from "jsonwebtoken";
import { JWTEXPIRY, JWTSECRET } from "../configs/config";
import { Types } from "mongoose";

export const generateToken = (
  userName: string,
  email: string,
  userId: Types.ObjectId
) => {
  const payload = { userName, email, userId };
  const token = JWT.sign({ payload }, JWTSECRET, { expiresIn: JWTEXPIRY });
  return token;
};

export const validateToken = (token: string) => {
  const verification = JWT.verify(token, JWTSECRET) as JwtPayload;
  return verification;
};
