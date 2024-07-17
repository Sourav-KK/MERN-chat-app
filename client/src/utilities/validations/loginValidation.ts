import Zod from "zod";
import { alphaNumsSplCharRegex, emailRegex } from "../regex";

export const loginFormSchema = Zod.object({
  emailORuserName:
    Zod.string()
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
});
