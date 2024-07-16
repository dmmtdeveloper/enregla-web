"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import HeroImage from "../public/assets/HeroImage.jpg";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="flex items-center text-center justify-center flex-col gap-6">
      <div className="">
        <div className="flex flex-col justify-center text-center">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={clsx(
              "text-4xl",
              "px-3 md:text-6xl",
              "text-gray-900",
              "text-center",
              "font-semibold",

              /* Dark Mode */
              "dark:text-gray-200"
            )}
          >
            Soluciones integrales de seguridad automotriz en Chile
          </motion.p>
        </div>
        <p className="text-center text-[12px] px-12">
          Nuestro compromiso es proporcionar soluciones integrales que protejan
          a nuestros clientes y sus vehículos.
        </p>
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-center"
      >
        <Image
          className="gradient-mask-b-0 rounded-xl"
          src={HeroImage}
          alt="hero-image"
          width={400}
          height={100}
          priority
          objectFit="cover"
        />
      </motion.div>
    </section>
  );
};
