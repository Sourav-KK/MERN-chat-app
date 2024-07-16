import { Router, Request, Response, NextFunction } from "express";

import { authUserControl, superUserUserCase } from "../services/userAuth";

const userAuthRoute = () => {
  const router: Router = Router();
  const { userSignUp, userLoginControl } = authUserControl;

  router.post("/", (req: Request, res: Response, next: NextFunction) =>
    userSignUp(req, res, superUserUserCase, next)
  );

  router.post("/login", (req: Request, res: Response, next: NextFunction) => {
    userLoginControl(req, res, superUserUserCase, next);
  });

  return router;
};

export default userAuthRoute;
