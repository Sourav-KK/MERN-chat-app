import { useFormik } from "formik";
import { initialValues } from "../utilities/formHelpers";
import { SignupFormSchema_I } from "../utilities/Interfaces/Forms";
import { AxiosError } from "axios";
import { trimObjectValues } from "../utilities/trimObjValues";
import capitalizeLetter from "../utilities/capitalizeFirstLetter";
import { signupFormValidator } from "../utilities/validations/SignupValidation";
import { ZodError } from "zod";
import toast from "react-hot-toast";
import postUserMethod from "../utilities/Axios/postMethod";
import { SIGNUP_PATH } from "../utilities/Axios/paths";

// custom hook for handling formik functionality for signup
const useFormikSignup = ({
  formValues,
  setFormValues,
  setIsSubmitting,
  setServerError,
  setError,
  handleAuthTabToggle,
}: {
  formValues: SignupFormSchema_I;
  setFormValues: React.Dispatch<React.SetStateAction<SignupFormSchema_I>>;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setServerError: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  handleAuthTabToggle: (val: boolean) => void;
}) => {
  const signupFormik = useFormik({
    initialValues: initialValues,

    initialErrors: initialValues,

    onSubmit: async (
      values: SignupFormSchema_I = formValues,
      { resetForm }
    ) => {
      setIsSubmitting(true);

      try {
        console.log("Form values:", values);

        const response = await postUserMethod(SIGNUP_PATH, values);

        console.log("response:", response);
        if (response.status === 200) {
          toast(response.data);
          setIsSubmitting(false);
          resetForm();
          handleAuthTabToggle(true);
          return;
        }

        console.log("response:", response);
        setIsSubmitting(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          setServerError(true);

          if (error.response?.status === 404) {
            setError("Request Failed. Please try again later");
          }

          setError(error.response?.data.errMessage);
          console.log("error.response", error.response);
          console.log("error.message", error.message);
        }
      }
    },

    validate: async (values: SignupFormSchema_I) => {
      try {
        const userVal: SignupFormSchema_I = trimObjectValues(values);
        userVal.fullName = capitalizeLetter(userVal.fullName);

        const userData = Object.freeze({ ...userVal });
        setFormValues(userData);
        signupFormValidator.parse(userData);
      } catch (error) {
        console.log("in errroe", error);
        setIsSubmitting(false);
        if (error instanceof ZodError) {
          console.log("error formik validation:", error.issues);
          return error.formErrors.fieldErrors;
        }
      }
    },

    onReset(values) {
      values.email = "";
      values.password = "";
      values.userName = "";
      values.gender = "";
      values.fullName = "";
    },
  });

  return signupFormik;
};

type FormikType = ReturnType<typeof useFormikSignup>;

export type HandleChangeType = FormikType["handleChange"];
export type HandleresetType = FormikType["handleReset"];
export type HandleValue_T = FormikType["values"];

export default useFormikSignup;
