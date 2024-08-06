import { grpChatRepoUseCase_T } from "../../Frameworks/express/services/chatServices";
import { Request } from "express";
import {
  AuthenticationError,
  EmptyFieldError,
} from "../../Utilities/customErrors/errorClass";
import { updateBlockGroupchat_I } from "../../Utilities/interface_nd_Types/chat_I";

const renameGrpUseCase = async (
  req: Request,
  useCase: grpChatRepoUseCase_T
) => {
  const { changeGrpNameorDescription } = useCase;

  const admin = req.authUserDetails?.id;
  const newGrpName = req.body.newGroupName;
  const newGrpDescription = req.body.newGrpDescription;
  const groupID = req.body.groupID;

  if (!admin) {
    console.error("authentication error in renameGrpUseCase ");
    throw new AuthenticationError();
  }

  let updateBlock: updateBlockGroupchat_I;

  //   hnadles group name change
  if (newGrpName) {
    updateBlock = { chatName: newGrpName };
    try {
      const updatedGrp = await changeGrpNameorDescription(
        admin,
        groupID,
        updateBlock
      );

      console.log("updatedGrp in renameGrpUseCase", updatedGrp);
      return updatedGrp;
    } catch (error) {
      console.error("error caught in renameGrpUseCase");
      throw error;
    }
  }

  //   hnadles group description change
  if (newGrpDescription) {
    console.log("newGrpDescription exists");

    try {
      updateBlock = { groupDescription: newGrpDescription };
      const updatedGrp = await changeGrpNameorDescription(
        admin,
        groupID,
        updateBlock
      );
      console.log("updatedGrp in renameGrpUseCase", updatedGrp);
      return updatedGrp;
    } catch (error) {
      console.error("error caught in renameGrpUseCase");
      throw error;
    }
  } else throw new EmptyFieldError("Please fill the details");
};

export default renameGrpUseCase;
