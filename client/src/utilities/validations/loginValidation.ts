import Zod from "zod";
<<<<<<< HEAD
=======
import { alphaNumsSplCharRegex, emailRegex } from "../regex";
>>>>>>> 5607caf7a3795fd6618d20f5fe37795eb341a2dd

export const loginFormSchema = Zod.object({
  emailORuserName:
    Zod.string()
<<<<<<< HEAD
      .email()
      .min(4, "Invalid email")
      .max(20, "Maximum 20 characters for email") ||
    Zod.string().min(2, "min length is 2").max(1, "Max lenth 1"),
  password: Zod.string().min(4, "min length").max(16, "MAx lenth"),
=======
      .trim()
      .email()
      .regex(emailRegex)
      .min(6, "Should contain 6-20 characters")
      .max(20, "Should contain 6-20 characters") ||
    Zod.string()
      .trim()
      .min(5, "Should contain 6-20 characters")
      .max(20, "Should contain 6-20 characters")
      .regex(alphaNumsSplCharRegex),

  password: Zod.string()
    .trim()
    .min(4, "Should contain 6-20 characters")
    .max(16, "Should contain 6-20 characters")
    .regex(alphaNumsSplCharRegex),
>>>>>>> 5607caf7a3795fd6618d20f5fe37795eb341a2dd
});
