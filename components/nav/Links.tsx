"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavItems } from "@/lib/types";

export const Links = () => {
  const path = usePathname();

  const renderLinks = () => {
    if (path === "/") return links.home as NavItems["home"];
    else if (path === "/products") return links.products as NavItems["products"];
  };

  const renderedLinks = renderLinks();

  return (
    <>
      <motion.ul
        className={clsx(
          "hidden sm:hidden md:block lg:flex lg:gap-0 lg:px-4",
          "items-center justify-center",
          "gap-4 bg-slate-200 bg-opacity-45",
          "py-1 px-10 rounded-full",

          /*dark mode*/
          "dark:text-white",
          "dark:bg-[#43435C]",
          "dark:bg-opacity-45"
        )}
      >
        {renderedLinks &&
          renderedLinks.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full",
                  "items-center justify-center",
                  "px-3 py-3",
                  "hover:text-green-400",
                  "transition"
                )}
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
      </motion.ul>
    </>
  );
};
