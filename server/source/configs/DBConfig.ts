import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;
const AVATAR = process.env.DEFAULT_AVATAR;

const PGHOST = process.env.PG_HOST;
const PGPORT = process.env.PG_PORT;
const PGUSER = process.env.PG_USER;
const PGPASSWORD = process.env.PG_PASSWORD;
const PGDB = process.env.PG_DATABASE;

export { MONGO_URI, AVATAR, PGDB, PGHOST, PGPASSWORD, PGPORT, PGUSER };
