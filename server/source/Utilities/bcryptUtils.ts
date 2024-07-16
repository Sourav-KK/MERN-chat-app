import bcrypt from "bcrypt";
import { SALTROUNDS } from "../configs/config";

const salting = () => {
  return bcrypt.genSaltSync(Number(SALTROUNDS));
};

export const createPassword = async (password: string): Promise<string> => {
  const saltvalue = salting();
  return await bcrypt.hash(password, saltvalue);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
