import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen">
      <div className="container w-full h-screen p-5 relative flex justify-center items-center">
        <img src="/logo.png" alt="" className="absolute top-10 left-10" />
        <div className="login max-w-[500px] w-full mx-auto p-10">
            <h3>Wellcome Back!</h3>
            <p>Don't have an account? <NavLink to={'/sign'}>Sign Up</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
