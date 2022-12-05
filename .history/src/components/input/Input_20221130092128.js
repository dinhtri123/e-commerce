import React from 'react';

const Input = ({type,name, placeholder, className}) => {
    const {} = useCon
    return (
        <div className="flex flex-col gap-2 text-sm font-medium">
              <label for={name}>Email*</label>
              <input
                type={type}
                id={name}
                placeholder={placeholder}
                className={`w-full border rounded-md px-5 py-3 text-sm ${className}`}
              />
            </div>
    );
};

export default Input;