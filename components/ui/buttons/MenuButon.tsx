"use client"
import React from "react";
import { IoMenu } from "react-icons/io5";
import {motion} from "framer-motion"

type ButtonProps = {
  onClick: () => void
}

export const MenuButon:React.FC<ButtonProps> = ({onClick}) => {
  return (
    <motion.div>
      <button className="cursor:pointer flex items-center justify-center" onClick={onClick}>
        <IoMenu className="text-3xl xl:hidden md:block dark:text-purple-500 text-black-100 dark:text-white transition-all" />
      </button>
    </motion.div>
  );
};
