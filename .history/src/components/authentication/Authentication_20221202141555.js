import React from 'react';
import { NavLink } from 'react-router-dom';

const Authentication = ({intro, textHasAccount}) => {
    return (
        <div className="w-full h-full bg-primary bg-opacity-10">
      <div className="container w-full h-full px-5 py-12 relative flex justify-center items-center">
        <NavLink
          to="/"
          className={
            "absolute sm:top-10 sm:left-10 top-5 left-5 w-[50px] h-[50px]"
          }
        >
          <img src="/qora.png" alt="" className="w-full h-full" />
        </NavLink>
        <div className="login max-w-[500px] w-full h-auto mx-auto p-10 flex flex-col items-center relative shadow-2xl rounded-lg">
          <h4 className="text-xl font-semibold mb-2 z-10">
            {intro}
          </h4>
          <p className="mb-5 text-sm font-medium z-10">
            {textHasAccount}
            
          </p>
          <h3 className="text-2xl font-semibold mb-5 z-10">Sign Up</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex flex-col gap-5 w-[90%] z-10"
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

export default Authentication;