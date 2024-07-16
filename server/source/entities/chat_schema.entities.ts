import mongoose from "mongoose";
const { Schema } = mongoose;
import { I_User_Schema } from "../Utilities/interface/I_user_Schema";

const chatSchema = new Schema<I_User_Schema>({}, { timestamps: true });

const Chatmodel = mongoose.model<I_User_Schema>("Chatmodel", chatSchema);
export type TypeChatmodel = typeof Chatmodel;

export default Chatmodel;
