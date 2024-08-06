import { Types } from "mongoose";
import { Chatmodel_T } from "../../../../../entities/chat_schema.entities";
import {
  newGrpChatData_I,
  updateBlockGroupchat_I,
} from "../../../../../Utilities/interface_nd_Types/chat_I";

const groupChatRepo = (model: Chatmodel_T) => {
  const createNewGroupChat = async (data: newGrpChatData_I) => {
    const { groupName, members, adminId } = data;
    try {
      const response = await model.create({
        chatName: groupName,
        users: members,
        isGroupChat: true,
        groupAdmin: adminId,
      });

      return response;
    } catch (error) {
      console.error("error caught in createNewGroupChat:", error);
      throw error;
    }
  };

  const findOneGroupChat = async (chatId: Types.ObjectId) => {
    try {
      const response = await model
        .findOne({ _id: chatId })
        .populate("users", "-password")
        .populate("groupAdmin", "-password");
      return response;
    } catch (error) {
      console.error("error caught in findOneGroupChat:", error);
      throw error;
    }
  };

  const updateGrp_Name_or_description = async (
    adminID: Types.ObjectId,
    chatId: Types.ObjectId,
    updateBlock: updateBlockGroupchat_I
  ) => {
    try {
      const response = await model
        .findOneAndUpdate(
          {
            _id: chatId,
            isGroupChat: true,
            groupAdmin: adminID,
          },
          updateBlock,
          { new: true, runValidators: true }
        )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");
      console.log("response inside renameGroupChat db repo", response);
      return response;
    } catch (error) {
      console.error("error caught in findOneGroupChat:", error);
      throw error;
    }
  };

  const addNewMembersrepo = async (
    chatId: Types.ObjectId,
    nerwMemberId: Types.ObjectId[]
  ) => {
    try {
      const response = await model
        .findByIdAndUpdate(
          { _id: chatId },
          {
            $addToSet: { users: nerwMemberId },
          },
          { new: true, runValidators: true }
        )
        .sort({ _id: 1 })
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

      // console.log("addmembers response:", response);
      return response;
    } catch (error) {
      console.error("error caught in addNewMembers chatREpo:", error);
      throw error;
    }
  };

  const removeMembersRepo = async (
    chatId: Types.ObjectId,
    members: Types.ObjectId[]
  ) => {
    try {
      const response = await model
        .findByIdAndUpdate(
          { _id: chatId },
          {
            $pull: { users: { $in: members } },
          },
          { new: true, runValidators: true }
        )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

      return response;
    } catch (error) {
      console.error("error caught in removeMembersRepo in chatREpo:", error);
      throw error;
    }
  };

  const findGrpMembersWithID = async (
    grpId: Types.ObjectId,
    members: Types.ObjectId[]
  ) => {
    const objectIdArray = members.map((id) => new Types.ObjectId(id));
    try {
      const response = await model.findOne({
        _id: grpId,
        users: { $all: objectIdArray },
      });
      // console.log("members response in findAllUserWithID:", response);
      return response;
    } catch (error) {
      console.error("error caught in findAllUserWithID in chatREpo:", error);
      throw error;
    }
  };

  // const findMembersInGroup = async (
  //   chatID: Types.ObjectId
  // ) => {
  //   try {
  //     const response = await model
  //       .findOne({ _id: chatID })
  //       .populate("users", "-password")
  //       .populate("groupAdmin", "-password");
  //     return response
  //   } catch (error) {
  //     console.error("error caught in findAllUserWithID in chatREpo:", error);
  //     throw error;
  //   }
  // };

  return {
    createNewGroupChat,
    findOneGroupChat,
    updateGrp_Name_or_description,
    addNewMembersrepo,
    removeMembersRepo,
    findGrpMembersWithID,
    // findMembersInGroup
  };
};

export default groupChatRepo;
export type groupChat_I = typeof groupChatRepo;
