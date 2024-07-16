"use client";
import { useState } from "react";
import { navigationMenu } from "../constants/navigation";
import Link from "next/link";
import Image from "next/image";
import { LogoutIcon } from "@/assets/icons/logout";
import useSession from "../hooks/useSession";

const enreglaLogo = require("@/assets/images/logo.png");
const enreglaName = require("@/assets/images/enregla.png");

export default function Navigation() {
  const { logoutUser } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="relative w-[60px] h-screen text-[#fff]">
      <nav
        className={`w-[60px] h-screen pl-[4px] flex flex-col items-center justify-between py-[16px] bg-slate-800 absolute top-0 left-0 z-40`}
      >
        <div onClick={toggle} className="w-full h-[50px] cursor-pointer flex items-center justify-center">
          <Image src={enreglaLogo} alt="Enregla Logo" className="w-[80%]" />
        </div>
        <ul className="w-full h-[calc(100%_-_180px)] flex flex-col items-center justify-evenly">
          {navigationMenu.map(({ name, path, icon }) => (
            <Link href={path} key={name}>
              <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[8px]">{icon}</div>
            </Link>
          ))}
        </ul>
        <div className="w-full h-[50px] cursor-pointer flex items-center justify-center" onClick={logoutUser}>
          <LogoutIcon />
        </div>
      </nav>
      <aside
        className={`w-[100px] h-screen pr-[4px] flex flex-col items-center justify-start py-[16px] bg-slate-800
          ${
            isOpen ? "translate-x-0" : "-translate-x-[180px]"
          } transition-transform duration-500 absolute top-0 left-[60px] z-30
          `}
      >
        <div className="w-full h-[50px] flex items-center justify-center">
          <Image src={enreglaName} alt="Enregla Logo" className="w-[80%] pt-[6px]" />
        </div>
        <ul className="w-full h-[calc(100%_-_280px)] flex flex-col items-center justify-evenly">
          {navigationMenu.map(({ name, path }) => (
            <Link href={path} key={name}>
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <span className="text-[14px]">{name}</span>
              </div>
            </Link>
          ))}
        </ul>
      </aside>
    </header>
  );
}
