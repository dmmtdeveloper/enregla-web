"use client";
import React from "react";
import { motion } from "framer-motion";
import { Paragraph } from "./text/Paragraph";
import { ClientsImage } from "@/components/IconsImages/ClientsIcons";
import clsx from "clsx";

export const ClientSection = () => {
  return (
    <section className="relative bg-white dark:bg-black-100 pb-36">
      <div className={clsx("flex flex-col", "items-center", "gap-4")}>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={clsx(
            "text-gray-900",
            "font-semibold",
            "text-[12px]",
            "text-justify text-pretty",
            /* dark mode*/
            "dark:text-gray-400"
          )}
        >
          AYUDANDO A LA GENTE A PROTEGER SUS VEHÍCULOS
        </motion.p>
        <Paragraph text="Nuestra tecnología en grabado de patentes es la elección preferida de los principales concesionarios y distribuidores automotrices." />
      </div>
      <div className="flex flex-col justify-around gap-20">
        <ClientsImage />
        {/* <motion.p className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold text-black-100 dark:text-white">
          "Auto en regla, auto seguro"
        </motion.p> */}
      </div>
    </section>
  );
};
