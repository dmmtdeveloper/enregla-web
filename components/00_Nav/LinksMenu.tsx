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
      <ul className="flex flex-col items-center gap-2 mt-10 dark:text-white text-2xl font-semibold mb-16">
        {links &&
          links.map((link) => (
            <li className="h-3/4 flex items-center justify-center" key={link.hash}>
              <Link
                className={clsx(
                  "flex w-full",
                  "items-center justify-center",
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
