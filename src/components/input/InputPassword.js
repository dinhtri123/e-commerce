import React, { useState } from "react";
import { useController } from "react-hook-form";
import IconEye from "../../icons/IconEye";
import IconEyeSlash from "../../icons/IconEyeSlash";

const InputPassword = ({ control, name, error }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  const [password, setPassword] = useState(false);
  const showPassword = () => {
    setPassword(true);
  };
  const hiddenPassword = () => {
    setPassword(false);
  };
  return (
    <div className="flex flex-col gap-2 text-sm font-medium ">
      <label htmlFor="password">Password*</label>
      <div className="w-full border rounded-md px-5 py-3 pr-12 relative bg-white">
        <input
          type={password ? "text" : "password"}
          id={name}
          placeholder="Enter your password"
          className="w-full bg-transparent text-sm"
          {...field}
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
      {error?.length > 0 && (
        <span className="text-sm font-medium text-error">{error}</span>
      )}
    </div>
  );
};

export default InputPassword;
