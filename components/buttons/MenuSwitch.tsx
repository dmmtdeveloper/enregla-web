import clsx from "clsx";
import { IoMenu } from "react-icons/io5";
import { GoX } from "react-icons/go";

import React from "react";
import {UseMenuMode} from "@/hooks/UseMenuMode";


export const MenuSwitch = () => {
  const [menuTheme, setMenuTheme] = UseMenuMode();
  const handleMode = () => setMenuTheme(!menuTheme);

  return (
    <span onClick={handleMode}>
      {menuTheme ? (
        <GoX
          size="30"
          className={clsx(
            /*----hover----*/
            "hover:scale-[1.2]",

            /*----transition----*/
            "transition",
            "duration-300",

            /*----dark-mode----*/
            "text-[#4cb34a]"
          )}
        />
      ) : (
        <IoMenu
          size="30"
          className={clsx(
            "top-navigation-icon",

            /*----hover----*/
            "hover:scale-[1.2]",

            /*----transition----*/
            "transition",
            "duration-300",

            /*----dark-mode----*/
            "text-[#4cb34a]"
          )}
        />
      )}
    </span>
  );
};
