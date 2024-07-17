"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { HeroPicture } from "./logo/HeroImage";
import { ButtonCta } from "./buttons/cta";

export const HeroSection = () => {
  return (
    <section className="flex items-center text-center justify-center flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center text-center">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={clsx(
              "text-4xl",
              "px-3 md:text-6xl",
              "text-gray-900",
              "text-center",
              "font-semibold",

              /* Dark Mode */
              "dark:text-gray-200"
            )}
          >
            Soluciones integrales de seguridad automotriz en Chile
          </motion.p>
        </div>

        <div className="flex items-center justify-center flex-col gap-4">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center text-[12px] px-12"
          >
            Nuestro compromiso es proporcionar soluciones integrales que
            protejan a nuestros clientes y sus vehículos.
          </motion.p>
          <ButtonCta title={"Contacto"} />
        </div>
      </div>
      <HeroPicture />
    </section>
  );
};
