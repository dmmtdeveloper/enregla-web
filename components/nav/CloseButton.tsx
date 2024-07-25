
import React from "react";
import { IoClose } from "react-icons/io5";

type ButtonProps = {
  onclick:() => void
}

export const CloseButton: React.FC<ButtonProps> = ({onclick}) => {
  return (
    <>
      <button 
      onClick={onclick} 
      className="cursor-pointer">

        <IoClose 
        className="text-3xl dark:text-white dark:hover:text-red-400 hover:text-red-400" />
      </button>
    </>
  );
};
