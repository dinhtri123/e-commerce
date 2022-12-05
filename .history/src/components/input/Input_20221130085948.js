import React from 'react';

const Input = ({type,}) => {
    return (
        <div className="flex flex-col gap-2 text-sm font-medium">
              <label for="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full border rounded-md px-5 py-3 text-sm"
              />
            </div>
    );
};

export default Input;