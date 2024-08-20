"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ClientsImage } from "@/components/ui/ClientsIcons";
import { useSectionInView } from "@/hooks/useSectionInView";

export const ClientSection = () => {
  const {ref} = useSectionInView("Clientes", 0.5)

  return (
    <section ref={ref} className="relative dark:bg-black-100 xl:pt-40  pt-20 px-4 mb-32">
      <div className={clsx("flex flex-col", "items-center", "gap-4")}>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={clsx(
            "text-gray-900",
            "font-semibold",
            "xl:text-[16px]",
            "text-[12px]",
            "text-center text-pretty",
            /* dark mode*/
            "dark:text-gray-400"
          )}
        >
          AYUDANDO A LA GENTE A PROTEGER SUS VEHÍCULOS
        </motion.p>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={clsx(
            "text-center",
            "md:tracking-wider",
            "text-sm md:text-lg",
            "lg:text-2xl lg:max-w-[700px]",
            "dark:text-blue-100",
            "text-black-100 mb-20",
            "max-w-[80vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center"
          )}
        >
          Nuestra tecnología en grabado de patentes es la elección preferida de los principales
          concesionarios y distribuidores automotrices.
        </motion.p>
      </div>
      <div className="flex flex-col justify-around gap-20">
        <ClientsImage />
      </div>
    </section>
  );
};
