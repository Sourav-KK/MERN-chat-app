import mongoose from "mongoose";
import { MONGO_URI } from "../../../configs/DBConfig";
import { MongoDBError } from "../../../Utilities/customErrors/errorClass";
import { app } from "../../express/express";
import errorHandlingMiddleWare from "../../express/middlewares/errorHandler";

// connect()
//   .then(() => console.info("MongoDb connection successfull"))
//   .catch((err) => {
//     // console.error("MongoDB connection error", err);
//     console.error("MongoDB connection error");
//     throw err;
//   });

// async function connect() {
//   if (!MONGO_URI) {
//     throw new Error("MONGODB_URI is undefined");
//   }
//   await mongoose.connect(MONGO_URI);
// }

// export default connect;

async function connection() {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGODB_URI is undefined");
    }
    await mongoose.connect(MONGO_URI);
    console.info("MongoDb connection successfull");
  } catch (error) {
    console.log("MongoDB connection error");
    // throw error;

    throw new MongoDBError(
      404,
      "Unable to connect to database. Try again later"
    );
  }
}
export default connection;
