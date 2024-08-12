"use client";

import { useTheme } from "@/context/theme-context";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import React from "react";
import clsx from "clsx";

export const  ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={clsx(
        /* default */
        "text-[24px]",
        "bg-opacity-30",
        "backdrop-blur-[0.5rem]",
        "shadow-2xl",
        "rounded-full",
        "flex",
        "items-center",
        "justify-center",
        
        /*hover efect*/
        "hover:scale-[1.15]",
        "active:scale-105",
        "transition",
        "duration-300",
        
        /*----focus statate----*/
        "outline-none",
        "ring-gray-900/70 ring-offset-2",
        // "focus-visible:ring-2",
        "focus:scale-[0.98]",

        /*----disabled statate----*/
        "disabled:bg-gray-900/50",
        "disabled:cursor-not-allowed",
        "disabled:shadow",

        /* dark-mode*/
        "text-black-200",    
        "dark:text-yellow-200",
        
      )}
      onClick={toggleTheme}
    >
      {theme === "light" ? <IoIosMoon/> : <IoSunny/>}
    </button>
  );
}