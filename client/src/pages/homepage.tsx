import { useState } from "react";
import SignupComp from "../components/homePage/SignupComp";
import LoginComp from "../components/homePage/LoginComp";

const Homepage = () => {
  const [loginTab, setLogin] = useState<boolean>(true);
  const [signupTab, setSignup] = useState<boolean>(false);

  const handleLoginTab = () => {
    setSignup(false);
    setLogin(true);
  };

  const handleSignupTab = () => {
    setLogin(false);
    setSignup(true);
  };

  return (
    <div className="flex justify-center w-full p-2 items-center ">
      {/* login hodler */}
      <div className="flex flex-col space-y-3 p-4 md:w-[50%] ">
        {/* heading holder */}
        <div className="flex bg-slate-50 justify-center rounded-md p-2">
          <h1 className="text-center text-lg md:text-4xl font-mono text-stone-800">
            MINGLE
          </h1>
        </div>

        <div className="flex p-4 flex-col bg-slate-50 rounded-md space-y-4">
          <div className="grid grid-cols-1 w-full justify-stretch ">
            <div role="tablist" className="tabs tabs-lifted">
              <a
                role="tab"
                className={`tab ${
<<<<<<< HEAD
                  loginTab && "tab-active md:text-lg text-slate-200"
=======
                  loginTab
                    ? "tab-active md:text-lg text-stone-200"
                    : "tab md:text-lg text-slate-200"
>>>>>>> 5607caf7a3795fd6618d20f5fe37795eb341a2dd
                } md:text-lg text-stone-800`}
                onClick={handleLoginTab}
              >
                Login
              </a>
              <a
                role="tab"
                className={`tab ${
<<<<<<< HEAD
                  signupTab && "tab-active md:text-lg text-slate-200"
                } md:text-lg text-stone-800`}
=======
                  signupTab
                    ? "tab-active md:text-lg text-stone-200"
                    : "tab md:text-lg text-slate-200"
                } 
                  md:text-lg text-stone-800`}
>>>>>>> 5607caf7a3795fd6618d20f5fe37795eb341a2dd
                onClick={handleSignupTab}
              >
                Sign Up
              </a>
            </div>

            {/* login */}
          </div>
          <div className="grid grid-cols-1 p-4">
            {loginTab && <LoginComp />}
            {signupTab && <SignupComp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
