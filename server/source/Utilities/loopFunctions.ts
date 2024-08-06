import { Types } from "mongoose";
import { ObjectId } from "mongodb";
import { OneUser_I } from "./interface_nd_Types/I_user_Schema";

const checkForUser = async (A: Types.ObjectId[], B: OneUser_I[]) => {
  for (const aItem of A) {
    const matchingItem = B.find((bItem) =>
      bItem._id.equals(new ObjectId(aItem))
    );
    if (matchingItem) {
      return matchingItem.userName;
    }
  }
  return undefined;
};

export { checkForUser };
