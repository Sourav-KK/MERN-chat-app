import { Types } from "mongoose";

export interface I_User_Schema {
  fullName: string;
  email: string;
  userName: string;
  password: string;
  description?: string;
  profilePic: string;
  gender: string;
}

export interface Chat_Schema_I {
  chatName: string;
  groupDescription: string;
  isGroupChat: boolean;
  users: [];
  latestMessage: Types.ObjectId;
  groupAdmin: Types.ObjectId;
}

export interface Message_Schema_I {
  sender: Types.ObjectId;
  content: string;
  chat: Types.ObjectId;
}

export interface OneUser_I {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  userName: string;
  description: string;
  profilePic: string;
  gender: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
