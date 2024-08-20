import clsx from "clsx";
import React from "react";

type paragrapProps = {
  paragraph: string;
  customStyles?: string;
};

export const ParagraphStyles: React.FC<paragrapProps> = ({ paragraph, customStyles }) => {
  return (
    <p
      className={clsx(
        // default styles
        "font-normal",
        "text-[18px]",
        "leading-[30.8px]",
        "text-black-100",
        "text-justify",
        "w-full",
        "mt-5 mb-8",

        // xl
        "xl:max-w-[600px]",
        // lg
        "lg:max-w-[430px]",

        // dark mode
        "dark:text-white-200",
        { customStyles }
      )}
    >
      {paragraph}
    </p>
  );
};
