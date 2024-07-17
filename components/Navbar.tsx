"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { MenuSwitch } from "./buttons/MenuSwitch";
import { LogoImage } from "./logo/LogoImage";
import { ButtonCta } from "./buttons/CtaNav";
import { ThemeSwitch } from "./buttons/ThemeSwitch";

export const Navbar = () => {
  return (
    <header className={clsx("relative z-[9999]")}>
      <div className=" fixed top-0 sm:top-6 sm:h-[3.25rem]">
        <motion.div
          className={clsx(
            "lg:block",
            "fixed top-0 left-1/2 -translate-x-1/2",
            "h-[5rem] w-full",
            "rounded-none",
            "border-b border-[#a5daac] border-opacity-40",
            "bg-[#a5daac] bg-opacity-50",
            "shadow-lg shadow-black/[0.03]",
            "backdrop-blur-[0.5rem]",
            "sm:top-6 sm:h-[3.25rem]",
            "sm:w-[40rem] sm:rounded-full",
            "bg-slate-400",
            /* dark mode*/
            "dark:bg-[#0E0C15]",
            "dark:border-gray-800",
            "dark:bg-opacity-50"
          )}
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav
          className={clsx(
            "fixed top-[0.15rem]",
            " left-1/2 h-12",
            "-translate-x-1/2 py-2 sm:top-[1.7rem]",
            "sm:h-[initial], sm:h-[initial] sm:py-0",
            "lg:block hidden",
            "flex justify-between"
          )}
        >
          <ul
            className={clsx(
              "flex items-center",
              "justify-center",
              "w-[32rem]",
              "gap-y-1 font-medium",
              "text-gray-500",
              "sm:w-[initial]",
              "sm:gap-5"
            )}
          >
            {links.map((link) => (
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
                    "hover:text-gray-950",
                    "transition"
                  )}
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="bg-gray-200 dark:bg-[#43435C]">
          <motion.div
            className={clsx(
              "right-4",
              "fixed",
              "top-3",
              "h-[3.25rem]",
              "flex items-center gap-4"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="hidden lg:block">
              <ButtonCta title={"Contacto"} />
            </div>
            <div
              className={clsx(
                "lg:hidden",
                "md:hidden",
                "border-r-2 h-5 items-center flex pr-3",
                "border-gray-500",
                "cursor-pointer",

                /*----dark-mode----*/
                "dark:text-white"
              )}
            ></div>
            <MenuSwitch />
            <ThemeSwitch />
          </motion.div>
          <LogoImage />
        </div>
      </div>
    </header>
  );
};
