import mongoose, { MongooseError } from "mongoose";
import { MONGO_URI } from "../../../Configurations/DBConfig";

connect()
  .then(() => console.info("MongoDb connection successfull"))
  .catch((err) => console.error("MongoDB connection error", err));

async function connect() {
  if (!MONGO_URI) {
    throw new Error("MONGODB_URI is undefined");
  }
  await mongoose.connect(MONGO_URI);
}
