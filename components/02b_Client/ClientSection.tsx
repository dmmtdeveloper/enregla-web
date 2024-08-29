"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import MarqueeDemoLogo from "../ui/marquee-logo";
import { Reveal } from "../animation/Reveal";

export const ClientSection = () => {
  const { ref } = useSectionInView("Clientes", 0.8);
  return (
    <Reveal>
      <section
        id="clientes"
        ref={ref}
        className="relative 2xl:mb-44  scroll-m-32 2xl:scroll-m-48 mb-10 flex items-center flex-col px-8 2xl:mx-64"
      >
        <div className="border-slate-6 dark:border-slate-800 border-t 2xl:w-1/2 flex mb-10 items-center justify-center"></div>

        <div className={clsx("flex flex-col", "items-center", "gap-4")}>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={clsx(
              "text-gray-900",
              "font-semibold",
              "xl:text-2xl lg:text-2xl",
              "text-small",
              "text-center text-pretty",
              /* dark mode*/
              "dark:text-white-200"
            )}
          >
            Ayudando a la gente a proteger sus vehículos
          </motion.p>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={clsx(
              "text-center font-nomal",
              "md:tracking-wider",
              "text-sm md:text-lg",
              "lg:text-1xl lg:max-w-[700px]",
              "dark:text-blue-100",
              "text-black-100",
              "max-w-full md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center"
            )}
          >
            Nuestra tecnología en grabado de patentes es la elección preferida de los principales
            concesionarios y distribuidores automotrices.
          </motion.p>
        </div>
        <div className="2xl:max-w-[60rem] max-w-96">
          <MarqueeDemoLogo />
        </div>
      </section>
    </Reveal>
  );
};
