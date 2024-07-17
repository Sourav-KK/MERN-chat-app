import toast from "react-hot-toast";

const ToastError = (msg: string) => {
  return toast.error(msg, { duration: 4000, icon: "❌",position:"top-center" });
};
export default ToastError;
