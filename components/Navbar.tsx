"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import logoDark from "@/public/assets/logo-negro.png";
import { IconAuto } from "./icons/IconAuto";
import { links } from "@/lib/data";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className={clsx("relative")}>
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
          "lg:block hidden"
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
            <li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex w-full",
                  "items-center justify-center",
                  "px-3 py-3",
                  "hover:text-gray-950"
                )}
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={clsx(
          "fixed mt-9 flex items-center",
          " w-[10rem]",
          "rounded-none",
          "left-3 sm:hidden lg:block"
        )}
      >
        <Image
          className={clsx("w-[150px] h-auto hidden lg:block md:block")}
          src={logoDark}
          alt="logoDark"
          priority
        />
        <IconAuto className="fill-slate-900 lg:hidden md:block sm:block" />
      </div>
    </header>
  );
};
