import { Types } from "mongoose";
import { grpChatRepo_T } from "../../Frameworks/express/services/chatServices";
import {
  newGrpChatData_I,
  updateBlockGroupchat_I,
} from "../../Utilities/interface_nd_Types/chat_I";

const groupChatRepoUsecase = (grpChatRepo: grpChatRepo_T) => {
  const {
    createNewGroupChat,
    findOneGroupChat,
    updateGrp_Name_or_description,
    addNewMembersrepo,
    removeMembersRepo,
    findGrpMembersWithID,
    // findMembersInGroup,
  } = grpChatRepo;

  const newGroup = (data: newGrpChatData_I) => {
    return createNewGroupChat(data);
  };

  const searchOneGrpChat = (chatId: Types.ObjectId) => {
    return findOneGroupChat(chatId);
  };

  const changeGrpNameorDescription = (
    adminID: Types.ObjectId,
    chatId: Types.ObjectId,
    updateBlock: updateBlockGroupchat_I
  ) => {
    return updateGrp_Name_or_description(adminID, chatId, updateBlock);
  };

  const addMembers = (
    chatId: Types.ObjectId,
    nerwMemberId: Types.ObjectId[]
  ) => {
    return addNewMembersrepo(chatId, nerwMemberId);
  };

  const removeGrpMembers = (
    chatId: Types.ObjectId,
    members: Types.ObjectId[]
  ) => {
    return removeMembersRepo(chatId, members);
  };

  const findGrpMembers = (grpID: Types.ObjectId, members: Types.ObjectId[]) => {
    return findGrpMembersWithID(grpID, members);
  };

  // const membersInGroup = (members: Types.ObjectId[], chatID: Types.ObjectId) => {
  //   return findMembersInGroup(members,chatID);
  // };

  return {
    newGroup,
    searchOneGrpChat,
    changeGrpNameorDescription,
    addMembers,
    removeGrpMembers,
    findGrpMembers,
    // membersInGroup,
  };
};

export default groupChatRepoUsecase;
