"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Links } from "@/components/00_Nav/Links";
import { Social } from "@/components/ui/Social";
import { MenuButon } from "@/components/ui/buttons/MenuButon";
import { CloseButton } from "@/components/ui/buttons/CloseButton";
import { ThemeSwitch } from "@/components/ui/buttons/ThemeSwitch";
import { useHandleNav } from "@/hooks/useHandleNav";
import { LinksMenu } from "@/components/00_Nav/LinksMenu";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export const NavSection = () => {
  const { handleNav, menuOpen } = useHandleNav();

  return (
    <motion.nav
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay: 0.25 }}


    className={clsx(
      "fixed w-full h-20 z-[99999] 2xl:px-32 xl:px-16 px-4 lg:px-8",
      "backdrop-blur-[1rem]",
      "text-gray-900 z-[20]"
    )}
  >
      <div className="flex justify-between items-center h-full w-full">
        <Logo />
        <Links />
        <div className="flex items-center justify-center gap-5">
          <MenuButon onClick={handleNav} />
          <div
            className={clsx(
              "fixed z-[9999] top-0",
              "w-[100%] h-screen",
              "p-8 ease-in-out duration-500",
              {
                "left-0 bg-[#ecf0f3] dark:bg-black-100": menuOpen,
                "left-[-100%]": !menuOpen,
              }
            )}
          >
            <div className="flex justify-between">
              <div className="flex items-center">
                <Logo />
              </div>
              <div className="flex gap-3">
                <ThemeSwitch />
                <CloseButton onclick={handleNav} />
              </div>
            </div>
            <LinksMenu onClick={handleNav} />
            <Social />
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4 xl:gap-4">
            <Link
              href="https://web.whatsapp.com/send?phone=+56951596668"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                className={clsx(
                  "text-[24px]",
                  "text-green",
                  "cursor-pointer",
                  "hover:scale-[1.15]",
                  "active:scale-105",
                  "transition",
                  "duration-300"
                )}
              />
            </Link>

            <Link
              href="https://www.instagram.com/enregla_oficial?igsh=MTl2a2R5dzFvaGR3NA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className={clsx(
                  "text-[24px] hidden xl:block md:block",
                  "text-green",
                  "cursor-pointer",
                  "hover:scale-[1.15]",
                  "active:scale-105",
                  "transition",
                  "duration-300"
                )}
              />
            </Link>
            <div className=" border-l-2 dark:border-slate-800 border-slate-300 xl:pl-4 pl-4">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
