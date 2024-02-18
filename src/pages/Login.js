import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import ButtonLoading from "../components/button/ButtonLoading";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import axios from "axios";

const schema = yup.object({
  name: yup
    .string()
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
});
const Login = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const onSubmit = async (values) => {
    console.log("🚀 ~ file: Login.js:34 ~ onSubmit ~ values:", values)
    if (!isValid) return;
    
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="w-full h-screen bg-primary bg-opacity-10">
      <div className="container w-full h-screen p-5 relative flex justify-center items-center">
        <NavLink to="/" className={"absolute top-5 left-5"}>
          <img src="/qora.png" alt="" className="w-[50px] h-[50px]" />
        </NavLink>
        <div className="login max-w-[500px] w-full mx-auto p-10 flex flex-col items-center relative shadow-2xl rounded-lg">
          <h4 className="text-xl font-semibold mb-2 z-10">Welcome Back!</h4>
          <p className="mb-5 text-sm font-medium z-10">
            Don't have an account?{" "}
            <NavLink to={"/signup"} className="sm:text-primary text-error">
              Sign Up
            </NavLink>
          </p>
          <h3 className="text-2xl font-semibold mb-5 z-10">Sign In</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex flex-col gap-5 w-[90%] z-10"
          >
            <Input
              text={"Email*"}
              type="text"
              name="name"
              placeholder="name"
              control={control}
              error={errors.email?.message}
            ></Input>
            <InputPassword
              name="password"
              error={errors.password?.message}
              control={control}
            ></InputPassword>

            <ButtonLoading disable={isSubmitting} loading={isSubmitting}>
              Sign In
            </ButtonLoading>
            {isAuthenticated && "Đã đăng nhập"}
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
