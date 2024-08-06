import { useState } from "react";
import useFormikLogin from "../../Hooks/useFormikLogin";
import ResetBtn from "./common/ResetBtn";
import PasswordComponent from "./common/passwordComponent";
import InputComp from "./common/inputComp";

const LoginComp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const togglePasswordView = (val: number) => {
    if (val === 1) {
      setShowPassword(true);
      return;
    }
    setShowPassword(false);
    return;
  };

  const formikLoginForm = useFormikLogin({ setIsSubmitting });

  return (
    <div className="bg-transparent" id="loginComp">
      <form
        onSubmit={formikLoginForm.handleSubmit}
        className="grid grid-cols-1 bg-transparent space-y-4"
      >
        <InputComp
          fieldErr={formikLoginForm.errors.emailORuserName}
          fieldName="emailORuserName"
          fieldType="text"
          fieldValue={formikLoginForm.values.emailORuserName}
          handleChange={formikLoginForm.handleChange}
          placeHolder="EMAIL OR USER NAME"
          autoComplete="new-emailORuserName"
        />

        <PasswordComponent
          handleChange={formikLoginForm.handleChange}
          passwordErr={formikLoginForm.errors.password}
          passwordValue={formikLoginForm.values.password}
          showPassword={showPassword}
          togglePasswordView={togglePasswordView}
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
          <ResetBtn handleReset={formikLoginForm.handleReset} />
        </div>
      </form>
    </div>
  );
};

export default LoginComp;
