import { Request } from "express";
import {
  AuthenticationError,
  EmptyFieldError,
} from "../../Utilities/customErrors/errorClass";
import { grpChatRepoUseCase_T } from "../../Frameworks/express/services/chatServices";
import findOneGrpChat from "./findOneGrpChat";

const newGrpChatUseCase = async (
  req: Request,
  useCase: grpChatRepoUseCase_T
) => {
  const groupName = req.body.groupName;

  if (!req.authUserDetails?.id) {
    throw new AuthenticationError();
  }

  if (!req.body.groupMembers) {
    console.error("group members is empty in newGrpChatUseCase");
    throw new EmptyFieldError("Please select memebers");
  }

  const members = JSON.parse(req.body.groupMembers);

  if (members.length < 2) {
    console.error("minimum 3 members required in newGrpChatUseCase");
    throw new EmptyFieldError(
      "Minimum 3 memebers are required to start a group"
    );
  }

  if (!groupName) {
    console.error("group name is empty in newGrpChatUseCase");
    throw new EmptyFieldError("Please provide a name for the group");
  }

  members.push(req.authUserDetails.id);
  const adminId = req.authUserDetails.id;

  const { newGroup } = useCase;
  try {
    const newGrpChatResponse = await newGroup({ members, groupName, adminId });
    console.log("newGrpChatResponse in newGrpChatUseCase", newGrpChatResponse);

    const onGrpChat = await findOneGrpChat(newGrpChatResponse._id, useCase);
    console.log("onGrpChat in newGrpChatUseCase", onGrpChat);
    return onGrpChat;
  } catch (error) {
    console.error("Error in newGrpChatUseCase useCases:", error);
    throw error;
  }
};

export default newGrpChatUseCase;
