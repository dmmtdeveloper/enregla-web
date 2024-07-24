"use client";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import logoWhite from "@/public/assets/img/logo-blanco.png";
import logoDark from "@/public/assets/img/logo-negro.png";

export const FooterSection = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center justify-center bg-white dark:bg-[#43435C] mt-32 py-8"
    >
      <article>
        <Image className="dark:block hidden" src={logoWhite} alt="logowhite" width={150} height={35} priority />
        <Image className="dark:hidden block" src={logoDark} alt="logodark" width={150} height={35} priority />

        <div className="flex">
          <FaInstagram />
          <FaFacebookSquare />
          <FaWhatsapp />
        </div>
      </article>

      <article>
        <p>contacto@enregla.net</p>
        <p>+56 951596668</p>
        <p>+56 933789064</p>
      </article>

      <article>
        <ul>
          <li>Información</li>
          <li>Preguntas frecuentes</li>
          <li>enregla app</li>
        </ul>
      </article>

      <small>© Copyright 2024 - enregla Todos los derechos reservados.</small>
    </motion.div>
  );
};
