"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { motion } from "framer-motion";

export const Links = () => {
  // Renderiza todos los enlaces sin importar la ruta actual
  const renderedLinks = [...links.home];

  return (
    <motion.ul
      className={clsx(
        "hidden lg:flex lg:gap-0 lg:px-4",
        "items-center justify-center",
        "gap-4 bg-white-100 bg-opacity-45",
        "py-1 px-10 rounded-full",

        /* dark mode */
        "dark:text-white",
        "dark:bg-black-200",
        "dark:bg-opacity-90",
      )}
    >
      {renderedLinks.map((link) => (
        <motion.li
          className="h-3/4 flex items-center justify-center"
          key={link.hash}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link
            className={clsx(
              "flex w-full cursor-pointer",
              "items-center justify-center",
              "px-3 py-3",
              "hover:text-green",
              "text-black",
              "transition",
              "dark:text-white",
              "dark:hover:text-green"
            )}
            href={link.hash}
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
