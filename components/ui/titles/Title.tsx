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
        "text-4xl",
        "w-full",

        // xl
        "xl:text-6xl",
        "xl:leading-[70px]",
        "xl:max-w-[700px]",

        // lg
        "lg:text-6xl",
        "lg:max-w-[500px]",

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
