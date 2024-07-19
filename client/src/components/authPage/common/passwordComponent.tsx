import EyeToggleComp from "./EyeToggleComp";
import { HandleChangeType } from "../../../Hooks/useFormikSignup";

const PasswordComponent = ({
  passwordErr,
  showPassword,
  togglePasswordView,
  handleChange,
  passwordValue,
}: {
  passwordErr: string | undefined;
  showPassword: boolean;
  togglePasswordView: (val: number) => void;
  handleChange: HandleChangeType;
  passwordValue: string;
}) => {
  return (
    <div className="fles w-full">
      <p className={"text-red-600 text-left font-semibold"}>{passwordErr}</p>
      <div className="flex">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          autoComplete={"new-password"}
          className={
            "bg-slate-100 border-2 p-1 text-stone-900 rounded-sm w-4/5 "
          }
          placeholder="PASSWORD"
          onChange={handleChange}
          value={passwordValue}
        />
        <EyeToggleComp togglePasswordView={togglePasswordView} />
      </div>
    </div>
  );
};

export default PasswordComponent;
