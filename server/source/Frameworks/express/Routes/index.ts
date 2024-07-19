import { app } from "../express";
import errorHandlingMiddleWare from "../middlewares/errorHandler";
import { invalidURLMiddleware } from "../middlewares/invalidUrl";
import userAuthRoute from "./userAuthRoute";

const index = () => {
  app.use("/auth", userAuthRoute()); ///user
  // app.use("/auth", adminAuthRoute()); ///admin

  app.use(invalidURLMiddleware);
  app.use(errorHandlingMiddleWare);

  // app.use("/v1/admin", userAuthRoute()); //admin
};

export default index;
