import Zod from "zod";

// <<<<<<< HEAD
// export const signupFormSchema = Zod.object({
//   name: Zod.string()
//     .min(4, "Minimum 4 characters")
//     .max(16, "Maximum 16 characters"),
//   userName: Zod.string()
//     .min(4, "Minimum 4 characters")
//     .max(16, "Maximum 16 characters"),
//   email: Zod.string()
//     .email()
//     .min(4, "Invalid email")
//     .max(20, "Maximum 20 characters"),
//   gender: Zod.string().min(4, "Select your Gender").max(6, "Select again"),
//   password: Zod.string().min(2, "min length").max(16, "MAx lenth"),
// });
// =======
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

// <<<<<<< HEAD
export type signupFormValidator_I = typeof signupFormValidator
// >>>>>>> 5607caf7a3795fd6618d20f5fe37795eb341a2dd
// =======
// export type signupFormValidator_I = typeof signupFormValidator;
// >>>>>>> client
