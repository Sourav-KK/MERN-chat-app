import { useFormik } from "formik";
import { useState } from "react";
import { SignupFormSchema_I } from "../../utilities/Interfaces/Forms";
import { signupFormValidator } from "../../utilities/validations/SignupValidation";
import { ZodError } from "zod";
import EyeToggleComp from "./EyeToggleComp";
import ResetBtn from "../Buttons/ResetBtn";
import axios, { AxiosError } from "axios";
import { trimObjectValues } from "../../utilities/trimObjValues";
import capitalizeLetter from "../../utilities/capitalizeFirstLetter";
import { axios_user } from "../../utilities/Axios";
import { initialValues } from "../../utilities/formHelpers";

const SignupComp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isServerError, setServerError] = useState<boolean>(false);
  const [isError, setError] = useState<string>("");

  const [formValues, setFormValues] =
    useState<SignupFormSchema_I>(initialValues);

  const displayPassword = () => {
    setShowPassword(true);
  };

  const hidePassword = () => {
    setShowPassword(false);
  };

  const formikForm = useFormik({
    initialValues: initialValues,

    onSubmit: async (values: SignupFormSchema_I = formValues) => {
      setIsSubmitting(true);

      try {
        const config = { headers: { "Content-type": "application/json" } };

        const serverResponse = await axios.post("/api/auth", values, config);
        console.log("serverResponse:", serverResponse);

        const response = await axios_user.post("/auth", values, {
          timeout: 10000,
          headers: config.headers,
        });

        console.log("response:", response);
        setIsSubmitting(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          setServerError(true);

          if (error.response?.status === 404) {
            setError("Request Failed. Please try again later");
          }
          console.log("error.response", error.response);
          console.log("error.message", error.message);
        }
      }
    },

    initialErrors: initialValues,

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
  });

  return (
    <div className="bg-transparent ">
      {/* axios error */}
      {isServerError && <p className="text-lg text-red-500">{isError}</p>}
      <form
        onSubmit={formikForm.handleSubmit}
        className="grid grid-cols-1 bg-transparent space-y-4"
      >
        {/* name */}
        <div className="flex flex-col w-full">
          <p className={"text-red-600 text-left font-semibold"}>
            {formikForm.errors.fullName}
          </p>
          <input
            type="text"
            name="fullName"
            className={"bg-slate-100 border-2 p-1 text-stone-900 rounded-sm"}
            placeholder="FULL NAME"
            autoComplete={"new-name"}
            onChange={formikForm.handleChange}
            value={formikForm.values.fullName}
          />
        </div>

        {/* email */}
        <div className="flex flex-col w-full">
          <p className={"text-red-600 text-left font-semibold"}>
            {formikForm.errors.email}
          </p>
          <input
            type="email"
            name="email"
            className={"bg-slate-100 border-2 p-1 text-stone-900 rounded-sm"}
            placeholder="EMAIL"
            autoComplete={"new-email"}
            onChange={formikForm.handleChange}
            value={formikForm.values.email}
          />
        </div>

        {/* user name */}
        <div className="flex flex-col w-full">
          <p className={"text-red-600 text-left font-semibold"}>
            {formikForm.errors.userName}
          </p>
          <input
            type="text"
            name="userName"
            className={"bg-slate-100 border-2 p-1 text-stone-900 rounded-sm"}
            placeholder="USER NAME"
            autoComplete={"new-userName"}
            onChange={formikForm.handleChange}
            value={formikForm.values.userName}
          />
        </div>

        {/* gender */}
        <div className="flex flex-col w-full">
          <p className={"text-red-600 text-left font-semibold"}>
            {formikForm.errors.gender}
          </p>
          <select
            name="gender"
            className={"bg-slate-100 text-stone-900 border-2 p-2 rounded-sm"}
            onChange={formikForm.handleChange}
            value={formikForm.values.gender}
          >
            <option value="" disabled selected>
              Select your Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* password */}
        <div className="fles w-full">
          <p className={"text-red-600 text-left font-semibold"}>
            {formikForm.errors.password}
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
              onChange={formikForm.handleChange}
              value={formikForm.values.password}
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

        <div className="grid justify-stretch place-items-end" title="Reset">
          <ResetBtn handleReset={formikForm.handleReset} />
        </div>
      </form>
    </div>
  );
};

export default SignupComp;
