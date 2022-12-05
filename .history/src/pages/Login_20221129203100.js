import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen">
      <div className="container w-full h-screen p-5 relative flex justify-center items-center">
        <img src="/logo.png" alt="" className="absolute top-10 left-10" />
        <div className="login max-w-[500px] w-full mx-auto p-10 flex flex-col items-center">
            <h4>Wellcome Back!</h4>
            <p>Don't have an account? <NavLink to={'/signup'}>Sign Up</NavLink></p>
            <h3>Sign In</h3>
            <form>
                <div>
                    <label for='email'>Email*</label>
                    <input type="email" id="email" placeholder="example@gmail.com"/>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
