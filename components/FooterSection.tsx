"use client";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import logoWhite from "@/public/assets/img/logo-blanco-autoseguro.png";
import logoDark from "@/public/assets/img/logo-negro-autoseguro.png";

export const FooterSection = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center justify-center bg-white dark:bg-[#43435C] mt-32 py-8 px-8"
      id="servicios"
    >
      <article>
        <Image className="dark:block hidden w-60 h-auto" src={logoWhite} alt="logowhite" width={150} height={35} priority />
        <Image className="dark:hidden block w-60 h-auto" src={logoDark} alt="logodark" width={150} height={35} priority />

        <div className="flex  justify-between mt-10">
          <FaInstagram className="text-3xl dark:text-white text-gray-900 "/>
          <FaFacebookSquare className="text-3xl dark:text-white text-gray-900 "/>
          <FaWhatsapp className="text-3xl dark:text-white text-gray-900 "/>
        </div>
      </article>

      <article className="flex flex-col items-center justify-center mt-5 gap-2 dark:text-white text-gray-900 hidden">
        <p>contacto@enregla.net</p>
        <p>+56 951596668</p>
        <p>+56 933789064</p>
      </article>

      
        <ul className="flex flex-col items-center justify-center mt-5 gap-2  dark:text-white text-gray-900 hidden">
          <li>Información</li>
          <li>Preguntas frecuentes</li>
          <li>enregla app</li>
        </ul>
     

      <small className="mt-10 flex text-center  dark:text-white text-gray-900">© Copyright 2024 - enregla Todos los derechos reservados.</small>
    </motion.div>
  );
};
