import { Types } from "mongoose";
import { chatFindRepo_T } from "../../Frameworks/express/services/chatServices";
import { newChat_I } from "../../Utilities/interface_nd_Types/chat_I";

const chat_repo_useCase_Index = (findChatsRepo: chatFindRepo_T) => {
  const {
    chatExistsWithFriend,
    createNewChat,
    findOneChat,
    findAllChatForUser,
  } = findChatsRepo;

  const doesChatExists = (userId: Types.ObjectId, friendID: Types.ObjectId) => {
    return chatExistsWithFriend(userId, friendID);
  };

  const createChat = (chatData: newChat_I) => {
    return createNewChat(chatData);
  };

  const fetchOneChat = (chatId: Types.ObjectId) => {
    return findOneChat(chatId);
  };

  const fetchAllChats = (userId: Types.ObjectId) => {
    return findAllChatForUser(userId);
  };

  return { doesChatExists, createChat, fetchOneChat, fetchAllChats };
};
export default chat_repo_useCase_Index;
export type chat_repo_useCase_Index_T = typeof chat_repo_useCase_Index;
