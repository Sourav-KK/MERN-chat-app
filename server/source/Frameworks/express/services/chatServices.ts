//  chat repository
import chat_repo_useCase_Index from "../../../useCase/repo/chat_repo_usecase";
import findChatRepo from "../../Database/MongoDB/repositories/chat/findChat";
import Chatmodel from "../../../entities/chat_schema.entities";
import chatController from "../../../adapters/controllers/userAuth/chatController";
import useCases from "../../../useCase";
import groupChatRepo from "../../Database/MongoDB/repositories/chat/groupChat";
import groupChatRepoUsecase from "../../../useCase/repo/groupChatRepoUsecase";
import grpChatContoller from "../../../adapters/controllers/userAuth/grpChatContoller";
// import grpChatContoller from "@";

// one on one chat functionalities
// chat repos
const chatFindRepo = findChatRepo(Chatmodel);
export type chatFindRepo_T = typeof chatFindRepo;

// chat use case index
const chatRepoUseCase = chat_repo_useCase_Index(chatFindRepo);
export type chatRepoUseCase_T = typeof chatRepoUseCase;

// chat controllers
const chatControl = chatController(useCases);
export type chatControl_T = typeof chatControl;

// group chat functionalities
// group chat repos
const grpChatRepo = groupChatRepo(Chatmodel);
export type grpChatRepo_T = typeof grpChatRepo;

// chat use case index
const grpChatRepoUseCase = groupChatRepoUsecase(grpChatRepo);
export type grpChatRepoUseCase_T = typeof grpChatRepoUseCase;

const groupChatControl = grpChatContoller(useCases);
export type groupChatControl_T = typeof groupChatControl;

export { chatControl, chatRepoUseCase, groupChatControl, grpChatRepoUseCase };
