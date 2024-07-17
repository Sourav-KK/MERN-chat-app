interface SignupFormSchema_I {
  fullName: string;
  email: string;
  userName: string;
  password: string;
  gender: string;
}

interface LoginValuesI {
  emailORuserName: string;
  password: string;
}

export type { SignupFormSchema_I, LoginValuesI };
