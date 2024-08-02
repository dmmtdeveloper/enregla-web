"use client";
import React, { SVGProps } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles, { layout } from "@/lib/style";
import { benefits } from "@/lib/Benefits";
import { MovingBorderDemo } from "./buttons/ButtonMoving";

type BenefitsProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

const BenefitsCard: React.FC<BenefitsProps> = ({ icon: Icon, title, content, index }) => {
  return (
    <div className="xl:px-24">
      <div className={`flex flex-row p-6 rounded-[20px] gap-6  transition duration-300 items-start`}>
        <div
          className={`w-[64px] h-[64px] rounded-full lg:flex justify-center items-center dark:bg-slate-700 bg-slate-200 hidden`}
        >
          <Icon className="icon w-[30px] h-[30px] object-contain text-green" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4
            className={clsx(
              "font-semibold",
              "dark:text-white",
              "text-black-100",
              "text-[24px]",
              "leading-[23px]",
              "mb-1"
            )}
          >
            {title}
          </h4>
          <p className={clsx("dark:text-white-200", "text-black-100", "text-[16px]", "leading-[24px]", "mb-1")}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BenefitsSection = () => {
  return (
    <motion.div
      id="beneficios"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex md:flex-row flex-col px-4 xl:px-44 sm:py-16 py-6 dark:bg-black-100 scroll-m-12 mb-32"
    >
      <div className={layout.sectionInfo}>
        <h2 className="font-semibold text-[48px] xl:text-7xl xl:max-w-[700px]  dark:text-white text-black-100 xl:leading-[76.8px] leading-[50px] w-full mb-4">
          {" "}
          <span className="from-[#6FEE8D] to-green  bg-clip-text text-transparent bg-gradient-to-b">
            Beneficios
          </span>{" "}
          de grabar tu patente
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5 mb-8 dark:text-white-200`}>
          Esta medida no solo cumple con la Ley 21.601, sino que también introduce cambios significativos en la forma en
          que identificamos nuestros vehículos.
        </p>
        {/* <Button styles="mt-10" /> */}
        <MovingBorderDemo title="Contáctanos"></MovingBorderDemo>
      </div>

      <div className={`${layout.sectionImg} flex flex-col items-start`}>
        {benefits.map((benefit, index) => (
          <BenefitsCard key={benefit.id} {...benefit} index={index} />
        ))}
      </div>
    </motion.div>
  );
};
