import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;
const AVATAR = process.env.DEFAULT_AVATAR;

export { MONGO_URI, AVATAR };
