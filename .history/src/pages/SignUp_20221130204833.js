import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";

import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 characters"),
});
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const useCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = useCredential.user;
      console.log(user);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full h-screen bg-primary bg-opacity-10">
      <div className="container w-full h-100vh p-5 relative flex justify-center items-center">
        <img src="/logo.png" alt="" className="absolute top-10 left-10" />
        <div className="login max-w-[500px] w-full h-auto mx-auto p-10 flex flex-col items-center relative shadow-2xl rounded-lg">
          <h4 className="text-xl font-semibold mb-2 z-10">
            Welcome To Our Website!
          </h4>
          <p className="mb-5 text-sm font-medium z-10">
            Already have an account?{" "}
            <NavLink to={"/login"} className="text-primary">
              Sign Up
            </NavLink>
          </p>
          <h3 className="text-2xl font-semibold mb-5 z-10">Sign Up</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex flex-col gap-5 w-[90%] z-10"
          >
            <Input
              text={"Full Name*"}
              type="text"
              name="name"
              placeholder="John Doe"
              control={control}
              error={errors.name?.message}
            ></Input>
            <Input
              text="Email*"
              type="text"
              name="email"
              placeholder="example@gmail.com"
              control={control}
              error={errors.email?.message}
            ></Input>
            <InputPassword
              name="password"
              error={errors.password?.message}
              control={control}
            ></InputPassword>
            {/* <Input
              text="File*"
              type="file"
              name="file"
              control={control}
              error={errors.file?.message}
            ></Input> */}
            <button className="w-full h-[45px] text-white bg-primary rounded-md font-semibold">
              Create an Account
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

export default SignUp;
