import React, { FC } from "react";
import clsx from "clsx";

type ButttonProps = {
  title: string;
};

export const ButtonCta: FC<ButttonProps> = ({ title }) => {
  return (
    <button
      className={clsx(
        "right-16",
        "rounded-full",
        "border-opacity-40",
        "bg-[#7ADB78] bg-opacity-80",
        "shadow-lg shadow-black/[0.03]",
        "backdrop-blur-[0.5rem]",
        "h-[3.25rem]",
        "w-[10rem] text-gray-100",
        "lg:block md:block",

        /*----hover----*/
        "transition",
        "hover:bg-gray-/20",
        "hover:shadow-md",

        /*----focus statate----*/
        "outline-none",
        "ring-green-400/70 ring-offset-2",
        "focus-visible:ring-2",
        "focus:scale-[0.98]",

        /*----disabled statate----*/
        "disabled:bg-blue-500/50",
        "disabled:cursor-not-allowed",
        "disabled:shadow"
      )}
    >
      {title}
    </button>
  );
};
