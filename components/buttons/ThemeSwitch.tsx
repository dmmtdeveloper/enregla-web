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
        "bottom-5 right-5",
        "text-[24px]",
        "text-dark-100",
        "w-[40px] h-[40px]",
        // "bg-white-100",
        "bg-opacity-30",
        "backdrop-blur-[0.5rem]",
        "border-opacity-40",
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
        
        /* dark-mode*/
        "dark:text-purple-500",
        // "dark:bg-gray-800",
        // "dark:bg-gray-100",
       
        "text-blue-400"
      )}
      onClick={toggleTheme}
    >
      {theme === "light" ? <IoIosMoon/> : <IoSunny/>}
    </button>
  );
}