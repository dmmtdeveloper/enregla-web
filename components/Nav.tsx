"use client";
import React, { useState } from "react";
import { ThemeSwitch } from "./buttons/ThemeSwitch";
import { IoMenu, IoClose } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import { Logo } from "./nav/Logo";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { useHandleNav } from "@/hooks/useHandleNav";
import { Links } from "./nav/Links";

export const Nav = () => {
  const { handleNav, menuOpen } = useHandleNav();

  return (
    <nav
      className={clsx(
        "fixed w-full h-24 shadow-xl bg-white backdrop-blur-[0.5rem] bg-opacity-50 text-gray-900 z-[10]",
        "dark:bg-[#0E0C15] dark:border-gray-800 dark:bg-opacity-50"
      )}
    >
      <div className="flex justify-between items-center h-full w-full px-8">
        <Logo />
        <Links />

        <div className="flex items-center justify-center gap-5">
          <button onClick={handleNav}>
            <IoMenu className="text-3xl md:hidden dark:text-purple-500  hover:text-green-400 transition-all" />
          </button>
          <div
            className={clsx("fixed z-[9999] top-0 w-[100%] h-screen dark:bg-opacity-95 p-8 ease-in-out duration-500", {
              "left-0 bg-[#ecf0f3] dark:bg-[#43435C]": menuOpen,
              "left-[-100%]": !menuOpen,
            })}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={handleNav} className="cursor-pointer">
                <IoClose className="text-3xl dark:text-white  hover:fill-red-400 transition-all" />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-5 mt-10 dark:text-white text-2xl font-semibold">
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
                      "hover:text-green-400",
                      "transition"
                    )}
                    href={link.hash}
                    onClick={handleNav}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};
