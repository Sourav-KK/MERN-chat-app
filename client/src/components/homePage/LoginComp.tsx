import { ZodError } from "zod";
import { useFormik } from "formik";
import { useState } from "react";
import { LoginValuesI } from "../../utilities/Interfaces/Forms";
import EyeToggleComp from "./EyeToggleComp";
import { loginFormSchema } from "../../utilities/validations/loginValidation";

const LoginComp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const displayPassword = () => {
    setShowPassword(true);
    console.log("pasword:", showPassword);
  };

  const hidePassword = () => {
    setShowPassword(false);
    console.log("pasword:", showPassword);
  };

  const formikLoginForm = useFormik({
    initialValues: {
      emailORuserName: "",
      password: "",
    },

    onSubmit: async (values: LoginValuesI) => {
      console.log("onsubmit")
      console.log(JSON.stringify(values, null, 2));
    },

    onReset(values: LoginValuesI) {
      values.emailORuserName = "";
      values.password = "";
    },
    validate(values) {
      try {
        loginFormSchema.parse(values);
      } catch (error) {
        if (error instanceof ZodError) {
          return error.formErrors.fieldErrors;
        }
      }
    },
  });

  return (
    <div className="bg-transparent">
      <form
        onSubmit={formikLoginForm.handleSubmit}
        className="grid grid-cols-1 bg-transparent space-y-4"
      >
        {/* email */}
        <div className="flex flex-col w-full">
          <p className={"text-red-600 text-left font-semibold"}>
            {formikLoginForm.errors.emailORuserName}
          </p>
          <input
            type="text"
            name="emailORuserName"
            className={"bg-slate-100 border-2 p-1 text-stone-900 rounded-sm"}
            placeholder="EMAIL or USER NAME"
            autoComplete={"new-email"}
          />
        </div>

        {/* password */}
        <div className="fles w-full">
          <p className={"text-red-600 text-left font-semibold"}>
            {formikLoginForm.errors.password}
          </p>
          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete={"new-password"}
              className={
                "bg-slate-100 border-2 p-1 text-stone-900 rounded-sm w-4/5 "
              }
              placeholder="PASSWORD"
            />
            <EyeToggleComp
              displayPassword={displayPassword}
              hidePassword={hidePassword}
            />
          </div>
        </div>

        <div className="grid justify-stretch">
          <button
            type="submit"
            // disabled={!isSubmitting}
            className="btn btn-info"
            title={isSubmitting ? "Diabled" : ""}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComp;
