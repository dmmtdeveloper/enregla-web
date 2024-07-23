"use client";
import React from "react";
import { AiOutlineStop } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi2";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { Subtitles } from "./Subtitles/Subtitles";
import { AiFillSecurityScan } from "react-icons/ai";
import { Benefits } from "./Benefits/Benefits";
import { motion } from "framer-motion";

export const BenefitsSection = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center p-10 mt-10 px-8 gap-14"
    >
      <Subtitles title="Beneficios de grabar tu patente" direction="center"/>
      <div className="flex flex-col gap-10">
        <article className="flex flex-col gap-2 items-center justify-center">
          <AiOutlineStop className="text-5xl text-[#FF776F]" />
          <Benefits
            title="Disuasión contra el robo y la clonación"
            paragraph="Los ladrones y clonadores son menos propensos a atacar un automóvil con una patente grabada en vidrios y espejos, lo que contribuye a reducir el robo de vehículos."
          />
        </article>

        <article className="flex flex-col gap-2 items-center justify-center">
          <HiIdentification className="text-5xl text-[#7ADB78]" />
          <Benefits
            title="Facilita identificación y recuperación"
            paragraph="En caso de robo o accidente, el grabado permite una rápida identificación del vehículo. Las autoridades y los propietarios pueden verificar la autenticidad y tomar medidas adecuadas."
          />
        </article>

        <article className="flex flex-col gap-2 items-center justify-center">
          <RiPoliceBadgeFill className="text-5xl text-[#FFC876]" />
          <Benefits
            title="Cumplimiento legal y evita multas"
            paragraph="Al grabar la patente según las especificaciones legales, los propietarios cumplen con la Ley de Tránsito. Evitar el incumplimiento es crucial para evitar multas y sanciones."
          />
        </article>

        <article className="flex flex-col gap-2 items-center justify-center">
          <AiFillSecurityScan className="text-5xl text-[#AC6AFF]" />
          <Benefits
            title="Contribuye a la seguridad vial"
            paragraph="La medida de grabado mejora la seguridad vehicular en Chile. Al dificultar el robo y la clonación, se crea un entorno más seguro para todos los conductores y sus vehículos."
          />
        </article>
      </div>
    </motion.div>
  );
};
