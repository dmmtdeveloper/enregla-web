"use client";
import React from "react";
import { motion } from "framer-motion";
import { Paragraph } from "./text/Paragraph";
import { ClientsImage } from "@/components/img/ClientsImage";

export const ClientSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-4 mt-10">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-gray-400 text-[12px]"
        >
          AYUDANDO A LA GENTE A PROGER SUS VEHICULOS
        </motion.p>
        <Paragraph text="Nuestra tecnología en grabado de patentes es la elección preferida de los principales Concesionarios y Distribuidores automotrices en Chile." />
      </div>
      <ClientsImage />
    </section>
  );
};
