import { Router, Request, Response, NextFunction } from "express";

import { authUserControl, userRepoUseCase } from "../services/userAuth";
import { userDetailsControl } from "../services/fetchUserDetails";

const userDetailsRoute = () => {
  const router: Router = Router();

  const { fetchAllUser } = userDetailsControl;

  router.get("/alluser", (req: Request, res: Response, next: NextFunction) =>
    fetchAllUser(req, res, next, userRepoUseCase)
  );

  // router.get("/user", (req: Request, res: Response, next: NextFunction) => {
  //   userLoginControl(req, res, superUserUserCase, next);
  // });

  return router;
};

export default userDetailsRoute;
