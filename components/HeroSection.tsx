"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { ButtonCtaHero } from "@/components/buttons/CtaHero";
import { HeroPicture } from "./IconsImages/HeroImage";


export const HeroSection = () => {
  return (
    <section id="inicio" className="flex items-center text-center justify-center flex-col gap-16 px-8 pt-48">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center text-center items-center">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={clsx(
              "text-[38px]",
              "md:text-5xl",
              "lg:text-6xl",
              "text-gray-900",
              "text-center",
              "font-bold",
              "leading-tight px-8 md:px-8",
              "md:leading-tight",

              /* Dark Mode */
              "dark:text-white"
            )}
          >
            Solución integral en seguridad automotriz
          </motion.p>
          <p></p>
        </div>

        <div className="flex items-center justify-center flex-col gap-6 ">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="md:px-28 lg:px-60 text-center text-[16px] text-gray-800 dark:text-[#CAC6DD] leading-7"
          >
            Compromiso en otorgar soluciones integrales que protejan a nuestros clientes y sus vehículos.
          </motion.p>

          <ButtonCtaHero title={"Contactanos"} />
        </div>
      </div>
      <HeroPicture />
    </section>
  );
};
