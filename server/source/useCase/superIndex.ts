import { ObjectId } from "mongoose";
import {
  T_userAuthRepo,
  T_userfindRepo,
} from "../Frameworks/express/services/userAuth";
import { I_Signup_FormData } from "../Utilities/interface_nd_Types/I_FormData";
import { repoOptionsAllUsers_I } from "../Utilities/interface_nd_Types/options";

// repositiry use case
const superIndex = (repo_1: T_userfindRepo, repo_2: T_userAuthRepo) => {
  const { userNameExists, emailId, emailOrUserName, allMatchingUsers, userId } =
    repo_1;
  const { createUser } = repo_2;

  const userNameSearch_super = (userName: string) => {
    return userNameExists(userName);
  };

  const searchByUserId = (id: ObjectId) => {
    return userId(id);
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

  const findAllMatchingUsers = (options: repoOptionsAllUsers_I) => {
    return allMatchingUsers(options);
  };

  const findChatExists = () => {
    // return findChatRepo()
  };

  return {
    userNameSearch_super,
    searchByUserId,
    emailIdSearch,
    createUser_super,
    emailOrUserNameSearch,
    findAllMatchingUsers,
    findChatExists,
  };
};

export default superIndex;
export type T_superIndex = typeof superIndex;
