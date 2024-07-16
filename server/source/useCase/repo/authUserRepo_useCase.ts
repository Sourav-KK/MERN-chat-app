import { T_userAuthRepo } from "../../Frameworks/express/services/userAuth";
import { I_Signup_FormData } from "../../Utilities/interface/I_FormData";

const auth_user_repo_useCases = (repo: T_userAuthRepo) => {
  const { createUser } = repo;

  const createUserinDB = (userDetails: I_Signup_FormData) => {
    return createUser(userDetails);
  };
  return { createUserinDB };
};

export default auth_user_repo_useCases;
export type T_auth_user_repo_useCases = typeof auth_user_repo_useCases;
