import UserAuthController from "../../../adapters/controllers/userAuth/UserAuthController";
import UserModel from "../../../entities/user_schema.tntities";
import useCases from "../../../useCase/index";
import authoRepo from "../../Database/MongoDB/repositories/user/authRepo";
import userdetailsRepository from "../../Database/MongoDB/repositories/user/find/userDetails";
import find_user_details_useCase from "../../../useCase/repo/find_user_details_useCase";
import auth_user_repo_useCases from "../../../useCase/repo/authUserRepo_useCase";
import superIndex from "../../../useCase/superIndex";

const authUserControl = UserAuthController(useCases);
export type T_authUserControl = typeof authUserControl;

// user details repo
const userfindRepo = userdetailsRepository(UserModel);
export type T_userfindRepo = typeof userfindRepo;

const user_details_useCase = find_user_details_useCase(userfindRepo);
export type T_user_details_useCase = typeof user_details_useCase;

// const user_auth_Repo =
const userAuthRepo = authoRepo(UserModel);
export type T_userAuthRepo = typeof userAuthRepo;

const user_auth_useCase = auth_user_repo_useCases(userAuthRepo);
export type T_user_auth_useCase = typeof user_auth_useCase;

const userRepoUseCase = superIndex(userfindRepo, userAuthRepo);
export type T_userRepoUseCase = typeof userRepoUseCase;

export {
  // controls
  authUserControl,
  // useCases

  //   user_details_Repo,
  userfindRepo,
  user_details_useCase,
  user_auth_useCase,

  // supser index
  userRepoUseCase,

  // chat
};
