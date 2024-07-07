interface ValuesI {
  name: string;
  email: string;
  userName: string;
  password: string;
  gender: string;
}

interface LoginValuesI {
  emailORuserName: string;
  password: string;
}

export type { ValuesI, LoginValuesI };
