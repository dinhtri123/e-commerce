import React from "react";

const ButtonLoading = ({ children, loading, disable }) => {
  const child = !!loading ? (
    <p className="loading"></p>
  ) : (
    children
  );
  return (
    <button
      className={`mt-5 w-full h-[45px] text-white bg-primary rounded-md font-semibold ${
        loading ? "bg-opacity-50 " : ""
      }`}
      disabled={disable}
      loading={loading}
    >
      {child}
    </button>
  );
};

export default ButtonLoading;
