import { useState } from "react";
import SignupComp from "../components/authPage/SignupComp";
import LoginComp from "../components/authPage/LoginComp";

const Homepage = () => {
  const [loginTab, setLogin] = useState<boolean>(true);
  const [signupTab, setSignup] = useState<boolean>(false);

  const handleAuthTabToggle = (val: boolean) => {
    setLogin(val);
    setSignup(!val);
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
                  loginTab
                    ? "tab-active md:text-lg text-stone-200"
                    : "tab md:text-lg text-stone-800"
                } md:text-lg `}
                onClick={() => handleAuthTabToggle(true)}
              >
                Login
              </a>
              <a
                role="tab"
                className={`tab 
                 ${
                   signupTab
                     ? "tab-active md:text-lg text-stone-200"
                     : "tab md:text-lg text-stone-800"
                 } 
                  md:text-lg `}
                onClick={() => handleAuthTabToggle(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 p-4">
            {loginTab && <LoginComp />}
            {signupTab && (
              <SignupComp handleAuthTabToggle={handleAuthTabToggle} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
