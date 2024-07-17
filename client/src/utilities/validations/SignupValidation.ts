import Zod from "zod";

import {
  aplhabetsRegex,
  alphaNumsSplCharRegex,
  emailRegex,
  genderRegex,
} from "../regex";

export const signupFormValidator = Zod.object({
  fullName: Zod.string({ required_error: "Full name required" })
    .min(4, "Minimum 4 characters")
    .max(16, "Maximum 16 characters")
    .regex(aplhabetsRegex, "Full name should contain only alphabets"),

  userName: Zod.string({ required_error: "User name required" })
    .min(4, "Minimum 4 characters")
    .max(16, "Maximum 16 characters")
    .regex(
      alphaNumsSplCharRegex,
      "User name should contain alphabets, special characters & numbers"
    ),

  email: Zod.string({ required_error: "Email required" })
    .min(4, "Minimum 8 characters")
    .max(20, "Maximum 20 characters")
    .email({ message: "Invalid email format" })
    .regex(emailRegex, "Email format not satisfactory"),

  gender: Zod.string({ required_error: "Gender required" })
    .min(4, "Uexpected error. Please select your again")
    .max(6, "Uexpected error. Please select your again")
    .regex(genderRegex, "Choose from the given options"),

  password: Zod.string({ required_error: "Password required" })
    .min(6, "Minimum 6 characters")
    .max(16, "Maximum 16 characters")
    .regex(
      alphaNumsSplCharRegex,
      "Password should contain alphabets, special characters & numbers"
    ),
});

// <<<<<<< HEAD
export type signupFormValidator_I = typeof signupFormValidator
// >>>>>>> 5607caf7a3795fd6618d20f5fe37795eb341a2dd
// =======
// export type signupFormValidator_I = typeof signupFormValidator;
// >>>>>>> client
