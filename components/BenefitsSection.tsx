"use client";
import React from "react";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { Subtitles } from "./Subtitles/Subtitles";
import { AiFillSecurityScan } from "react-icons/ai";
import { Benefits } from "./Benefits/Benefits";
import { motion } from "framer-motion";
import { ArticleContainer } from "./Benefits/Article";
import { IoShieldCheckmark, IoShieldSharp } from "react-icons/io5";


export const BenefitsSection = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center p-10 mt-10 px-8 gap-14"
    >
      <Subtitles title="Beneficios de grabar tu patente" direction="left" />
      <div className="flex flex-col gap-10">
        <ArticleContainer>
          <IoShieldSharp className="text-4xl text-[#FF776F]" />
          <Benefits
            title="Disuasión contra el robo y la clonación"
            paragraph="Los ladrones y clonadores son menos propensos a atacar un automóvil con una patente grabada en vidrios y espejos, lo que contribuye a reducir el robo de vehículos."
          />
        </ArticleContainer>

        <ArticleContainer>
          <IoShieldCheckmark className="text-4xl text-[#7ADB78]" />
          <Benefits
            title="Facilita identificación y recuperación"
            paragraph="En caso de robo o accidente, el grabado permite una rápida identificación del vehículo. Las autoridades y los propietarios pueden verificar la autenticidad y tomar medidas adecuadas."
          />
        </ArticleContainer>

        <ArticleContainer>
          <RiPoliceBadgeFill className="text-4xl text-[#FFC876]" />
          <Benefits
            title="Cumplimiento legal y evita multas"
            paragraph="Al grabar la patente según las especificaciones legales, los propietarios cumplen con la Ley de Tránsito. Evitar el incumplimiento es crucial para evitar multas y sanciones."
          />
        </ArticleContainer>

        <ArticleContainer>
          <AiFillSecurityScan className="text-4xl text-[#AC6AFF]" />
          <Benefits
            title="Contribuye a la seguridad vial"
            paragraph="La medida de grabado mejora la seguridad vehicular en Chile. Al dificultar el robo y la clonación, se crea un entorno más seguro para todos los conductores y sus vehículos."
          />
        </ArticleContainer>
      </div>
    </motion.div>
  );
};
