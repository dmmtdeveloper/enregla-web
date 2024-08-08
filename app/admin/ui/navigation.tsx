"use client";
import { useState } from "react";
import { navigationMenu } from "../constants/navigation";
import { LogoutIcon } from "@/assets/icons/logout";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import useSession from "../hooks/useSession";

const enreglaLogo = require("@/assets/images/logo.png");
const enreglaName = require("@/assets/images/enregla.png");

export default function Navigation() {
  const pathName = usePathname();
  const { logoutUser } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="relative w-[60px] h-screen text-[#fff]">
      <nav
        className={`w-[60px] h-screen flex flex-col items-center justify-between py-[16px] bg-gradient-to-b from-slate-900/40 to-slate-700/40 backdrop-blur-lg absolute top-0 left-0 z-40`}
      >
        <div
          onClick={toggle}
          className="w-[42px] h-[42px] cursor-pointer flex items-center justify-center rounded-[8px] hover:bg-slate-300/50 transition-all duration-300 ease-in-out"
        >
          <Image src={enreglaLogo} alt="Enregla Logo" className="w-[100%]" />
        </div>
        <ul className="w-full h-[calc(100%_-_180px)] flex flex-col items-center justify-evenly">
          {navigationMenu.map(({ name, path, icon }) => (
            <Link href={path} key={name}>
              <div
                className={`w-[42px] h-[42px] ${
                  pathName === path && "bg-slate-300/60"
                } flex items-center justify-center rounded-[8px] hover:bg-slate-300/60 transition-all duration-300 ease-in-out`}
              >
                {icon}
              </div>
            </Link>
          ))}
        </ul>
        <div
          className="w-[42px] h-[42px] cursor-pointer flex items-center justify-center hover:bg-rose-600/50 rounded-[8px] transition-all duration-300 ease-in-out"
          onClick={logoutUser}
        >
          <LogoutIcon />
        </div>
      </nav>
      <aside
        className={`w-[120px] h-screen px-[4px] flex flex-col items-center justify-between py-[16px]  bg-gradient-to-b from-slate-900 to-slate-700
          ${
            isOpen ? "translate-x-[0px]" : "-translate-x-[180px]"
          } transition-transform duration-500 absolute top-0 left-[60px] z-30
          `}
      >
        <div className="w-full h-[42px] flex items-center justify-center">
          <Image src={enreglaName} alt="Enregla Logo" className="w-[80%] pt-[6px]" />
        </div>
        <ul className="w-full h-[calc(100%_-_180px)] flex flex-col items-center justify-evenly">
          {navigationMenu.map(({ name, path }) => (
            <Link href={path} key={name} className="w-full flex items-center justify-center">
              <div className="w-[90%] h-[42px] flex items-center justify-center hover:text-slate-300/50 rounded-[4px] transition-all duration-300 ease-in-out">
                <span className="text-[14px] w-full text-center">{name}</span>
              </div>
            </Link>
          ))}
        </ul>
        <div className="w-full h-[42px] flex items-center justify-center">
          <span className="text-[14px] hover:text-rose-600/90 transition-all duration-300 ease-in-out">Salir</span>
        </div>
      </aside>
    </header>
  );
}
