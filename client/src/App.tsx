import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./utilities/BrowserRoutes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />;
      <Toaster />
    </div>
  );
}

export default App;
