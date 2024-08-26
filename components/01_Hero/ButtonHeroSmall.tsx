import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { GoChevronRight } from "react-icons/go";
export const ButtonHeroSmall = () => {
  return (
    <div className="md:inline-flex ">
      <Link
        href="/#contacto"
        className={clsx(
          "rainbowBorder",
          "inline-flex items-center",
          "justify-center text-[14px]",
          "dark:bg-black-400",
          /*hover efect*/
          "hover:scale-[1.03]",
          "active:scale-100",
          "transition",
          "duration-300"
        )}
      >
        <span
          className={clsx(
            "inline-flex",
            "leading-normal m-[1px]",
            "items-center gap-1",
            "whitespace-nowrap",
            "px-3 py-1 rounded-full",
            "dark:text-white-100",
            "text-black-100 bg-slate-200 dark:bg-black-100"
          )}
        >
          Auto en regla auto seguro
          <GoChevronRight />
        </span>
      </Link>
    </div>
  );
};
