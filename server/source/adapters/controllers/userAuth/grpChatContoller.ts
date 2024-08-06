import { NextFunction, Request, Response } from "express";
import { T_UseCases } from "../../../useCase";
import { grpChatRepoUseCase_T } from "../../../Frameworks/express/services/chatServices";

export default function grpChatContoller(useCase: T_UseCases) {
  const { createGrpChat, renameGroup, addMembers, removeGroupMembers } =
    useCase();

  const createGroupChat = async (
    req: Request,
    res: Response,
    next: NextFunction,
    repoUseCase: grpChatRepoUseCase_T
  ) => {
    try {
      const response = await createGrpChat(req, repoUseCase);
      res.status(200).json(response);
    } catch (error) {
      console.error("error caught in createGroupChat grpChatContoller");
      next(error);
    }
  };

  const renameGroupChat = async (
    req: Request,
    res: Response,
    next: NextFunction,
    repoUseCase: grpChatRepoUseCase_T
  ) => {
    try {
      const response = await renameGroup(req, repoUseCase);
      res.status(200).json(response);
    } catch (error) {
      console.error("error caught in createGroupChat grpChatContoller");
      next(error);
    }
  };

  const addGrpMembers = async (
    req: Request,
    res: Response,
    next: NextFunction,
    repoUseCase: grpChatRepoUseCase_T
  ) => {
    try {
      const response = await addMembers(req, repoUseCase);
      res.status(200).json(response);
    } catch (error) {
      console.error("error caught in addMembers grpChatContoller", error);
      next(error);
    }
  };

  const removeGroupChatMembers = async (
    req: Request,
    res: Response,
    next: NextFunction,
    repoUseCase: grpChatRepoUseCase_T
  ) => {
    try {
      const response = await removeGroupMembers(req, repoUseCase);
      res.status(200).json({ ms: response?.msg, updatedGrp: response });
    } catch (error) {
      console.error("error caught in removeMembers grpChatContoller");
      next(error);
    }
  };

  return {
    createGroupChat,
    renameGroupChat,
    addGrpMembers,
    removeGroupChatMembers,
  };
}
