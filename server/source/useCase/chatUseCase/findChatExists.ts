import { Request } from "express";
import { Types } from "mongoose";
import { chatRepoUseCase_T } from "../../Frameworks/express/services/chatServices";
import { AuthenticationError } from "../../Utilities/customErrors/errorClass";

const findChatExists = async (
  req: Request,
  friendID: Types.ObjectId,
  useCases: chatRepoUseCase_T
) => {
  const { doesChatExists, createChat, fetchOneChat } = useCases;
  const userId = req.authUserDetails?.id;

  if (!userId) {
    const error = new AuthenticationError();
    throw error;
  }

  if (!req.body) {
    throw new Error("chatId missing, errMessage: Chat not selected");
  }

  try {
    // check if chat exists
    const dbResponse = await doesChatExists(userId, friendID);
    console.log("dbResponse in findChatExists useCases:", dbResponse);

    // chat exists between user and selected user
    if (dbResponse) {
      console.log(
        "dbreposnse is not empty. chat exists in findChatExists useCases"
      );
      return { latestMessage: dbResponse };
    }
    console.log("dbreposnse is empty ");

    // new chat
    const chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [userId, friendID],
    };

    const response = await createChat(chatData);
    console.log("create chat response in findChatExists useCases:", response);

    const FullChat = await fetchOneChat(response._id);
    console.log("FullChat in findChatExists useCases:", FullChat);

    return FullChat;
  } catch (error) {
    console.error("Error in findChatExists useCases:", error);
    throw error;
  }
};

export default findChatExists;
