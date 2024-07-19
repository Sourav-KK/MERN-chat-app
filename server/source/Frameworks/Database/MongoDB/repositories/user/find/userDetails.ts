import { ObjectId } from "mongoose";
import { TypeUserModel } from "../../../../../../entities/user_schema.tntities";

const userdetailsRepository = (model: TypeUserModel) => {
  const userNameExists = async (userName: string) => {
    try {
      const response = await model.findOne({ userName });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const fullName = async (fullName: String) => {
    try {
      console.log("in uerdetailis repo");
      const response = await model.findOne({ fullName });
      console.log("is fullName exists reponse:", response);
      return response;
    } catch (error) {
      console.error("error in fullName:", error);
      throw error;
    }
  };

  const userId = async (id: ObjectId) => {
    try {
      console.log("in uerdetailis repo");
      const response = await model.findById({ _id: id });
      console.log("is id exists reponse:", response);
      return response;
    } catch (error) {
      console.error("error in id:", error);
    }
  };

  const emailId = async (email: string) => {
    try {
      console.log("in uerdetailis repo");
      const response = await model.findOne({ email });
      console.log("is email exists reponse:", response);
      return response;
    } catch (error) {
      console.error("error in id:", error);
    }
  };

  const emailOrUserName = async (value: string) => {
    try {
      console.log("in emailOrUserName uerdetailis repo");

      const response = await model.findOne({
        $or: [{ userName: value }, { email: value }],
      });
      console.log("is emailOrUserName exists reponse:", response);
      return response;
    } catch (error) {
      console.error("error in emailOrUserName:", error);
    }
  };

  return {
    userNameExists,
    fullName,
    userId,
    emailId,
    emailOrUserName,
  };
};

export type I_userdetailsRepository = typeof userdetailsRepository;

export default userdetailsRepository;
