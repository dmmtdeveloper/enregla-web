"use client";
import React from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import clsx from "clsx";

type menuProps = {
  onClick: () => void;
};

export const LinksMenu: React.FC<menuProps> = ({ onClick }) => {
  return (
    <>
      <ul className="flex flex-col gap-2 mt-10 dark:text-slate-300 text-normal font-semibold mb-16">
        {links &&
          links.map((link) => (
            <li className="h-3/4 flex border-b-1 dark:border-slate-900 border-slate-300" key={link.hash}>
              <Link
                className={clsx(
                  "flex w-full",
                  "px-3 py-3",
                  "hover:text-green2-100",
                  "transition",
                  "hover:text-green"
                )}
                href={link.hash}
                onClick={onClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
