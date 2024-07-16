import mongoose from "mongoose";
const { Schema } = mongoose;
import { I_User_Schema } from "../Utilities/interface/I_user_Schema";

const userSchema = new Schema<I_User_Schema>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    userName: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true,
    },
    password: { type: String, required: true, trim: true },
    description: { type: String, default: "Chit chat user", trim: true },
    profilePic: {
      type: String,
      required: true,
      trim: true,
    },
    gender: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<I_User_Schema>("UserModel", userSchema);
export type TypeUserModel = typeof UserModel;

export default UserModel;
