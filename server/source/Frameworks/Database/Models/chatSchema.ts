import mongoose from "mongoose";
const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
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

const ChatModel = mongoose.model("ChatModel", chatSchema);
export default ChatModel;
