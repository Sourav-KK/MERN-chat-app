import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "UserModel" },
    content: { type: String, trim: true },
    chat: { type: Schema.Types.ObjectId, ref: "UserModel" },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("MessageModel", messageSchema);
export default MessageModel;
