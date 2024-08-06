import { Router, Request, Response, NextFunction } from "express";
import { chatControl } from "../services/chatServices";
import { chatRepoUseCase } from "../services/chatServices";

const chatRoutes = () => {
  const router = Router();
  const { accessAllChat, accessAllChatOfUser } = chatControl;

  // one to one chat
  router
    .route("/")
    .post((req: Request, res: Response, next: NextFunction) => {
      accessAllChat(req, res, next, chatRepoUseCase);
    })
    // fetch all chats for the user
    .get((req: Request, res: Response, next: NextFunction) => {
      accessAllChatOfUser(req, res, next, chatRepoUseCase);
    });

  return router;
};

export default chatRoutes;
