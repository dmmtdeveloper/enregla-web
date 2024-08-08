"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Auto } from "../nav/Auto";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={clsx(
          "mt-8 bg-gradient-to-br",
          "dark:from-slate-300 dark:to-slate-400",
          "from-slate-700 to-slate-900",
          "py-4 bg-clip-text flex",
          "text-center text-5xl",
          "font-medium tracking-tight",
          "text-transparent md:text-7xl pb-20"
        )}
      >
        "Auto en regla<br /> auto seguro"
      </motion.h1>
      
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[750px] flex-col w-full items-center justify-center rounded-md",
        "dark:bg-[#000319] bg-[#EDF1F3]",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={clsx(
            "absolute inset-auto right-1/2",
            "h-56 overflow-visible w-[30rem]",
            "text-white",
            "[--conic-position:from_70deg_at_center_top]",

            // Dark mode
            "dark:bg-gradient-conic dark:from-green dark:via-transparent dark:to-transparent",
            // Light mode
            "bg-gradient-conic from-green via-transparent to-transparent"
          )}
        >
          <div
            className={clsx(
              "absolute w-[100%]",
              "left-0",
              "h-40 bottom-0 z-20",
              "[mask-image:linear-gradient(to_top,white,transparent)]",

              // Dark mode
              "dark:bg-[#000319]",

              // Light mode
              "bg-[#EDF1F3]"
            )}
          />
          <div
            className={clsx(
              "absolute w-40 h-[100%]",
              "left-0",
              "bottom-0 z-20",
              "[mask-image:linear-gradient(to_right,white,transparent)]",

              // Dark mode
              "dark:bg-[#000319]",

              // Light mode
              "bg-[#EDF1F3]"
            )}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={clsx(
            "absolute inset-auto left-1/2 h-56 w-[30rem]",
            "dark:bg-gradient-conic dark:from-transparent dark:via-transparent dark:to-green text-white",
            "[--conic-position:from_290deg_at_center_top]",

            // Light mode
            "bg-gradient-conic from-transparent via-transparent to-green"
          )}
        >
          <div
            className={clsx(
              "absolute w-40 h-[100%] right-0 bottom-0 z-20",
              "[mask-image:linear-gradient(to_left,white,transparent)]",

              // Dark mode
              "dark:bg-[#000319]",

              // Light mode
              "bg-[#EDF1F3]"
            )}
          />
          <div
            className={clsx(
              "absolute w-[100%] right-0 h-40 bottom-0 z-20",
              "[mask-image:linear-gradient(to_top,white,transparent)]",

              // Dark mode
              "dark:bg-[#000319]",

              // Light mode
              "bg-[#EDF1F3]"
            )}
          />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 dark:bg-[#000319] bg-[#EDF1F3] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-green opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-green blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-green"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] dark:bg-[#000319] bg-[#EDF1F3]"></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">{children}</div>
    </div>
  );
};
