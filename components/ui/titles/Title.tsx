import clsx from "clsx";
import React from "react";

type titleProps = {
  title: string;
  text: string;
  customStyles?: string;
};

export const Title: React.FC<titleProps> = ({ title, text, customStyles }) => {
  return (
    <h2
      className={clsx(
        // default
        "text-black-100",
        "leading-[40px]",
        "font-normal",
        "text-4xl xl:text-center",
        "w-full",

        // xl
        "xl:text-6xl",
        "xl:leading-[70px]",
        "2xl:max-w-[1000px]",

        // lg
        "lg:text-5xl",
        

        // dark mode
        "dark:text-white",
        customStyles
      )}
    >
      {}
      <span className="font-semibold text-[#25D366]">{text}</span> 
      {" "}
      {title}
    </h2>
  );
};
