import { T_superUserUserCase } from "../../Frameworks/express/services/userAuth";
import { createPassword } from "../../Utilities/bcryptUtils";
import capitalizeWords from "../../Utilities/capitalizeWord";
import defaultProfilePic from "../../Utilities/defaultProfilePic";
import { I_Signup_FormData } from "../../Utilities/interface/I_FormData";
import { trimObjectValues } from "../../Utilities/trimObjVlues";
import { signupFormValidator } from "../../Utilities/validator/signupValidator";

const createUser = async (
  formData: I_Signup_FormData,
  superUserUserCase: T_superUserUserCase
) => {
  try {
    const { createUser_super, userNameSearch_super } = superUserUserCase;

    const trimObj: I_Signup_FormData = trimObjectValues(formData); // trim input

    trimObj.fullName = capitalizeWords(formData.fullName); // capitalize first letter of full name
    trimObj.avatar = defaultProfilePic(trimObj.userName); // set default picture

    // form validation
    const { email, fullName, gender, password, userName } = trimObj;

    const { error, warning } = await signupFormValidator.validate({
      fullName: fullName,
      userName: userName,
      email: email,
      password: password,
      gender: gender,
    });

    if (error || warning) throw error;

    // check user name exists
    const isUserNameExists = await userNameSearch_super(trimObj.userName);

    if (isUserNameExists) {
      throw new Error(`User name: ${formData.userName} already taken`);
    }

    // password hashing
    trimObj.password = await createPassword(trimObj.password);

    const userDetails = Object.freeze(trimObj);

    const val = await createUser_super(userDetails); // create new user
    return val;
  } catch (error) {
    console.log("error found in create user use case");
    throw error;
  }
};

export default createUser;

export type T_createUser = typeof createUser;
