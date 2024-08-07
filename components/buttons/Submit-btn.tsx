import clsx from "clsx";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa6";

export const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx(
        "group",
        "text-white flex gap-2",
        "h-[3rem] w-[8rem]",
        "bg-gray-900 items-center",
        "justify-center",
        "transition-all",
        "rounded-full",
        "hover:scale-110 active:scale-105",
        "hover:bg-gray-950",
        "focus:scale-110",
        "disabled:scale-100",
        "disabled:bg-opacity-65"
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
