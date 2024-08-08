import React from "react";
import clsx from "clsx";

type InputProps = {
  name: string;
  type: "text" | "number" | "password" | "email";
  value: string | number;
  placeholder?: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
};

export const CustomInput: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onchange, 
  type,
}) => {
  return (
    <>
      <input
        autoComplete="true"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onchange} 
        className={clsx(
          "block w-[360px] py-3 pl-4",
          "container mx-auto",
          "bg-white border",
          "border-slate-300 rounded-md",
          "text-sm shadow-sm placeholder-slate-400",
          "focus:outline-none",
          "focus:border-sky-500",
          "focus:ring-1 focus:ring-sky-500",
          "disabled:bg-slate-50",
          "disabled:text-slate-500",
          "disabled:border-slate-200",
          "disabled:shadow-none"
        )}
      />
    </>
  );
};
