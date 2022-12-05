import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconEye from "../icons/IconEye";
import IconEyeSlash from "../icons/IconEyeSlash";

const Login = () => {
  const [password, setPassword] = useState(false)
  const showPassword = () => {
    setPassword(true);
  };
  const hiddenPassword = () => {
    setPassword(false);
  };
  return (
    <div className="w-full h-screen">
      <div className="container w-full h-screen p-5 relative flex justify-center items-center">
        <img src="/logo.png" alt="" className="absolute top-10 left-10" />
        <div className="login max-w-[500px] w-full mx-auto p-10 flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-2">Wellcome Back!</h4>
          <p className="mb-5 text-sm font-medium">
            Don't have an account?{" "}
            <NavLink to={"/signup"} className="text-primary">
              Sign Up
            </NavLink>
          </p>
          <h3 className="text-2xl font-semibold mb-5">Sign In</h3>
          <form autoComplete="off" className="flex flex-col gap-5 w-[90%]">
            <div className="flex flex-col gap-2">
              <label for="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full border rounded-md px-5 py-3 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label for="password">Password*</label>
              <div className="w-full border rounded-md px-5 py-3 pr-12 relative">
                <input
                  type={password ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-sm"
                />
                {password ? (
                  <IconEyeSlash className={`absolute top-2/4 right-5 -translate-y-2/4 cursor-pointer`}
                    onClick={hiddenPassword}></IconEyeSlash>
                ) : (
                  <IconEye
                    className={`absolute top-2/4 right-5 -translate-y-2/4 cursor-pointer`}
                    onClick={showPassword}
                  ></IconEye>
                )}
              </div>
            </div>
            <button className="w-full py-3 text-lg text-white bg-primary rounded-md">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
