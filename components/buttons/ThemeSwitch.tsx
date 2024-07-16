"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import clsx from "clsx";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={clsx(
        "bottom-5 right-5",
        "bg-gray-500",
        "w-[40px] h-[40px]",
        "bg-opacity-20",
        "backdrop-blur-[0.5rem]",
        "border-opacity-40",
        "shadow-2xl",
        "rounded-full",
        "flex",
        "items-center",
        "justify-center",
        "text-gray-600",
        /*hover efect*/
        "hover:scale-[1.15]",
        "active:scale-105",
        "transition",
        "duration-300",
        /* dark-mode*/
        "dark: bg-gray-950",
        "dark:bg-slate-500",
        "dark:text-gray-200"
      )}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}