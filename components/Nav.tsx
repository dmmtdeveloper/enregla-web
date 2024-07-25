"use client";
import React from "react";
import clsx from "clsx";

import { Logo } from "./nav/Logo";
import { Links } from "./nav/Links";
import { LinksMenu } from "./nav/LinksMenu";
import { ThemeSwitch } from "./buttons/ThemeSwitch";
import { useHandleNav } from "@/hooks/useHandleNav";
import { IoMenu, IoClose } from "react-icons/io5";
import { CloseButton } from "./nav/CloseButton";
import { MenuButon } from "./nav/MenuButon";

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
          <MenuButon />
          <div
            className={clsx("fixed z-[9999] top-0 w-[100%] h-screen dark:bg-opacity-95 p-8 ease-in-out duration-500", {
              "left-0 bg-[#ecf0f3] dark:bg-[#43435C]": menuOpen,
              "left-[-100%]": !menuOpen,
            })}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <CloseButton />
            </div>
            <LinksMenu />
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};
