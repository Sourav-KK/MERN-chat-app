import Joi from "joi";
import { alphaNumsSplChar, emailRegex } from "../Regex";

export const loginFormValidator = Joi.object({
  userNameEmail:
    Joi.string()
      .trim()
      .required()
      .min(4)
      .max(10)
      .regex(
        alphaNumsSplChar,
        "User Name should contain only aplhabets, numbers & special characters"
      ) ||
    Joi.string()
      .email()
      .trim()
      .required()
      .min(6)
      .max(16)
      .regex(emailRegex, "Unable to validate email"),

  password: Joi.string()
    .trim()
    .required()
    .min(4)
    .max(16)
    .regex(alphaNumsSplChar),
});
