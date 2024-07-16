// import mongoose from "mongoose";
// const { Schema } = mongoose;
// import { AVATAR } from "../../../configs/DBConfig";
// import { IUser } from "../../../../Utilities/interface/I_Schema";

// const userSchema = new Schema<IUser>(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     userName: { type: String, required: true, unique: true, lowerCase: true },
//     description: { type: String, default: "New user" },
//     profilePic: {
//       type: String,
//       required: true,
//       default: AVATAR,
//     },
//     gender: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const UserModel = mongoose.model<IUser>("UserModel", userSchema);
// export type TypeUserModel = typeof UserModel;

// export default UserModel;
