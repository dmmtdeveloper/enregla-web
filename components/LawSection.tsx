"use client";
import React, { SVGProps } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles, { layout } from "@/lib/style";
import { law } from "@/lib/Law";
import { MovingBorderDemo } from "./buttons/ButtonMoving";
import { AnimatedBeamMultipleOutputUI } from "./ui/AnimatedBeamUI";
import Link from "next/link";

type BenefitsProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

const BenefitsCard: React.FC<BenefitsProps> = ({ icon: Icon, title, content, index }) => {
  return (
    <div className="xl:px-24">
      <div className={`flex flex-row p-6 gap-6 items-start`}>
        <Icon className="icon w-[30px] h-[30px] object-contain text-green" />

        <div className="flex-1 flex flex-col ml-3 gap-1">
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
          <p className={clsx("dark:text-slate-400", "text-black-100", "text-[16px]", "leading-[24px]", "mb-1")}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export const LawSection = () => {
  return (
    <motion.div
      id="ley"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-4 flex md:flex-row flex-col  xl:px-44 py-16 dark:bg-black-100 scroll-mt-24 xl:scroll-m-28 xl:mb-32"
    >
      
        <div
          className={`${layout.sectionInfo} dark:bg-[#001E2B] p-10 xl:p-20 rounded-[60px] xl:rounded-[100px] bg-[#E6FFDA]`}
        >
          <h2 className="font-normal text-[38px] xl:text-6xl xl:max-w-[600px] dark:text-white text-black-100 xl:leading-[76.8px] leading-[50px] w-full mb-4">
            Conoce más acerca de la{" "}
            <span className="from-[#6FEE8D] to-green bg-clip-text text-transparent bg-gradient-to-b font-semibold">
              ley 21.601
            </span>
          </h2>
          <p
            className={clsx(
              "dark:text-slate-400",
              "text-black-100",
              "text-[16px]",
              "leading-[24px]",
              "mb-1",
              "xl:max-w-[600px] mb-10"
            )}
          >
            En septiembre del 2023 el Gobierno de Chile promulgó la ley 21.601. Esta ley busca prevenir la venta de
            vehículos robados y la venta de espejos retrovisores entre otros elementos de los vehículos venidos desde el
            mercado no autorizado.
          </p>
          {/* <Button styles="mt-10" /> */}
          <Link href="/FAQ">
            <MovingBorderDemo title="Conoce más" />
          </Link>
        </div>
      

      <div className=" xl:w-1/2 flex flex-col items-center justify-center">
        <AnimatedBeamMultipleOutputUI />
      </div>
    </motion.div>
  );
};


{/* <div className={`${layout.sectionImg} flex flex-col items-start pt-16`}>
  {law.map((law, index) => (
    <BenefitsCard key={law.id} {...law} index={index} />
  ))}
</div> */}