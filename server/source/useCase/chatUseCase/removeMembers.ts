import { Request } from "express";
import { grpChatRepoUseCase_T } from "../../Frameworks/express/services/chatServices";
import { AuthenticationError } from "../../Utilities/customErrors/errorClass";
import { Types } from "mongoose";
import { mongooseUtls, stringToObjectID } from "../../Utilities/mongooseUtls";

const removeMembers = async (req: Request, useCase: grpChatRepoUseCase_T) => {
  const { removeGrpMembers, findGrpMembers } = useCase;

  const admin = req.authUserDetails?.id;

  if (!admin) {
    console.error("authentication error in  removeMembers ");
    throw new AuthenticationError();
  }

  const members: string[] = JSON.parse(req.body.newMembers);

  console.log("members ", members);

  const val: Types.ObjectId[] = await mongooseUtls(members);
  // console.log("val", val);

  if (members.length < 1) {
    console.error("no members are selected removeMembers");
    return;
  }

  let groupID = req.body.groupID;
  // console.log("groupID ", groupID);

  if (!groupID) {
    console.error("Group not found");
    return;
  }
  console.log("grp found");
  groupID = stringToObjectID(groupID);
  // console.log("groupID", groupID);

  //   validation to be done ===>

  try {
    // check if selected members are group members
    const memberNames = await findGrpMembers(groupID, val);
    console.log("memebers are present");
    if (!memberNames?.users || !memberNames._id) {
      console.error(
        "The provided memebers are not a part of the group selected removeMembers"
      );
      throw new Error(
        "Action failed.The selected memebers are not a part of the group"
      );
    }

    const response = await removeGrpMembers(groupID, val);
    console.log("response from remove members in  removeMembers", response);
    return { msg: "Successfully removed the members", response };
  } catch (error) {
    console.error("error caught in  removeMembers");
    throw error;
  }
};

export default removeMembers;
