import React from "react";
import clsx from "clsx";
import { IoMenu } from "react-icons/io5";
import { GoX } from "react-icons/go";
import { useMenuMode } from "@/hooks/UseMenuMode";

export const MenuSwitch = () => {
  const { enabled, setEnabled } = useMenuMode();

  const handleMode = () => setEnabled(!enabled);

  return (
    <span onClick={handleMode}>
      {enabled ? (
        <GoX
          size="30"
          className={clsx(
            /*----default----*/
            
            "text-[#4cb34a]",
            /*----hover----*/
            "hover:scale-[1.2]",
            
            /*----transition----*/
            "transition",
            "duration-300",
            
            /*----dark-mode----*/
            "dark:text-purple-400",
          )}
          />
        ) : (
          <IoMenu
          size="30"
          className={clsx(
            /*----default----*/
            "text-[#4cb34a]",
            "top-navigation-icon",
            
            /*----hover----*/
            "hover:scale-[1.2]",
            
            /*----transition----*/
            "transition",
            "duration-300",
            
            /*----dark-mode----*/
            "dark:text-purple-400",
          )}
        />
      )}
    </span>
  );
};
