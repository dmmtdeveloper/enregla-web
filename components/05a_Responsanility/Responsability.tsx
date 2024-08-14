"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import autos from "@/public/assets/img/autos.png";

export const Responsability = () => {
  return (
    <motion.div
      id="Responsability"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="flex-grow xl:flex px-4 xl:px-32 xl:mb-32 justify-center items-center xl:pt-32"
    >
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-6xl">
          <span className="text-green font-semibold">Responsabilidad</span> de las automotoras
        </h2>

        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-[20px] font-semibold">
            ¿De cuánto es la multa por no hacer el grabado de patente en el plazo establecido?
          </p>

          <p className="text-center w-[60%]  text-white-200">
            En caso de que Carabineros o fiscalizadores del Ministerio de Transportes te descubran conduciendo sin
            el grabado de patente después del plazo antes mencionado, se considerará como una falta grave a la Ley de
            Tránsito. Esto implica una multa de entre 1 a 1,5 UTM, es decir, entre $65.901 y $98.851 al valor de la UTM
            de agosto de 2024.
          </p>
          <Image className="w-[1000px] h-auto pt-10" width={500} height={500} src={autos} alt="autos" priority={true} />
        </div>
      </div>
    </motion.div>
  );
};
