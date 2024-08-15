import clsx from "clsx";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa6";

type submitBtnProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SubmitBtn: React.FC<submitBtnProps> = ({ onClick }) => {
  const { pending } = useFormStatus();

  return (
    <button
      onClick={onClick}
      className={clsx(
        "group",
        "text-white flex gap-2",
        "h-[3rem] w-[8rem]",
        "justify-center",
        "transition-all",
        "rounded-full",

        //hover
        "hover:scale-110 active:scale-105",
        "hover:bg-green/70",

        //focus state
        "focus:scale-110",
        "disabled:scale-100",
        "disabled:bg-opacity-65",

        //dark mode
        "dark:bg-gray-800 items-center",
        "dark:hover:bg-gray-900",
        "bg-green"
      )}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar{" "}
          <FaPaperPlane
            className={clsx(
              "text-xs",
              "opacity-70 transition-all",
              "group-hover:translate-x-1",
              "group-hover:-translate-y-1"
            )}
          />{" "}
        </>
      )}
    </button>
  );
};
