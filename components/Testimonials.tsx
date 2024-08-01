"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/lib/data";

export const Testimonials = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-4 bg-white dark:bg-black-100 "
    >
      <div>
        <div className="h-[20vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </motion.div>
  );
};
