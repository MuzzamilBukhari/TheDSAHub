import React from "react";

const Input = ({
  type,
  id,
  name,
  className,
}: {
  type: string;
  id: string;
  name: string;
  className?: string;
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`w-full bg-primary bg-opacity-10 rounded border border-secondary focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
    />
  );
};

export default Input;
