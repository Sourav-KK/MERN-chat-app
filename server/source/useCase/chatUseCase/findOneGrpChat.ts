import { Types } from "mongoose";
import { grpChatRepoUseCase_T } from "../../Frameworks/express/services/chatServices";

const findOneGrpChat = async (
  chatId: Types.ObjectId,
  useCase: grpChatRepoUseCase_T
) => {
  const { searchOneGrpChat } = useCase;
  try {
    const respoonse = await searchOneGrpChat(chatId);
    console.log("one grp chat in findOneGrpChat chat usecase");
    return respoonse;
  } catch (error) {
    console.error("Error in findOneGrpChat useCases:", error);
    throw error;
  }
};

export default findOneGrpChat;
