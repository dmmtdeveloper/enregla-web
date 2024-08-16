import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const CTAUS = () => {
  return (
    <React.Fragment>
      <Link
        href="#nosotros"
        className={clsx(
          /*----default state----*/
          "group",
          "text-green text-[18px]",
          "px-14 py-5 leading-6",
          "rounded-full",
          "font-semibold tracking-wide",
          "cursor-pointer",
          "inline-flex",
          "items-center",
          "justify-center",
          "relative shadow",
          "border-1 border-green border-offset-2",
          // "gap-2 bg-white",

          /*----hover----*/
          "transition",
          "hover:shadow-xl",
          "dark:hover:shadow-green",
          "dark:shadow-md",
          // "hover:scale-110 active:scale-105", 
          // "dark:hover:bg-[#03FF94]",
          // "hover:bg-[#393d3b]",

          /*----focus statate----*/
          "focus:scale-110",
          "disabled:scale-100",
          "disabled:bg-opacity-65",

          /*----disabled statate----*/
          "disabled:bg-blue-4 00/50",
          "disabled:cursor-not-allowed",
          "disabled:shadow",

          /*----dark mode----*/
          // "dark:bg-[#25D366]",
          "dark:text-white",
          "dark:border-white"
        )}
      >
        Nosotros
      </Link>
    </React.Fragment>
  );
};
