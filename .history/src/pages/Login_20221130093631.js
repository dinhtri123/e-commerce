import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import IconEye from "../icons/IconEye";
import IconEyeSlash from "../icons/IconEyeSlash";

const schema = 
const Login = () => {
  const { control, handleSubmit, formState:{error} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full h-screen bg-primary bg-opacity-10">
      <div className="container w-full h-screen p-5 relative flex justify-center items-center">
        <img src="/logo.png" alt="" className="absolute top-10 left-10" />
        <div className="login max-w-[500px] w-full mx-auto p-10 flex flex-col items-center relative shadow-2xl rounded-lg">
          <h4 className="text-xl font-semibold mb-2 z-10">Wellcome Back!</h4>
          <p className="mb-5 text-sm font-medium z-10">
            Don't have an account?{" "}
            <NavLink to={"/signup"} className="text-primary">
              Sign Up
            </NavLink>
          </p>
          <h3 className="text-2xl font-semibold mb-5 z-10">Sign In</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex flex-col gap-5 w-[90%] z-10"
          >
            <Input type="email" name="email" placeholder="example@gmail.com" control={control}></Input>
            <InputPassword></InputPassword>
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
          <div className="absolute -top-[150px] -right-[250px]  w-[450px] h-[450px] -z-10">
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
