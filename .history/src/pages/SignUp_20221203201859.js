import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../firebase.config";
import { db } from "../firebase.config";

import { toast } from "react-toastify";
import ButtonLoading from "../components/button/ButtonLoading";

const schema = yup.object({
  name: yup
    .string()
    .max(10, "Name cannot exceed 10 characters")
    .required("Please enter your name"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 characters"),
});
const SignUp = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      // update displayName
      await updateProfile(auth.currentUser, {
        displayName: values.name,
      });
      // tạo collection firebase
      const colRef = collection(db, "users");
      await addDoc(colRef, {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      toast.success("Create Account Successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong!");
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  return (
    <div className="login-box w-full h-screen bg-primary bg-opacity-10">
      <div className="container w-full h-full px-5 sm:py-12 py-[70px] relative flex flex-col justify-center items-center">
        <NavLink to="/" className={"absolute top-5 left-5"}>
          <img src="/qora.png" alt="" className="w-[50px] h-[50px]" />
        </NavLink>
        <div className="login max-w-[500px] w-full h-auto mx-auto sm:p-10 p-5 flex flex-col items-center relative shadow-2xl rounded-lg">
          <h4 className="text-xl font-semibold mb-2 z-10 text-center">
            Welcome To Our Website!
          </h4>
          <p className="mb-2 text-sm font-medium z-10">
            Already have an account?{" "}
            <NavLink to={"/login"} className="sm:text-primary text-error">
              Sign In
            </NavLink>
          </p>
          <h3 className="text-2xl font-semibold mb-2 z-10">Sign Up</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex flex-col gap-3 w-[90%] z-10"
          >
            <Input
              text={"Name*"}
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
            <ButtonLoading disable={isSubmitting} loading={isSubmitting}>
              Create an Accounts
            </ButtonLoading>
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
