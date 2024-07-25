import { useHandleNav } from "@/hooks/useHandleNav";
import React from "react";
import { IoClose } from "react-icons/io5";

export const CloseButton = () => {
  const { handleNav, menuOpen } = useHandleNav();
  return (
    <>
      <button onClick={handleNav} className="cursor-pointer">
        <IoClose className="text-3xl dark:text-white" />
      </button>
    </>
  );
};
