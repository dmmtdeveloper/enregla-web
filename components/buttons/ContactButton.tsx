import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
// import { useActiveSectionContext } from "@/Context/Active-section-context";

export const ButtonContact = () => {
  //  const { setActiveSection, setTimeOfLastClick } =
  //    useActiveSectionContext();
  return (
    <React.Fragment>
      <Link
        href="#contact"
        className={clsx(
          /*----default state----*/
          "bg-blue-500",
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
          "group",

          /*----hover----*/
          "transition",
          "hover:bg-blue-600",
          "hover:shadow-md",

          /*----focus statate----*/
          "outline-none",
          "ring-blue-400/70 ring-offset-2",
          "focus-visible:ring-2",
          "focus:scale-[0.98]",

          /*----disabled statate----*/
          "disabled:bg-blue-4 00/50",
          "disabled:cursor-not-allowed",
          "disabled:shadow",
          
          /*----dark mode----*/
        "dark:bg-green",
        "dark:text-black-100"

        )}
        // onClick={() => {
        //   setActiveSection("Contact");
        //   setTimeOfLastClick(Date.now());
        // }}
      >
        Contactanos{" "}
        <BsArrowRight
          className={clsx(
            "opacity-70",
            "group-hover:translate-x-1",
            "transition"
          )}
        />
      </Link>
    </React.Fragment>
  );
};