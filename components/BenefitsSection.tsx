"use client";
import React, { SVGProps } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles, { layout } from "@/lib/style";
import { benefits } from "@/lib/Benefits";
import Button from "./buttons/Button";
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
      <div
        className={`flex flex-row p-6 rounded-[20px] gap-6  dark:hover:bg-black-300 hover:bg-blue-200 transition duration-300 items-start`}
      >
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} dark:bg-slate-700 bg-blue-100`}>
          <Icon className="icon w-[30px] h-[30px] object-contain text-blue-400" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-semibold dark:text-white text-black-100 text-[24px] leading-[23px] mb-1">{title}</h4>
          <p className=" dark:text-slate-400 text-black-100 text-[16px] leading-[24px] mb-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export const BenefitsSection = () => {
  return (
    <motion.div
      id="benefits"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex md:flex-row flex-col px-4 xl:px-44 sm:py-16 py-6 bg-white dark:bg-black-100"
    >
      <div className={layout.sectionInfo}>
        <h2 className="font-semibold text-[48px] xl:text-7xl xl:max-w-[700px]  dark:text-white text-black-100 xl:leading-[76.8px] leading-[50px] w-full">Beneficios de <span className="from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent bg-gradient-to-b">grabar</span> tu patente</h2>
        <p className={`${styles.paragraph} max-w-[690px] mt-5 mb-5`}>
        Esta medida no solo cumple con la Ley 21.601, sino que también introduce cambios significativos en la forma en que identificamos nuestros vehículos.
        </p>
        {/* <Button styles="mt-10" /> */}
        <MovingBorderDemo title="Contactanos"></MovingBorderDemo>
      </div>

      <div className={`${layout.sectionImg} flex flex-col items-start`}>
        {benefits.map((benefit, index) => (
          <BenefitsCard key={benefit.id} {...benefit} index={index} />
        ))}
      </div>
      
    </motion.div>
  );
};
