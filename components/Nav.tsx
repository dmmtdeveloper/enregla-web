"use client";
import clsx from "clsx";
import { Logo } from "./nav/Logo";
import { Links } from "./nav/Links";
import { motion } from "framer-motion";
import { Social } from "./social/Social";
import { MenuButon } from "./nav/MenuButon";
import { CloseButton } from "./nav/CloseButton";
import { ThemeSwitch } from "./buttons/ThemeSwitch";
import { useHandleNav } from "@/hooks/useHandleNav";
import { LinksMenu } from "./nav/LinksMenu";
import { usePathname } from "next/navigation";


export const Nav = () => {
  const path = usePathname();
  const { handleNav, menuOpen } = useHandleNav();

  const isMenuVisible = path !== "/contact";

  return (
    <nav
      className={clsx(
        "fixed w-full h-20 z-[99999] xl:px-44",
        // "shadow-md",
  
        
        "backdrop-blur-[0.6rem]",
        "text-gray-900 z-[20]",

        /*dark mode */
        // "dark:bg-[#43435C]",
        // "dark:border-gray-800",
        // "dark:bg-opacity-50",
     
        
      )}
    >
      <div className="flex justify-between items-center h-full w-full">
        <Logo />
        <Links />
        <div className="flex items-center justify-center gap-5">
          {isMenuVisible && <MenuButon onClick={handleNav} />}
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
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};