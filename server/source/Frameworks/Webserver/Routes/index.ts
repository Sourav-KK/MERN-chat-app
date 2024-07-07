import { app } from "../express";
import userRoute from "./userRoute";

const index = () => {
  app.use("/", userRoute()); ///user
};

export default index;
