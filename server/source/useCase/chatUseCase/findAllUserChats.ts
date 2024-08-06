import { chatRepoUseCase_T } from "../../Frameworks/express/services/chatServices";
import { AuthenticationError } from "../../Utilities/customErrors/errorClass";
import { Request } from "express";

const findAllUserChats = async (req: Request, useCases: chatRepoUseCase_T) => {
  console.log("findAllUserChats useCases:");

  const { fetchAllChats } = useCases;
  if (!req.authUserDetails?.id) {
    const error = new AuthenticationError();
    throw error;
  }
  try {
    const allChats = await fetchAllChats(req.authUserDetails.id);
    console.log("allChats in findAllUserChats useCases:", allChats);
    return allChats;
  } catch (error) {
    console.error("Error in findAllUserChats useCases:", error);
    throw error;
  }
};

export default findAllUserChats;
