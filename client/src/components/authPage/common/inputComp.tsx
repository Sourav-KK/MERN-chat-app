import { HandleChangeType } from "../../../Hooks/useFormikSignup";

const InputComp = ({
  fieldErr,
  handleChange,
  fieldValue,
  fieldType,
  fieldName,
  placeHolder,
  autoComplete
}: {
  fieldErr: string | undefined;
  handleChange: HandleChangeType;
  fieldValue: string;
  fieldType: string;
  fieldName: string;
  placeHolder: string;
  autoComplete: string;

}) => {
  return (
    <div className="flex flex-col w-full">
      <p className={"text-red-600 text-left font-semibold"}>{fieldErr}</p>
      <input
        type={fieldType}
        name={fieldName}
        className={"bg-slate-100 border-2 p-1 text-stone-900 rounded-sm"}
        placeholder={placeHolder}
        autoComplete={autoComplete}
        onChange={handleChange}
        value={fieldValue}
      />
    </div>
  );
};

export default InputComp;
