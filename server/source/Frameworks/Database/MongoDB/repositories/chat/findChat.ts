import { Types } from "mongoose";
import { Chatmodel_T } from "../../../../../entities/chat_schema.entities";
import { newChat_I } from "../../../../../Utilities/interface_nd_Types/chat_I";

const findChatRepo = (model: Chatmodel_T) => {
  const chatExistsWithFriend = async (
    userId: Types.ObjectId,
    friendId: Types.ObjectId
  ) => {
    try {
      let response = await model
        .findOne({
          isGroupChat: false,
          $and: [
            { users: { $elemMatch: { $eq: userId } } },
            { users: { $elemMatch: { $eq: friendId } } },
          ],
        })
        .populate("users", "-password")
        .populate("latestMessage");

      const newresponse = await model.populate(response, {
        path: "latestMessage.sender",
        select: "fullName email userName profilePic",
      });

      return newresponse;
    } catch (error) {
      console.error("error in isChat findChatRepo:", error);
      throw error;
    }
  };

  const findOneChat = async (chatId: Types.ObjectId) => {
    try {
      const response = await model
        .findOne({ _id: chatId })
        .populate("users", "-password");
      return response;
    } catch (error) {
      console.error("error in createNewChat findChatRepo:", error);
      throw error;
    }
  };

  const findAllChatForUser = async (userId: Types.ObjectId) => {
    try {
      const response = await model
        .find({ users: { $elemMatch: { $eq: userId } } })
        .populate("users", "-password")
        .populate("groupAdmin", "-password")
        .populate("latestMessage")
        .sort({ updatedAt: -1 });

      const res = await model.populate(response, {
        path: "latestMessage.sender",
        select: "fullName email userName profilePic",
      });

      return res;
    } catch (error) {
      console.error("error in findAllChatForUser findChatRepo:", error);
      throw error;
    }
  }; 

  const createNewChat = async (data: newChat_I) => {
    try {
      const response = await model.create(data);
      return response;
    } catch (error) {
      console.error("error in createNewChat findChatRepo:", error);
      throw error;
    }
  };

  return {
    chatExistsWithFriend,
    findOneChat,
    createNewChat,
    findAllChatForUser,
  };
};

export type findChatRepo_T = typeof findChatRepo;
export default findChatRepo;
