import { useState } from "react";
import ResetBtn from "./common/ResetBtn";
import useFormikSignup from "../../Hooks/useFormikSignup";
import { initialValues } from "../../utilities/formHelpers";
import { SignupFormSchema_I } from "../../utilities/Interfaces/Forms";
import PasswordComponent from "./common/passwordComponent";
import InputComp from "./common/inputComp";

const SignupComp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isServerError, setServerError] = useState<boolean>(false);
  const [isError, setError] = useState<string>("");

  const [formValues, setFormValues] =
    useState<SignupFormSchema_I>(initialValues);

  const togglePasswordView = (val: number) => {
    if (val === 1) {
      setShowPassword(true);
      return;
    }
    setShowPassword(false);
    return;
  };

  const formikForm = useFormikSignup({
    formValues,
    setFormValues,
    setIsSubmitting,
    setServerError,
    setError,
  });

  return (
    <div className="bg-transparent ">
      {/* axios error */}
      {isServerError && <p className="text-lg text-red-500">{isError}</p>}
      <form
        onSubmit={formikForm.handleSubmit}
        className="grid grid-cols-1 bg-transparent space-y-4"
      >
        <InputComp
          fieldErr={formikForm.errors.fullName}
          fieldName="fullName"
          fieldType="text"
          fieldValue={formikForm.values.fullName}
          handleChange={formikForm.handleChange}
          placeHolder="FULL NAME"
          autoComplete="new-fullName"
        />

        <InputComp
          fieldErr={formikForm.errors.email}
          fieldName="email"
          fieldType="email"
          fieldValue={formikForm.values.email}
          handleChange={formikForm.handleChange}
          placeHolder="EMAIL"
          autoComplete="new-email"
        />

        <InputComp
          fieldErr={formikForm.errors.userName}
          fieldName="userName"
          fieldType="text"
          fieldValue={formikForm.values.userName}
          handleChange={formikForm.handleChange}
          placeHolder="USER NAME"
          autoComplete="new-userName"
        />

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
            <option defaultValue={"Select your Gender"} value={""}>
              Select your Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <PasswordComponent
          togglePasswordView={togglePasswordView}
          showPassword={showPassword}
          passwordErr={formikForm.errors.password}
          passwordValue={formikForm.values.password}
          handleChange={formikForm.handleChange}
        />

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
