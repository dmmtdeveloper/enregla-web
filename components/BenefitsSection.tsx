"use client";
import React, { SVGProps } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles, { layout } from "@/lib/style";
import { benefits } from "@/lib/Benefits";
import Button from "./buttons/Button";


type BenefitsProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

const BenefitsCard: React.FC<BenefitsProps> = ({ icon: Icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] gap-6  dark:hover:bg-black-300 hover:bg-blue-200 transition duration-300 items-start`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-slate-700`}>
        <Icon className="icon w-[25px] h-[25px] object-contain text-blue-400" />

      </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-semibold dark:text-white text-black-100 text-[18px] leading-[23px] mb-1">{title}</h4>
          <p className=" dark:text-slate-400 text-black-100 text-[16px] leading-[24px] mb-1">{content}</p>
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
        <h2 className={`${styles.heading2} dark:text-white`}>Beneficios de grabar tu patente</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae in, totam quis facere animi corrupti?
        </p>
      <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex flex-col items-start`}>
        {benefits.map((benefit, index) => (
          <BenefitsCard key={benefit.id} {...benefit} index={index} />
        ))}
      </div>
    </motion.div>
  );
};