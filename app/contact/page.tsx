"use client";
import React from "react";
import clsx from "clsx";
import { Input } from "@nextui-org/input";
import { Logo } from "@/components/nav/Logo";
import { Links } from "@/components/nav/Links";
import { motion } from "framer-motion";
import { Social } from "@/components/social/Social";
import { MenuButon } from "@/components/nav/MenuButon";
import { CloseButton } from "@/components/nav/CloseButton";
import { ThemeSwitch } from "@/components/buttons/ThemeSwitch";
import { useHandleNav } from "@/hooks/useHandleNav";
import { LinksMenu } from "@/components/nav/LinksMenu";

export default function contact() {
  const { handleNav, menuOpen } = useHandleNav();

  return (
    <motion.nav
      className={clsx(
        "fixed w-full h-24",
        "shadow-xl bg-white",
        "backdrop-blur-[0.5rem]",
        "bg-opacity-50",
        "text-gray-900 z-[10]",

        /*dark mode */
        "dark:bg-[#0E0C15]",
        "dark:border-gray-800",
        "dark:bg-opacity-50"
      )}
    >
      <motion.div className="flex justify-between items-center h-full w-full px-8">
        <Logo />
        <Links />
        <div className="flex items-center justify-center gap-5">
          <MenuButon onClick={handleNav} />
          <div
            className={clsx(
              "fixed z-[9999] top-0",
              "w-[100%] h-screen",
              "dark:bg-opacity-95",
              "p-8 ease-in-out duration-500",
              {
                "left-0 bg-[#ecf0f3] dark:bg-[#43435C]": menuOpen,
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
          <ThemeSwitch />
        </div>
      </motion.div>

      <div className="pt-10 px-8">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl dark:text-white">Contactanos</h2>
          <Input type="text" variant="bordered" label="Nombre" />
          <Input type="text" variant="bordered" label="Apellido" />
          <Input type="Email" variant="bordered" label="Email" />
          <Input type="text" variant="bordered" label="Empresa" />
        </div>
      </div>
    </motion.nav>
  );
}
