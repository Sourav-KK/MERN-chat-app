import Joi from "joi";

import {
  alphaNumsSplChar,
  aplhabets,
  emailRegex,
  genderRegex,
  passwordRegex,
} from "../Regex";

export const signupFormValidator = Joi.object({
  fullName: Joi.string()
    .trim()
    .required()
    .min(4)
    .max(16)
    .regex(aplhabets, "Name should contain only aplhabets"),

  userName: Joi.string()
    .trim()
    .required()
    .min(4)
    .max(16)
    .regex(
      alphaNumsSplChar,
      "User Name should contain only aplhabets, numbers & special characters"
    ),

  email: Joi.string()
    .email()
    .trim()
    .required()
    .min(4)
    .max(16)
    .regex(emailRegex, "Unable to validate email"),

  password: Joi.string()
    .trim()
    .required()
    .min(6)
    .max(16)
    .regex(
      passwordRegex,
      "Password should contain uppercase, lowercase, number, special& character"
    ),

  gender: Joi.string()
    .trim()
    .required()
    .min(4)
    .max(6)
    .regex(genderRegex, "Gender validation failed"),
});
