import React, { useState } from 'react';

const InputWithIcon = ({type, name, }) => {
    const [password, setPassword] = useState(false);
    return (
        <div className="flex flex-col gap-2 text-sm font-medium ">
              <label for="password">Password*</label>
              <div className="w-full border rounded-md px-5 py-3 pr-12 relative bg-white">
                <input
                  type={type}
                  id={name}
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
    );
};

export default InputWithIcon;