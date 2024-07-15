import React from "react";
import clsx from "clsx";

interface Props {
  onClick?: () => void;
}

export const NavContactButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className={clsx(
        "right-16",
        "fixed",
        "rounded-full",
        "border-opacity-40",
        "bg-[#7ADB78] bg-opacity-80",
        "shadow-lg shadow-black/[0.03]",
        "backdrop-blur-[0.5rem]",
        "top-6 h-[3.25rem]",
        "w-[10rem] text-gray-100",
        "hidden lg:block md:block"
      )}
      onClick={onClick}
    >
      Contacto
    </button>
  );
};
