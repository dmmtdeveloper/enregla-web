import React from "react";
import clsx from "clsx";

interface Props {
  onClick?: () => void;
}

export const NavContactButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className={clsx(
        "border-2",
        "border-purple-500",
        "px-4",
        "py-1",
        "rounded-full",
        "font-semibold",
        "block",
        "cursor-pointer"
      )}
      onClick={onClick}
    >
      Contacto
    </button>
  );
};