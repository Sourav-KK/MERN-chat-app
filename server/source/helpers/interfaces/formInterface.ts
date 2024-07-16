import { Types, Date } from "mongoose";

interface LoginValuesI {
  emailORuserName: string;
  password: string;
}

export interface newUser_I {
  name: string;
  email: string;
  userName: string;
  description: string;
  profilePic: string;
  gender: string;
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type { LoginValuesI };
