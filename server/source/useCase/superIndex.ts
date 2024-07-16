import {
  T_userAuthRepo,
  T_userfindRepo,
} from "../Frameworks/express/services/userAuth";
import { I_Signup_FormData } from "../Utilities/interface/I_FormData";

const superIndex = (repo_1: T_userfindRepo, repo_2: T_userAuthRepo) => {
  const { userNameExists, emailId, emailOrUserName } = repo_1;
  const { createUser } = repo_2;

  const userNameSearch_super = (userName: string) => {
    return userNameExists(userName);
  };

  const emailIdSearch = (email: string) => {
    return emailId(email);
  };

  const emailOrUserNameSearch = (query: string) => {
    return emailOrUserName(query);
  };

  const createUser_super = (userDetails: I_Signup_FormData) => {
    return createUser(userDetails);
  };

  return {
    userNameSearch_super,
    emailIdSearch,
    createUser_super,
    emailOrUserNameSearch,
  };
};

export default superIndex;
export type T_superIndex = typeof superIndex;
