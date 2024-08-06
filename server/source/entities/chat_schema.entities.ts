import mongoose from "mongoose";
const { Schema } = mongoose;
import { Chat_Schema_I } from "../Utilities/interface_nd_Types/I_user_Schema";

const chatSchema = new Schema<Chat_Schema_I>(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    groupDescription: { type: String, default: "" },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "UserModel",
      },
    ],
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: "MessageModel",
    },
    groupAdmin: {
      type: Schema.Types.ObjectId,
      ref: "UserModel",
    },
  },
  { timestamps: true }
);

const Chatmodel = mongoose.model<Chat_Schema_I>("Chatmodel", chatSchema);
export type Chatmodel_T = typeof Chatmodel;

export default Chatmodel;
