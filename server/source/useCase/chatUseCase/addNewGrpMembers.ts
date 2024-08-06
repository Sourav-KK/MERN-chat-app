import { Request } from "express";
import { grpChatRepoUseCase_T } from "../../Frameworks/express/services/chatServices";
import {
  AuthenticationError,
  DuplicateError,
  EmptyFieldError,
} from "../../Utilities/customErrors/errorClass";
import { Types } from "mongoose";
import { checkForUser } from "../../Utilities/loopFunctions";

const addNewGrpMembers = async (
  req: Request,
  useCase: grpChatRepoUseCase_T
) => {
  const { addMembers, searchOneGrpChat } = useCase;
  const admin = req.authUserDetails?.id;
  const groupID = req.body.groupID;

  if (!admin) {
    console.error("authentication error in addNewGrpMembers ");
    throw new AuthenticationError();
  }

  const members: Types.ObjectId[] = JSON.parse(req.body.newMembers);
  console.log("parse members in addNewGrpMembers:", members);

  try {
    const response = await searchOneGrpChat(groupID);
    console.log("check in addNewGrpMembers", response);

    if (!response?.users) {
      console.log("no users found in req.body in addNewGrpMembers");
      throw new EmptyFieldError("Please add users");
    }

    // checks if group already contains the user
    const check = await checkForUser(members, response?.users);
    // console.log("check in addNewGrpMembers", check);

    if (check) {
      console.log("User exists in addNewGrpMembers");
      throw new DuplicateError(
        `Action failed.${check} already exists in the group`
      );
    }

    // add members to group
    const dbResponse = await addMembers(groupID, members);
    return dbResponse;
  } catch (error) {
    console.error("error caught in addNewGrpMembers useCase", error);
    throw error;
  }
};

export default addNewGrpMembers;
