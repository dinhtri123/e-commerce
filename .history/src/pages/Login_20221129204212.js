import React from "react";
import { NavLink } from "react-router-dom";
import IconEye from "../icons/IconEye";

const Login = () => {
  return (
    <div className="w-full h-screen">
      <div className="container w-full h-screen p-5 relative flex justify-center items-center">
        <img src="/logo.png" alt="" className="absolute top-10 left-10" />
        <div className="login max-w-[500px] w-full mx-auto p-10 flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-2">Wellcome Back!</h4>
          <p className="mb-5 text-sm font-medium">
            Don't have an account? <NavLink to={"/signup"} className='text-primary'>Sign Up</NavLink>
          </p>
          <h3 className="text-2xl font-semibold mb-5">Sign In</h3>
          <form autoComplete="off" className="flex flex-col gap-5 w-[90%]">
            <div className="flex flex-col gap-2">
              <label for="email">Email*</label>
              <input type="email" id="email" placeholder="example@gmail.com" className="w-full border rounded-md px-5 py-3 text-sm"/>
            </div>
            <div className="flex flex-col gap-2">
              <label for="password">Password*</label>
              <div className="w-full border rounded-md">
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="w-full  px-5 py-3 text-sm"
              />
              <IconEye></IconEye>
              </div>
            </div>
            <button>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
