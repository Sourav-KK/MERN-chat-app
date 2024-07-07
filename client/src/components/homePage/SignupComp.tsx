import { useFormik } from "formik";
import { useState } from "react";
import { ValuesI } from "../../utilities/Interfaces/Forms";
import { signupFormSchema } from "../../utilities/validations/SignupValidation";
import { ZodError } from "zod";
import EyeToggleComp from "./EyeToggleComp";
import ResetBtn from "../Buttons/ResetBtn";

const SignupComp = () => {
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

  const formikForm = useFormik({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      gender: "",
    },
    onSubmit: async (values: ValuesI) => {
      console.log(JSON.stringify(values, null, 2));
    },

    validate(values) {
      try {
        signupFormSchema.parse(values);
      } catch (error) {
        if (error instanceof ZodError) {
          return error.formErrors.fieldErrors;
        }
      }
    },
  });

  return (
    <div className="bg-transparent ">
      <form
        onSubmit={formikForm.handleSubmit}
        className="grid grid-cols-1 bg-transparent space-y-4"
      >
        {/* name */}
        <div className="flex flex-col w-full">
          <p className={"text-red-600 text-left font-semibold"}>
            {formikForm.errors.name}
          </p>
          <input
            type="text"
            name="name"
            className={"bg-slate-100 border-2 p-1 text-stone-900 rounded-sm"}
            placeholder="FULL NAME"
            autoComplete={"new-name"}
            onChange={formikForm.handleChange}
            value={formikForm.values.name}
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
            {formikForm.errors.userName}
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
