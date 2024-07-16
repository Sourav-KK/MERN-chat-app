import { app, expressConfig } from "./express";
import startServer from "./server";
import routes from "./Routes/index";
import dbConnect from "../Database/MongoDB/mongoDBConnection"; // starting mongoDB
import errorHandlingMiddleWare from "./middlewares/errorHandler";

const Server = async () => {
  try {
    expressConfig();
    startServer();
    await dbConnect();
    routes();
    // app.use(errorHandlingMiddleWare);
  } catch (error) {
    console.log("err in server");
    app.use(errorHandlingMiddleWare);
    throw error;
  }
};

export default Server;
