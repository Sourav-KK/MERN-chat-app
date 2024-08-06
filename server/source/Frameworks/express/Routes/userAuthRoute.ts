import { Router, Request, Response, NextFunction } from "express";

import { authUserControl, userRepoUseCase } from "../services/userAuth";

const userAuthRoute = () => {
  const router: Router = Router();
  const { userSignUp, userLoginControl } = authUserControl;

  router.post("/", (req: Request, res: Response, next: NextFunction) =>
    userSignUp(req, res, next, userRepoUseCase)
  );

  router.post("/login", (req: Request, res: Response, next: NextFunction) => {
    userLoginControl(req, res, next, userRepoUseCase);
  });

  return router;
};

export default userAuthRoute;
