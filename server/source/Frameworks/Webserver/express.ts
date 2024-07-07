import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import cookie_parser from "cookie-parser";
import userRoute from "./Routes/userRoute";

const app = express();
const router = express.Router();

const expressConfig = () => {
  app.use(cors());
  // middleware
  // app.use(middleware)

  // err handling middlware
  // app.use((req,res,next))
  app.use(compression());

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(cookie_parser());

  app.use(express.json());

  // app.use("/",adminmiddleware, adminroutes) ///user
};

export { expressConfig, app, router };
