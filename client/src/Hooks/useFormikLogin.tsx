import { initialLoginValues } from "../utilities/formHelpers";
import { useFormik } from "formik";
import { LoginValuesI } from "../utilities/Interfaces/Forms";
import { loginFormSchema } from "../utilities/validations/loginValidation";
import { ZodError } from "zod";

const useFormikLogin = ({
  setIsSubmitting,
}: {
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const formikCustom = useFormik({
    initialValues: initialLoginValues,

    initialErrors: initialLoginValues,

    onSubmit: async (values: LoginValuesI) => {
      console.log("login form onsubmit:", values);
      console.log(JSON.stringify(values, null, 2));
    },

    validate(values) {
      setIsSubmitting(true);

      try {
        loginFormSchema.parse(values);
        setIsSubmitting(false);
      } catch (error) {
        setIsSubmitting(false);

        if (error instanceof ZodError) {
          return error.formErrors.fieldErrors;
        }
      }
    },
  });

  return formikCustom;
};

export default useFormikLogin;
export type useFormikLogin_T = typeof useFormikLogin;
