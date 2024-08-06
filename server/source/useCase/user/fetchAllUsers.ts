import { T_userRepoUseCase } from "../../Frameworks/express/services/userAuth";
import { Request } from "express";
import {
  AuthenticationError,
  EmptyFieldError,
} from "../../Utilities/customErrors/errorClass";

const fetchAllUsers = async ({
  req,
  useCase,
}: {
  req: Request;
  useCase: T_userRepoUseCase;
}) => {
  console.log("inside fetchAllUsers usecase");
  const { findAllMatchingUsers } = useCase;

  const value = req.query?.value || "";
  const userId = req.authUserDetails?.id;

  if (!userId) {
    console.log("auth error inside fetchAllUsers usecase");
    const error = new AuthenticationError();
    throw error;
  }
  if (!value) {
    console.log("no found value inside fetchAllUsers usecase");
    const error = new EmptyFieldError("Please provide some keys");
    throw error;
  }

  try {
    const dbResponse = await findAllMatchingUsers({ value, userId });
    console.log("alluser details in fetchAllUsers usecase:", dbResponse);

    return dbResponse;
  } catch (error) {
    console.log("error in fetchAllUsersUseCase:", error);
    throw error;
  }
};

export default fetchAllUsers;
