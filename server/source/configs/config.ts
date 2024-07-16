import dotenv from "dotenv";
dotenv.config();

const PORTNO = process.env.PORTNO ?? "3000";

const SALTROUNDS = process.env.SALT_ROUNDS ?? "10";

const JWTSECRET = process.env.JWT_SECRET ?? "122@123";

const JWTEXPIRY = process.env.JWT_EXPIRY ?? "5";

const ENV = process.env.NODE_ENV ?? "dev";

const COOKIE_SECRET = process.env.COOKIE_SECRET;

export { PORTNO, SALTROUNDS, JWTSECRET, JWTEXPIRY, ENV, COOKIE_SECRET };
