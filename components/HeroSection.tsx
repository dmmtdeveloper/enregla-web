"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { HeroPicture } from "./logo/HeroImage";
import { ButtonCtaHero } from "./buttons/CtaHero";

export const HeroSection = () => {
  return (
    <section className="flex items-center text-center justify-center flex-col gap-16">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center text-center px-5">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={clsx(
              "text-[40px]",
              "px-3 md:text-6xl",
              "text-gray-800",
              "text-center",
              "font-bold",
              "leading-[50px]",

              /* Dark Mode */
              "dark:text-gray-100"
            )}
          >
            Soluciones integrales de seguridad automotriz en Chile
          </motion.p>
        </div>

        <div className="flex items-center justify-center flex-col gap-6">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center text-[16px] px-12 text-gray-800 dark:text-[#CAC6DD]"
          >
            Nuestro compromiso es proporcionar soluciones integrales que
            protejan a nuestros clientes y sus vehículos.
          </motion.p>
          <ButtonCtaHero title={"CONTACTANOS"} />
        </div>
      </div>
      <HeroPicture />
    </section>
  );
};
