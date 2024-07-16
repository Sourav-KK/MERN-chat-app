import mongoose from "mongoose";
import { MONGO_URI } from "../../../configs/DBConfig";

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

    throw new Error("Unable to connect to database. Try again later");
  }
}
export default connection;
