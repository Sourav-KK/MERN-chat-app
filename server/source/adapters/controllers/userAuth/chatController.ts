import { NextFunction, Request, Response } from "express";
import { T_UseCases } from "../../../useCase";
import { chatRepoUseCase_T } from "../../../Frameworks/express/services/chatServices";

export default function chatController(useCase: T_UseCases) {
  const { chatExists, findAllChatsOfUser } = useCase();

  const accessAllChat = async (
    req: Request,
    res: Response,
    next: NextFunction,
    repoUseCase: chatRepoUseCase_T
  ) => {
    console.log("inside accessAllChat chatController");
    try {
      const response = await chatExists(req, req.body.friendID, repoUseCase);

      res.status(200).send(response);
    } catch (error) {
      console.error("error in accessAllChat chatController");
      next(error);
    }
  };

  const accessAllChatOfUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
    repoUseCase: chatRepoUseCase_T
  ) => {
    try {
      const response = await findAllChatsOfUser(req, repoUseCase);

      res.status(200).send(response);
    } catch (error) {
      console.error("error in accessAllChat chatController");
      next(error);
    }
  };

  return {
    accessAllChat,
    accessAllChatOfUser,
  };
}
