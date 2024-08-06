import mongoose from "mongoose";
const { Schema } = mongoose;
import { Message_Schema_I } from "../Utilities/interface_nd_Types/I_user_Schema";

const messageSchema = new Schema<Message_Schema_I>(
  {
    sender: { type: Schema.Types.ObjectId, ref: "UserModel" },
    content: { type: String, trim: true },
    chat: { type: Schema.Types.ObjectId, ref: "UserModel" },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("MessageModel", messageSchema);
export type MessageModel_T = typeof MessageModel;

export default MessageModel;
