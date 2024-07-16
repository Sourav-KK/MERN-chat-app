import createUser from "./user/createUser";
import userLoginUseCase from "./user/login";

const useCases = () => {
  return Object.freeze({
    userCreation: createUser,
    login: userLoginUseCase,
    // findUserName: userNameSearch,
  });
};

export default useCases;

export type T_UseCases = typeof useCases;
