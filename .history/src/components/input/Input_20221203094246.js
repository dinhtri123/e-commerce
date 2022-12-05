import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  text,
  type = "text",
  name,
  placeholder,
  className,
  control,
  error = "",
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="flex flex-col gap-2 text-sm font-medium">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className={`w-full border rounded-md px-5 py-3 text-sm ${className}`}
        {...field}
        {...props}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error">{error}</span>
      )}
    </div>
  );
};

export default Input;
