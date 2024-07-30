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
      className="flex flex-col px-8 xl:px-20 gap-14 lg:justify-center bg-white dark:bg-black-100 py-10"
    >
      <div className="flex sm:flex-col xl:flex gap-5 justify-between">
        <h3 className="text-5xl xl:text-7xl dark:text-white text-black-100 font-semibold w-full xl:w-[50vw]">
          Beneficios de grabar tu patente
        </h3>
        <p className="text-black-100 dark:text-white gap-2  xl:text-2xl flex items-end">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className=" scroll-mt-20 justify-center items-center flex flex-col gap-8 grid-cols-4 lg:auto-cols-auto lg:grid">
        <ArticleContainer>
          <IoShieldSharp className="text-4xl dark:text-blue-400" />
          <Benefits
            title="Disuasión contra el robo y la clonación"
            paragraph="Los ladrones y clonadores son menos propensos a atacar un automóvil con una patente grabada en vidrios y espejos, lo que contribuye a reducir el robo de vehículos."
          />
        </ArticleContainer>

        <ArticleContainer>
          <IoShieldCheckmark className="text-4xl dark:text-blue-400" />
          <Benefits
            title="Facilita identificación y recuperación"
            paragraph="En caso de robo o accidente, el grabado permite una rápida identificación del vehículo. Las autoridades y los propietarios pueden verificar la autenticidad y tomar medidas adecuadas."
          />
        </ArticleContainer>

        <ArticleContainer>
          <RiPoliceBadgeFill className="text-4xl dark:text-blue-400" />
          <Benefits
            title="Cumplimiento legal y evita multas"
            paragraph="Al grabar la patente según las especificaciones legales, los propietarios cumplen con la Ley de Tránsito. Evitar el incumplimiento es crucial para evitar multas y sanciones."
          />
        </ArticleContainer>

        <ArticleContainer>
          <AiFillSecurityScan className="text-4xl dark:text-blue-400" />
          <Benefits
            title="Contribuye a la seguridad vial"
            paragraph="La medida de grabado mejora la seguridad vehicular en Chile. Al dificultar el robo y la clonación, se crea un entorno más seguro para todos los conductores y sus vehículos."
          />
        </ArticleContainer>
      </div>
    </motion.div>
  );
};
