"use client";
import React from "react";
import { Card } from "./card/Card";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/lib/data";

export const Testimonials = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-4 bg-white"
    >
      <h1 className="heading dark:text-white text-black">Testimonio de <span className="text-blue-400">clientes satisfechos</span></h1>
      <div className="flex flex-col items-center mt-10">
        <div className="h-[70vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </motion.div>
  );
};
