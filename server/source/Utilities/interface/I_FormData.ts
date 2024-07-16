export interface I_Signup_FormData {
  fullName: string;
  email: string;
  userName: string;
  gender: string;
  password: string;
  avatar: String;
}

export interface I_Login_FormData {
  userNameEmail: string;
  password: string;
}
