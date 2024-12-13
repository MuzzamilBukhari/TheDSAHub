import React from "react";

const Input = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  placeHolder,
  className,
}: {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  placeHolder: string;
  className?: string;
}) => {
  return (
    <>
      <label className="leading-7 text-sm">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className={`w-full bg-primary bg-opacity-10 rounded border border-primary/60 focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
      />
    </>
  );
};

export default Input;
