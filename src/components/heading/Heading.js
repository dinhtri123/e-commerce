import React from "react";

const Heading = ({ children, className }) => {
  return (
    <div className={`text-primary text-[25px] font-semibold text-left mb-5 ${className}`}>
      {children}
    </div>
  );
};

export default Heading;
