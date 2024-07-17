import Zod from "zod";

export const signupFormValidator = Zod.object({
  fullName: Zod.string({ required_error: "Full name required" })
    .min(4, "Minimum 4 characters")
    .max(16, "Maximum 16 characters"),
  userName: Zod.string({ required_error: "User name required" })
    .min(4, "Minimum 4 characters")
    .max(16, "Maximum 16 characters"),
  email: Zod.string({ required_error: "Email required" })
    .min(4, "Minimum 8 characters")
    .max(20, "Maximum 20 characters")
    .email({ message: "Invalid email format" }),
  gender: Zod.string({ required_error: "Gender required" })
    .min(4, "Uexpected error. Please select your again")
    .max(6, "Uexpected error. Please select your again"),
  password: Zod.string({ required_error: "Password required" })
    .min(6, "Minimum 6 characters")
    .max(16, "Maximum 16 characters"),
});

export type signupFormValidator_I = typeof signupFormValidator