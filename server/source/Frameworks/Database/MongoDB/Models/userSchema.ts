import mongoose from "mongoose";
const { Schema } = mongoose;
import { AVATAR } from "../../../../Configurations/dDBConfig";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true },
    description: { type: String, default: "New user" },
    profilePic: {
      type: String,
      required: true,
      default: AVATAR,
    },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
