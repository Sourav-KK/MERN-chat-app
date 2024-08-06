import { app } from "../express";
import authorizationMiddleware from "../middlewares/authorization";
import errorHandlingMiddleWare from "../middlewares/errorHandler";
import { invalidURLMiddleware } from "../middlewares/invalidUrl";
import chatRoutes from "./chatRoutes";
import groupChatRoute from "./groupChatRoute";
import userAuthRoute from "./userAuthRoute";
import userDetailsRoute from "./userDetails";

const index = () => {
  app.use("/auth", userAuthRoute()); /// user auth routes
  app.use("/data", authorizationMiddleware, userDetailsRoute()); /// user data routes
  app.use("/chat", authorizationMiddleware, chatRoutes()); /// individual chat routes
  app.use("/group", authorizationMiddleware, groupChatRoute()); /// group chat routes

  // Global error handlers
  app.use(errorHandlingMiddleWare); // Handles errors
  app.all("*", invalidURLMiddleware); // Handles invalid url error
};

export default index;
