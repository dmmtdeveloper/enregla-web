"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingStats } from "./ui/InfiniteMovingStats";
import { testimonials } from "@/lib/data";

export const StatsSection = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-4  dark:bg-black-100 "
    >
      <div>
        <div className="h-[20vh]  rounded-md flex flex-col antialiased items-center justify-center relative">
          <InfiniteMovingStats items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </motion.div>
  );
};
