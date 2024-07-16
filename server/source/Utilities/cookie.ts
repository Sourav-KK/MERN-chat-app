import { ENV } from "../configs/config";

const setCookie = async () => {
  const cookieExpiry = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);

  const cookieOptions = Object.freeze({
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, // prevent XXS attacks, js cannot access this
    sameSite: "strict", // CSRF attacks
    secure: true,
    expires: cookieExpiry,
    signed: true,
    priority: "medium",
  });
  return cookieOptions;
};
export default setCookie;
