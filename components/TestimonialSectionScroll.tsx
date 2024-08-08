"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/lib/data";
import clsx from "clsx";

export const TestimonialScroll = () => {
  return (
    <motion.div
      id="clientes"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-4  dark:bg-black-100 pb-32 z-[5] scroll-m-40"
    >
      <div
        className={clsx(
          "w-full flex justify-between",
          "items-center md:flex-row",
          "flex-col",
          "mb-16 md:mb-6",
          "relative z-[1]",
          "xl:px-32 md:flex-col"
        )}
      >
        <h1
          className={clsx(
            "font-normal",
            "text-[48px] xl:text-center",
            "xl:text-7xl w-full",
            "dark:text-white",
            "text-black-100",
            "xl:leading-[76.8px]",
            "leading-[50px]",
            "w-full mb-4"
          )}
        >
          ¿Que dicen nuestros{" "}
          <span className="from-[#6FEE8D] to-[#25D366]  bg-clip-text text-transparent bg-gradient-to-b font-semibold">
            clientes
          </span>
          ?
        </h1>
     
      </div>

      <div>
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </motion.div>
  );
};
