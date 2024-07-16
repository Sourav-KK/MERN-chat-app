import { Types, Date } from "mongoose";

export type newUser_T = {
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
};
