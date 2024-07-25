import { useHandleNav } from "@/hooks/useHandleNav";
import React from "react";
import { IoMenu } from "react-icons/io5";

export const MenuButon = () => {
  const { handleNav, menuOpen } = useHandleNav();
  return (
    <div>
      <button className="cursor:pointer" onClick={handleNav}>
        <IoMenu className="text-3xl md:hidden dark:text-purple-500" />
      </button>
    </div>
  );
};
