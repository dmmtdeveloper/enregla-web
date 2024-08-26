import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const CTA = () => {
  return (
    <React.Fragment>
      <Link
        href="#contacto"
        className={clsx(
          "text-base h-12 px-5",
          "gap-0 font-semibold",
          "bg-green text-black",
          "hover:bg-green/70",
          "focus-visible:ring-4",
          "focus-visible:ring-white/30",
          "focus-visible:outline-none",
          "focus-visible:bg-white/90",
          "disabled:hover:bg-white",
          "inline-flex",
          "items-center",
          "border",
          "justify-center",
          "select-none rounded-full",
          "disabled:cursor-not-allowed",
          "disabled:opacity-70",
          "transition ease-in-out duration-200",
          
          "dark:bg-white",
          "dark:hover:bg-white/90",
          "dark:text-black",
        )}
      >
        Contáctanos
      </Link>
    </React.Fragment>
  );
};
