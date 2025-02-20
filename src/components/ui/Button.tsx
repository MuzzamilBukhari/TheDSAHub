import React, { ReactNode } from "react";

type btn = "button" | "submit" | "reset";
const Button = ({
  children,
  className,
  type,
  disabled
}: {
  children: ReactNode;
  className?: string;
  type: btn;
  disabled?: boolean
}) => {
  return (
    <button
    disabled={disabled}
      type={type}
      className={`text-white font-medium border-0 py-2 px-4 hover:bg-primary hover:scale-105 rounded-lg  duration-200 text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
