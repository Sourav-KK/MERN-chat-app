import Zod from "zod";

export const loginFormSchema = Zod.object({
  emailORuserName:
    Zod.string()
      .email()
      .min(4, "Invalid email")
      .max(20, "Maximum 20 characters for email") ||
    Zod.string().min(2, "min length is 2").max(1, "Max lenth 1"),
  password: Zod.string().min(4, "min length").max(16, "MAx lenth"),
});
