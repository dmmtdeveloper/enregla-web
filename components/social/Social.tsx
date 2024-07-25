import clsx from "clsx";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export const Social = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-10">
        <FaInstagram
          className={clsx(
            "text-4xl",
            "text-gray-900",
            "hover:text-green-400 transition all cursor-pointer",
            
            /* dark mode*/
            "dark:text-white",
            "dark:hover:text-green-400"
          )}
          />
        <FaFacebookSquare
          className={clsx(
            "text-4xl",
            "text-gray-900",
            "dark:hover:text-green-400",
            "hover:text-green-400 transition all cursor-pointer",
            
            /* dark mode*/
            "dark:text-white",
            "dark:hover:text-green-400"
          )}
          />
        <FaWhatsapp
          className={clsx(
            "text-4xl",
            "text-gray-900",
            "dark:hover:text-green-400",
            "hover:text-green-400 transition all cursor-pointer",

            /* dark mode*/
            "dark:text-white",
            "dark:hover:text-green-400"
          )}
        />
      </div>
    </>
  );
};
