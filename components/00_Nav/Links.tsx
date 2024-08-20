"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

export const Links = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <motion.ul
      className={clsx(
        "hidden xl:flex lg:gap-0 lg:px-4",
        "items-center justify-center",
        "gap-4 bg-white-100 bg-opacity-45",
        "py-2 px-10 rounded-full",

        /* dark mode */
        "dark:text-white",
        "dark:bg-black-200",
        "dark:bg-opacity-90"
      )}
    >
      {links.map((link) => (
        <motion.li
          className="h-3/4 flex items-center justify-center relative"
          key={link.hash}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link
            className={clsx(
              "flex w-full cursor-pointer",
              "items-center justify-center",
              "px-4 py-3",
              "hover:text-slate-900",
              "transition",
              "dark:hover:text-green",
              { "dark:text-[#25D366] text-slate-900": activeSection === link.name }
            )}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {link.name}

            {link.name === activeSection && (
              <motion.span
                className="dark:bg-slate-700 bg-slate-300 rounded-full absolute inset-0 -z-10 text-green"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 25,
                }}
              ></motion.span>
            )}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
