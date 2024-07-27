"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="z-[1] relative w-full pb-[2rem] flex items-center text-center justify-center flex-col gap-16 px-8 pt-48 xl:pt-72 hero_background"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center text-center items-center">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={clsx(
              "text-[48px]",
              "md:text-5xl",
              "lg:text-6xl",
              "xl:text-7xl",
              "xl:w-[900px]",
              // "text-gray-900",
              "drop-shadow-md",
              "text-center",
              "font-bold",
              "leading-tight md:px-8",
              "md:leading-tight",
              "xl:leading-tight",

              /* Dark Mode */
              "dark:text-white"
            )}
          >
            Solución integral en seguridad automotriz
          </motion.p>
        </div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-center flex-col gap-6 "
        >
          <p className="md:px-28 lg:px-60 text-center text-[16px] dark:text-[#CAC6DD] leading-7">
            Compromiso en otorgar soluciones integrales que protejan a nuestros clientes y sus vehículos.
          </p>

          <Button className="bg-green-500 dark:bg-purple-500" size="lg">
            Contactanos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
