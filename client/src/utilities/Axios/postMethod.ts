import { axios_user } from ".";
import { SignupFormSchema_I } from "../Interfaces/Forms";
import { HTTPHeader } from "./axiosHelpers";

const postUserMethod = async (url: string, data: SignupFormSchema_I) => {
  const response = await axios_user.post(url, data, {
    timeout: 10000,
    headers: HTTPHeader.headers,
  });
  return response;
};

export default postUserMethod;
