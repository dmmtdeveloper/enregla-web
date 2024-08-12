"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import React from "react";
import MarqueeDemo from "@/components/ui/marquee-demo";

export const MarqueSection = () => {
  return (
    <motion.section
      id="clientes"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="px-4  dark:bg-black-100  z-[5] scroll-m-40"
    >
      <div
        className={clsx(
          "w-full flex justify-between",
          "items-center md:flex-row",
          "flex-col",
          "relative z-[1]",
          "xl:px-32 md:flex-col"
        )}
      >
        <h1
          className={clsx(
            "font-normal",
            "text-[48px] xl:text-center",
            "xl:text-6xl w-full",
            "dark:text-white",
            "text-black-100",
            "xl:leading-[76.8px]",
            "leading-[50px]",
            "w-full"
          )}
        >
          ¿Que dicen nuestros{" "}
          <span className="from-[#6FEE8D] to-[#25D366]  bg-clip-text text-transparent bg-gradient-to-b font-semibold">
            clientes
          </span>
          ?
        </h1>
      </div>
      <MarqueeDemo />
    </motion.section>
  );
};
