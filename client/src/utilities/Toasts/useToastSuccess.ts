import toast from "react-hot-toast";

const useToastSuccess = (msg: string) => {
  return toast(msg, {
    duration: 4000,
    icon: "👏",
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};
export default useToastSuccess;
