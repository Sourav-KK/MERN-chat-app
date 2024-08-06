import { T_userRepoUseCase } from "../../Frameworks/express/services/userAuth";
import { comparePassword } from "../../Utilities/bcryptUtils";
import { I_Login_FormData } from "../../Utilities/interface_nd_Types/I_FormData";
import { generateToken } from "../../Utilities/jwtUtils";
import { trimObjectValues } from "../../Utilities/trimObjVlues";
import setCookie from "../../Utilities/cookie";
import { loginFormValidator } from "../../Utilities/validator/logInValidation";
import { EmptyFieldError } from "../../Utilities/customErrors/errorClass";

const userLoginUseCase = async (
  formData: I_Login_FormData,
  useCase: T_userRepoUseCase
) => {
  try {
    if (!formData) {
      const error = new EmptyFieldError("Please fill the details");
      throw error;
    }

    const trimObj: I_Login_FormData = trimObjectValues(formData); // trim input values

    // console.log("trimObj:", trimObj);

    const { error, warning } = await loginFormValidator.validate(trimObj);

    if (error || warning) {
      throw error;
    }

    console.log("after validation");
    const { emailOrUserNameSearch } = useCase;

    //    check database contain email or user name
    const isEmailORUserName = await emailOrUserNameSearch(
      trimObj.userNameEmail
    );

    if (!isEmailORUserName?.email || !isEmailORUserName.userName) {
      throw new Error("Entered credentials do not match any existing user");
    }

    // compare passwords
    const isPassword = await comparePassword(
      trimObj.password,
      isEmailORUserName.password
    );

    if (!isPassword) {
      console.log("Login password failed");
      throw new Error("Entered credentials do not match any wxisting user");
    }

    //  jwt token generation
    const token = await generateToken(
      isEmailORUserName.userName,
      isEmailORUserName.email,
      isEmailORUserName._id
    );

    if (!token) {
      console.log("token is not generated");
      throw new Error("Unable to perform the action");
    }

    const { fullName, userName, email, profilePic, _id, gender } =
      isEmailORUserName;

    const userData = Object.freeze({
      fullName,
      userName,
      email,
      profilePic,
      _id,
      gender,
    });
    //     setting cookie
    const cookieOptions = await setCookie();

    const successResponseObj = Object.freeze({
      cookieName: "encryptedToken",
      cookieValue: token,
      cookieOptions,
      successMessage: `Welcome backe ${userData.userName}`,
      userData,
    });

    return successResponseObj;
  } catch (error) {
    throw error;
  }
};

export default userLoginUseCase;
