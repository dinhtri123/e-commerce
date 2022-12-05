import React from "react";

const Button = ({ onClick = () => {}, children, className }) => {
  return (
    <button
      className={`w-full py-4 text-white font-medium bg-primary transition-all rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
