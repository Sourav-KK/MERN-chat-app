// import findUserdetailsRepository from "../../../Frameworks/Database/MongoDB/repositories/user/find/userDetails";
// import I_userDetails from "../../../Frameworks/Database/MongoDB/repoInterface/I_userDetails";
// import { I_AuthUser } from "../../../Frameworks/Database/MongoDB/repoInterface/I_authUser";
// import {
//   IsignupValues,
//   newUser_I,
// } from "../../../helpers/interfaces/formInterface";
// import authoRepo from "../../../Frameworks/Database/MongoDB/repositories/user/authRepo";
// import { signupFormSchema } from "../../../Utilities/validation/signup";
// import { trimObjectValues } from "../../../Utilities/trimObjVlues";
// import UserModel from "../../../entities/user_schema.tntities";
// import { createPassword } from "../../../Utilities/bcryptUtils";
// import capitalizeWords from "../../../Utilities/capitalizeWord";
// import { ZodError } from "zod";

// const userRepository = I_userDetails(findUserdetailsRepository, UserModel);
// const userDetailsRepo = I_AuthUser(authoRepo, UserModel);

// const signupServices = async (formData: IsignupValues) => {
//   try {
//     const trimObj: IsignupValues = trimObjectValues(formData);
//     trimObj.name = capitalizeWords(formData.name);

//     console.log("trimObj:", trimObj);

//     await signupFormSchema.parse(trimObj);

//     const userExist: boolean | undefined =
//       await userRepository.isUserNameExists(formData.userName);

//     if (!userExist) {
//       const errObj = {
//         statusCode: 409,
//         errMessage: `User name: ${formData.userName} already taken`,
//       };
//       throw Error(String(errObj));
//     }

//     // password hashing
//     trimObj.password = await createPassword(trimObj.password);
//     console.log("trimObj:", trimObj);

//     const userDetails = Object.freeze(trimObj);

//     const val: newUser_I | undefined = await userDetailsRepo.createNewUser(
//       userDetails
//     );
//   } catch (error) {
//     if (error instanceof ZodError) {
//       let err = error.errors.map((err) => ({
//         errField: err.path.join("."), // Join path array into a string if it's an array
//         errMessage: err.message,
//       }));

//       console.error("Errors in signupServ:", err);
//     }
//   }
// };

// export default signupServices;

// // {
// //       code: 'too_small',
// //       minimum: 2,
// //       type: 'string',
// //       inclusive: true,
// //       exact: false,
// //       message: 'min length',
// //       path: [ 'password' ]
// //     }
