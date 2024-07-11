import React from "react";
import clsx from "clsx";
// import { motion } from "framer-motion"
// import Image from "next/image";
// import logoDark from "@/public/assets/logo-negro.png"

export const Navbar = () => {
  return (
      <nav className={clsx("z-[999] relative")}>
      <div
        className={clsx(
            "lg:block md:block hidden",
            "fixed top-0 left-1/2 -translate-x-1/2", 
            "h-[4.5rem] w-full", 
            "rounded-none", 
            "border border-white border-opacity-40",
            "bg-white bg-opacity-80",
            "shadow-lg shadow-black/[0.03]",
            "backdrop-blur-[0.5rem]",
            "sm:top-6 sm:h-[3.25rem]",
            "sm:w-[36rem] sm:rounded-full"
        )}
        
        // initial={{ y: -100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1}}
      ></div>
      {/* <div className="absolute">
        <Image className={clsx("w-20 h-auto")} src={logoDark} alt="logoDark"/>
      </div> */}
    </nav>
  );
};