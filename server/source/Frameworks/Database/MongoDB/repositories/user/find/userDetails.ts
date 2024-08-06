import { ObjectId } from "mongoose";
import { TypeUserModel } from "../../../../../../entities/user_schema.tntities";
import { repoOptionsAllUsers_I } from "../../../../../../Utilities/interface_nd_Types/options";

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
      const response = await model.findById({ _id: id }, { password: 0 });
      // console.log("is id exists reponse:", response);
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
        $or: [
          { userName: { $regex: value, $options: "i" } }, // case insensitive
          { email: { $regex: value, $options: "i" } }, // case insensitive
        ],
      });
      console.log("is emailOrUserName exists reponse:", response);
      return response;
    } catch (error) {
      console.error("error in emailOrUserName:", error);
      throw error;
    }
  };

  // search all users in the db except the logged in user
  const allMatchingUsers = async (options: repoOptionsAllUsers_I) => {
    const { userId, value } = options;
    try {
      console.log("in allUser uerdetailis repo");

      const response = await model.find(
        {
          $and: [
            {
              $or: [
                { userName: { $regex: value, $options: "i" } }, // case insensitive
                { fullName: { $regex: value, $options: "i" } }, // case insensitive
              ],
            },
            { _id: { $ne: userId } },
          ],
        },
        { email: 0, password: 0 }
      );

      console.log("is allUser exists reponse:", response);
      return response;
    } catch (error) {
      console.error("error in allUsers/ userdetailsRepo :", error);
      throw error;
    }
  };

  const retrieveAllUsers = async () => {
    try {
      const allUsers = await model.find();
      console.log("is emailOrUserName exists reponse:", allUsers);
      return allUsers;
    } catch (error) {
      console.error("error in emailOrUserName:", error);
      throw error;
    }
  };

  return {
    userNameExists,
    fullName,
    userId,
    emailId,
    emailOrUserName,
    allMatchingUsers,
    retrieveAllUsers,
  };
};

export type I_userdetailsRepository = typeof userdetailsRepository;

export default userdetailsRepository;
