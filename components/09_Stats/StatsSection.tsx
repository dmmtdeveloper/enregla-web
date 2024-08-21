"use client";
import React from "react";
import { motion } from "framer-motion";
import Stats from "@/components/09_Stats/Stats";

export const StatsSection = () => {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 2,
    }}
      className="px-4  dark:bg-black-100 mb-32"
    >
      <div>
        <div className="h-[20vh]  rounded-md flex flex-col antialiased items-center justify-center relative">
          <Stats/>
       
        </div>
      </div>
    </motion.div>
  );
};
