import { Router, Request, Response, NextFunction } from "express";
import { groupChatControl } from "../services/chatServices";
import { grpChatRepoUseCase } from "../services/chatServices";

const groupChatRoute = () => {
  const router = Router();

  const {
    createGroupChat,
    renameGroupChat,
    addGrpMembers,
    removeGroupChatMembers,
  } = groupChatControl;

  router.route("/").post((req: Request, res: Response, next: NextFunction) => {
    createGroupChat(req, res, next, grpChatRepoUseCase);
  });

  // for group renaming or change group description
  router
    .route("/update")
    .post((req: Request, res: Response, next: NextFunction) => {
      removeGroupChatMembers(req, res, next, grpChatRepoUseCase);
    })
    .patch((req: Request, res: Response, next: NextFunction) => {
      renameGroupChat(req, res, next, grpChatRepoUseCase);
    })
    .put((req: Request, res: Response, next: NextFunction) => {
      addGrpMembers(req, res, next, grpChatRepoUseCase);
    });
  return router;
};
export default groupChatRoute;
