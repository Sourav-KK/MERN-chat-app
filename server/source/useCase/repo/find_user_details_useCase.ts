import { T_userfindRepo } from "../../Frameworks/express/services/userAuth";

const find_user_details_useCase = (repo: T_userfindRepo) => {
  const { userNameExists, } = repo;

  const userNameSearch = (userName: string) => {
    return userNameExists(userName);
  };

  // const emaiSearch = (email:String)=>{
  //   return 
  // }
  return {
    userNameSearch,
  };
};

export default find_user_details_useCase;
export type T_find_user_details_useCase = typeof find_user_details_useCase;
