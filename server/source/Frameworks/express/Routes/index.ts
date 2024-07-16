import { app } from "../express";
import userAuthRoute from "./userAuthRoute";

const index = () => {
  app.use("/auth", userAuthRoute()); ///user
  // app.use("/v1/admin", userAuthRoute()); //admin
};

export default index;
