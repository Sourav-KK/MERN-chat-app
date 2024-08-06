import addNewGrpMembers from "./chatUseCase/addNewGrpMembers";
import findAllUserChats from "./chatUseCase/findAllUserChats";
import findChatExists from "./chatUseCase/findChatExists";
import newGrpChatUseCase from "./chatUseCase/newGrpChatUseCase";
import removeMembers from "./chatUseCase/removeMembers";
import renameGrpUseCase from "./chatUseCase/renameGrpUseCase";
import createUser from "./user/createUser";
import fetchAllUsersUseCase from "./user/fetchAllUsers";
import userLoginUseCase from "./user/login";

const useCases = () => {
  return Object.freeze({
    userCreation: createUser,
    login: userLoginUseCase,
    findAllUser: fetchAllUsersUseCase,
    chatExists: findChatExists,
    findAllChatsOfUser: findAllUserChats,
    createGrpChat: newGrpChatUseCase,
    renameGroup: renameGrpUseCase,
    addMembers: addNewGrpMembers,
    removeGroupMembers: removeMembers,
  });
};

export default useCases;

export type T_UseCases = typeof useCases;
