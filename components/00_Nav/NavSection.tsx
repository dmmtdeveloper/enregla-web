"use client";
import React from "react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Links } from "@/components/00_Nav/Links";
import { Social } from "@/components/ui/Social";
import { MenuButon } from "@/components/ui/buttons/MenuButon";
import { CloseButton } from "@/components/ui/buttons/CloseButton";
import { ThemeSwitch } from "@/components/ui/buttons/ThemeSwitch";
import { useHandleNav } from "@/hooks/useHandleNav";
import { LinksMenu } from "@/components/00_Nav/LinksMenu";
import { IoMdContact } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

export const NavSection = () => {
  const { handleNav, menuOpen } = useHandleNav();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={clsx(
        "fixed w-full h-20 z-[99999] xl:px-16 px-4",
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
          <div className="flex items-center justify-center gap-2 md:gap-8 xl:gap-4">
            <Link href="#contact">
              <IoMdContact
                className={clsx(
                  "text-[24px]",
                  "dark:text-green",
                  "cursor-pointer",
                  "hidden md:block",
                  "xl:block",
                  "hover:scale-[1.15]",
                  "active:scale-105",
                  "transition",
                  "duration-300"
                )}
              />
            </Link>
            {/* <ButtonContactNav/> */}

            <Link href="https://web.whatsapp.com/send?phone=+56951596668" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp
                className={clsx(
                  "text-[24px]",
                  "dark:text-green",
                  "cursor-pointer",
                  "hidden md:block",
                  "xl:block",
                  "hover:scale-[1.15]",
                  "active:scale-105",
                  "transition",
                  "duration-300"
                )}
              />
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
