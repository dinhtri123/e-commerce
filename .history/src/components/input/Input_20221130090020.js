import React from 'react';

const Input = ({type,name, placeholder}) => {
    return (
        <div className="flex flex-col gap-2 text-sm font-medium">
              <label for={name}>Email*</label>
              <input
                type={type}
                id={name}
                placeholder="example@gmail.com"
                className="w-full border rounded-md px-5 py-3 text-sm"
              />
            </div>
    );
};

export default Input;