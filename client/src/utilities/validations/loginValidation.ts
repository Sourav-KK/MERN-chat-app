import Zod from "zod";
import { alphaNumsSplCharRegex, passwordRegex } from "../regex";
// emailRegex

export const loginFormSchema = Zod.object({
  emailORuserName: Zod.string()
    .trim()
    .min(6, "Should contain 6-20 characters")
    .max(20, "Should contain 6-20 characters")
    .regex(alphaNumsSplCharRegex),
  // Zod.string()
  //   .trim()
  //   .email()
  //   .regex(emailRegex)
  //   .min(6, "Should contain 6-20 characters")
  //   .max(20, "Should contain 6-20 characters") ||

  password: Zod.string()
    .trim()
    .min(4, "Should contain 6-20 characters")
    .max(16, "Should contain 6-20 characters")
    .regex(passwordRegex, {
      message:
        "Password should contain uppercase, lowercase, number, special& character",
    }),
});
