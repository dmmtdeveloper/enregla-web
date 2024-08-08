import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const ButtonContact = () => {
  return (
    <React.Fragment>
      <Link
        href="/contact"
        className={clsx(
          /*----default state----*/
          "group",
          "text-white text-[18px]",
          "px-8 py-5 mt-6 leading-6",
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
          "hover:bg-green/70",

          /*----focus statate----*/
          "focus:scale-110",
          "disabled:scale-100",
          "disabled:bg-opacity-65",

          /*----disabled statate----*/
          "disabled:bg-blue-4 00/50",
          "disabled:cursor-not-allowed",
          "disabled:shadow",

          /*----dark mode----*/
          "bg-green",
          "dark:text-black-100"
        )}
        // onClick={() => {
        //   setActiveSection("Contact");
        //   setTimeOfLastClick(Date.now());
        // }}
      >
        Contactanos{" "}
        <BsArrowRight className={clsx("text-[20px]", "opacity-70 transition-all", "group-hover:translate-x-2")} />
      </Link>
    </React.Fragment>
  );
};
