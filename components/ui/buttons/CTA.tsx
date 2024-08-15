import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const CTA = () => {
  return (
    <React.Fragment>
      <Link
        href="#contact"
        className={clsx(
          /*----default state----*/
          "group",
          "text-white text-[18px]",
          "px-10 py-5 leading-6",
          "rounded-full",
          "font-semibold tracking-wide",
          "cursor-pointer",
          "inline-flex",
          "items-center",
          "justify-center",
          "relative shadow",
          "gap-2",

          /*----hover----*/
          "transition",
          "hover:bg-green2-100-",
          "hover:shadow-md",
          "hover:scale-110 active:scale-105",
          "dark:hover:bg-[#03FF94]",
          "hover:bg-[#393d3b]",

          /*----focus statate----*/
          "focus:scale-110",
          "disabled:scale-100",
          "disabled:bg-opacity-65",

          /*----disabled statate----*/
          "disabled:bg-blue-4 00/50",
          "disabled:cursor-not-allowed",
          "disabled:shadow",

          /*----dark mode----*/
          "bg-black",
          "dark:bg-[#25D366]",
          "dark:text-black-100"
        )}
      >
        Contáctanos
      </Link>
    </React.Fragment>
  );
};
