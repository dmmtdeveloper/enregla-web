"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import ThemeIcon from "./ThemeIcons";
import logoDark from "@/public/assets/logo-negro.png";
import logoWhite from "@/public/assets/logo-blanco.png";
import { NavContactButton } from "./buttons/NavContactButton";
import { motion } from "framer-motion";
import { IconAuto } from "./icons/IconAuto";
import { links } from "@/lib/data";
import { MenuIcon } from "./icons/MenuIcon";

export const Navbar = () => {
  return (
    <header className={clsx("relative z-[9999]")}>
      <div className=" fixed top-0 sm:top-6 sm:h-[3.25rem]">
        <motion.div
          className={clsx(
            "lg:block hidden",
            "fixed top-0 left-1/2 -translate-x-1/2",
            "h-[4.5rem] w-full",
            "rounded-none",
            "border border-white border-opacity-40",
            "bg-white bg-opacity-80",
            "shadow-lg shadow-black/[0.03]",
            "backdrop-blur-[0.5rem]",
            "sm:top-6 sm:h-[3.25rem]",
            "sm:w-[40rem] sm:rounded-full"
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

        <motion.div
          className={clsx(
            "right-4",
            "fixed",
            "top-6",
            "h-[3.25rem] flex gap-10",
            "flex items-center gap-5"
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <NavContactButton />
          <div
            className={clsx(
              "lg:hidden",
              "md:hidden",
              "border-r-2 h-5 items-center flex pr-3",
              "border-gray-500"
            )}
          >
            <MenuIcon />
          </div>
          <ThemeIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            className={clsx(
              "w-52",
              "h-auto",
              "left-4",
              "fixed top-9",
              "lg:block md:block",
              "dark:hidden"
            )}
            src={logoDark}
            alt="logoDark"
            quality="95"
            priority={true}
          />
        </motion.div>

        <motion.div
          className="hidden dark:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            className={clsx(
              "w-52",
              "h-auto",
              "left-4",
              "fixed top-9",
              "lg:block md:block sm:hidden"
            )}
            src={logoWhite}
            alt="logoWhite"
            quality="95"
            priority={true}
          />
        </motion.div>
      </div>
    </header>
  );
};
