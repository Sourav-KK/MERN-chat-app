import Zod from "zod";

export const signupFormSchema = Zod.object({
  name: Zod.string()
    .min(4, "Minimum 4 characters")
    .max(16, "Maximum 16 characters"),
  userName: Zod.string()
    .min(4, "Minimum 4 characters")
    .max(16, "Maximum 16 characters"),
  email: Zod.string()
    .email()
    .min(4, "Invalid email")
    .max(20, "Maximum 20 characters"),
  gender: Zod.string().min(4, "Select your Gender").max(6, "Select again"),
  password: Zod.string().min(2, "min length").max(16, "MAx lenth"),
});
