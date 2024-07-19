import { app, expressConfig } from "./express";
import startServer from "./server";
import routes from "./Routes/index";
import dbConnect from "../Database/MongoDB/mongoDBConnection"; // starting mongoDB

const Server = async () => {
  try {
    expressConfig();
    startServer();
    await dbConnect();
    routes();
  } catch (error) {
    console.log("err in server");
  }
};

export default Server;
