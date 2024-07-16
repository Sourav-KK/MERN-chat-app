import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import cookie_parser from "cookie-parser";
import { COOKIE_SECRET } from "../../configs/config";

const app = express();
const router = express.Router();

const expressConfig = () => {
  app.use(cors());
  app.use(morgan("tiny"));
  // middleware

  app.use(compression());

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(cookie_parser(COOKIE_SECRET));

  app.use(express.json());

  // app.use("/",adminmiddleware, adminroutes) ///user
};

export { expressConfig, app, router };
