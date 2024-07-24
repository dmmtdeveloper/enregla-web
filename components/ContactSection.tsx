
"use client"
import React from "react";
import { ButtonCtaHero } from "./buttons/CtaHero";
import {motion} from "framer-motion"

export const ContactSection = () => {
  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="dark:bg-[#43435C] bg-gray-50 w-full dark:text-gray-50 text-gray-900 px-4 items-center flex flex-col justify-center gap-10 py-10 mt-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-3xl text-center font-semibold">¿Estas interesado en nuestros servicios?</h2>
        <p className="text-center">Estamos aqui para ayudarte</p>
      </div>

      <ButtonCtaHero title="Contactanos"/>
    </motion.div>
  );
};
