import clsx from "clsx";
import { IoMenu } from "react-icons/io5";
import { GoX } from "react-icons/go";

import React from 'react'
import UseMenuMode from "@/hooks/UseMenuMode";


export const MenuIcon = () => {
  const [menuTheme, setMenuTheme] = UseMenuMode();
  const handleMode = () => setMenuTheme(!menuTheme);

  return (
    <span onClick={handleMode}>
      {menuTheme ? (
        <GoX
          size="30"
          className={clsx(
            "top-navigation-icon",

            /*----hover----*/
            "hover:text-gray-950",
            // "hover:scale-[1.2]",

            /*----transition----*/
            // "transition",
            // "duration-300",

            /*----dark-mode----*/
            "dark:text-yellow-200"
          )}
          />
        ) : (
          <IoMenu
          size="30"
          className={clsx(
            "top-navigation-icon",
            
            /*----hover----*/
            "hover:text-gray-950",
            // "hover:scale-[1.2]",
            
            /*----transition----*/
            // "transition",
            // "duration-300",
            
            /*----dark-mode----*/
            "dark:text-[#7ADB78]"
            
          )}
        />
      )}
    </span>
  )
}
