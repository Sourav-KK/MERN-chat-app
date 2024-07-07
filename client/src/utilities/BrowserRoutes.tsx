import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage.tsx";
import Chatpage from "../pages/Chatpage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/chat",
    element: <Chatpage />,
  },
]);

export default router;
