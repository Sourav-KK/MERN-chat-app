import JWT from "jsonwebtoken";
import { JWTEXPIRY, JWTSECRET } from "../configs/config";

export const generateToken = (userName: string, email: string) => {
  const payload = { userName, email };
  const token = JWT.sign({ payload }, JWTSECRET, { expiresIn: JWTEXPIRY });
  return token;
};

export const validateToken = (token: string) => {
  const verification = JWT.verify(token, JWTSECRET);
  return verification;
};
