import { TypeUserModel } from "../../../../../entities/user_schema.tntities";
import { I_Signup_FormData } from "../../../../../Utilities/interface/I_FormData";

const authoRepo = (model: TypeUserModel) => {
  const createUser = async (userDetails: I_Signup_FormData) => {
    try {
      const newUser = new model({
        fullName: userDetails.fullName,
        email: userDetails.email,
        userName: userDetails.userName,

        password: userDetails.password,
        gender: userDetails.gender,
        profilePic: userDetails.avatar,
      });

      const response = await newUser.save();
      console.log("response:", response);
      return { succesMsg: `Welcome ${userDetails.userName}` };
    } catch (error) {
      throw error;
    }
  };

  return {
    createUser,
  };
};

export type I_authoRepo = typeof authoRepo;

export default authoRepo;
