"use client";
import React from "react";
import clsx from "clsx";
import { CTA } from "@/components/ui/buttons/CTA";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { motion } from "framer-motion";


export const HeroSection = () => {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      id="inicio"
      className="relative w-screen"
    >
      <div className="relative w-full min-h-screen  dark:bg-black-100">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#E6FFDA" />
        <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="#00ED64" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#014E3D" />

        <div
          className={clsx(
            "h-full w-full",
            "flex items-center justify-center",
            "absolute inset-0 pt-10",
            "bg-grid-black/[0.028]",
            "dark:bg-grid-white/[0.02]",
            "dark:bg-black-100"
          )}
        >
          <div
            className={clsx(
              "absolute pointer-events-none",
              "inset-0 flex items-center",
              "justify-center",
              "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
              "dark:bg-black-100"
            )}
          ></div>

          <div className="flex flex-col items-center justify-center relative  z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
              <p
                className={clsx(
                  "uppercase tracking-widest",
                  "text-xs text-center",
                  "max-w-80",
                  "text-black-100",
                  "dark:text-blue-100"
                )}
              >
                auto en regla auto seguro
              </p>
              <TextGenerateEffect
                className="text-center text-[50px] sm:text-6xl md:text-6xl lg:text-4xl xl:text-[68px]"
                words="Solución integral en Seguridad Automotriz"
              />

              <p
                className={clsx(
                  "text-center",
                  "md:tracking-wider",
                  "mb-8 text-sm",
                  "md:text-lg",
                  "lg:text-2xl",
                  "text-black-100",
                  "xl:max-w-[700px]",

                  //dark mode
                  "dark:text-blue-100"
                )}
              >
                Compromiso en otorgar soluciones integrales que protejan a nuestros clientes y sus
                vehículos.
              </p>

              <CTA />
        
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
