import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconEye from "../icons/IconEye";
import IconEyeSlash from "../icons/IconEyeSlash";

const Login = () => {
  const [password, setPassword] = useState(false);
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
        <div className="login max-w-[500px] w-full mx-auto p-10 flex flex-col items-center relative shadow-lg">
          <h4 className="text-xl font-semibold mb-2 z-1">Wellcome Back!</h4>
          <p className="mb-5 text-sm font-medium">
            Don't have an account?{" "}
            <NavLink to={"/signup"} className="text-primary">
              Sign Up
            </NavLink>
          </p>
          <h3 className="text-2xl font-semibold mb-5">Sign In</h3>
          <form autoComplete="off" className="flex flex-col gap-5 w-[90%]">
            <div className="flex flex-col gap-2 text-sm font-medium">
              <label for="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full border rounded-md px-5 py-3 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm font-medium ">
              <label for="password">Password*</label>
              <div className="w-full border rounded-md px-5 py-3 pr-12 relative bg-white">
                <input
                  type={password ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-sm"
                />
                {password ? (
                  <IconEye
                    className={`absolute top-2/4 right-5 -translate-y-2/4 cursor-pointer`}
                    onClick={hiddenPassword}
                  ></IconEye>
                ) : (
                  <IconEyeSlash
                    className={`absolute top-2/4 right-5 -translate-y-2/4 cursor-pointer`}
                    onClick={showPassword}
                  ></IconEyeSlash>
                )}
              </div>
            </div>
            <button className="w-full h-[45px] text-white bg-primary rounded-md font-semibold">
              Sign in
            </button>
          </form>
          <div className="absolute -left-[250px] -bottom-[150px] w-[450px] h-[450px] -z-10">
            <svg
              id="10015.io"
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="#474bff"
                d="M364,309Q320,378,225.5,403.5Q131,429,105.5,334.5Q80,240,106,147Q132,54,222.5,83.5Q313,113,360.5,176.5Q408,240,364,309Z"
              />
            </svg>
          </div>
          <div className="absolute -top-[100px] -right-[200px]  w-[450px] h-[450px] -z-10">
            <svg
              id="10015.io"
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="#474bff"
                d="M396.5,307.5Q318,375,229.5,393Q141,411,113.5,325.5Q86,240,123,171Q160,102,254.5,76.5Q349,51,412,145.5Q475,240,396.5,307.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
