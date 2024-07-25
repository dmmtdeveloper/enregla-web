import { useHandleNav } from "@/hooks/useHandleNav";
import React from "react";
import { IoMenu } from "react-icons/io5";

export const MenuButon = () => {
  return (
    <>
      <button onClick={useHandleNav}>
        <IoMenu className="text-3xl md:hidden dark:text-purple-500" />
      </button>
    </>
  );
};
