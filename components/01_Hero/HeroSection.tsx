"use client";
import React from "react";
import clsx from "clsx";
import { CTA } from "@/components/ui/buttons/CTA";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import { ButtonContact } from "../ui/buttons/ContactButton";
import { HeroTitle } from "./HeroTitle";
import { RippleSection } from "./RippleSection";
import { ButtonHeroSmall } from "./ButtonHeroSmall";
import { ParagraphHero } from "./ParagraphHero";
import Link from "next/link";
import { MovingBorderDemo } from "../ui/buttons/ButtonMoving";

export const HeroSection = () => {
  const { ref } = useSectionInView("Inicio", 0.5);
  return (
    <motion.div
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      id="inicio"
      className="relative w-screen 2xl:mb-0 lg:mb-10 mb-80"
    >
      <section className="relative w-full min-h-screen  dark:bg-black-100">
        {/* <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#014E3D" /> */}
        {/* <Spotlight className="top-40 left-10 md:left-32 md:top-20 h-screen" fill="#E6FFDA" /> */}
        {/* <Spotlight className="top-10 rigth-full h-[80vh] w-[50vw]" fill="#00ED64" /> */}

        <div
          className={clsx(
            "w-full 2xl:mt-0 mt-32 lg:mt-0",
            "2xl:flex lg:flex 2xl:px-80  lg:px-10 items-center",
            "absolute inset-0 pt-10",
            "bg-grid-black/[0.028]",
            "dark:bg-grid-white/[0.02]",
            "dark:bg-black-100"
          )}
        >
          <div className="flex flex-col  relative  z-10  items-center justify-center lg:items-start md:items-start xl:items-start 2xl:items-start">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col lg:items-start 2xl:items-start items-center justify-center">
              <ButtonHeroSmall />
              <HeroTitle />
              <ParagraphHero />
            </div>
            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row w-full 2xl:px-0 lg:px-0 px-8  gap-4 xl:gap-4">
              {/* <CTA /> */}
              <Link href="/#contacto">
                <MovingBorderDemo title="Contactanos" />
              </Link>
              <ButtonContact />
            </div>
          </div>

          <RippleSection />
        </div>
      </section>
    </motion.div>
  );
};
