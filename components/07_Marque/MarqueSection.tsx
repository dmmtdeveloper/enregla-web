"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import React from "react";
import MarqueeDemo from "@/components/ui/marquee-demo";
import { BackgroundGradient } from "../ui/background-gradient";
import { TimeSvg } from "../ui/TimeSvg";
import { Blocks } from "../ui/icons/Blocks";
import { Auto } from "../ui/Auto";

export const MarqueSection = () => {
  return (
    <motion.section
      id="clientes"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="px-4  dark:bg-black-100  z-[5] scroll-m-40"
    >
      <div
        className={clsx(
          "w-full flex justify-between",
          "items-center md:flex-row",
          "flex-col",
          "relative z-[1]",
          "xl:px-32 md:flex-col"
        )}
      >
        <div className="flex text-center items-center justify-center 2xl:pb-8 pb-4">
          <BackgroundGradient>
            <Blocks />
          </BackgroundGradient>
        </div>
        <div className="flex flex-col">
          <h2 className=" font-styling font-display mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient dark:text-gray-50  text-black-100">
            Lo que dicen{" "}
            <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#E131F3] via-[#59B2EA] to-[#A7FC8F]">
              nuestros clientes
            </span>
          </h2>
        </div>
        <p className="dark:text-gray-200 text-black-100 mx-auto mb-12 max-w-5xl text-center text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal 2xl:max-w-3xl">
          Nos enorgullece contar con la confianza de una amplia gama de clientes que buscan proteger
          sus vehículos con un servicio de grabado de patentes seguro y efectivo.
        </p>
      </div>
      <MarqueeDemo />

      <div className="flex items-center justify-center flex-col mt-20">
        <div className="border-slate-6 dark:border-slate-800 border-t 2xl:w-1/2  w-3/4 flex mb-10 items-center justify-center"></div>

        <div className="flex items-center justify-center pl-[60px] 2xl:pt-20 lg:pt-10">
          <Auto width="60px" height="80px" />
        </div>
        <p className="dark:text-gray-100  text-black-200 text-sm 2xl:text-[1.5rem] lg:text-[1.5rem] leading-[1.5] text-slate-12 font-medium text-center 2xl:max-w-3xl lg:max-w-[750px]">
          Desde particulares que desean aumentar la seguridad de sus autos, hasta empresas que
          buscan proteger sus flotas, todos nuestros clientes valoran la calidad, profesionalismo y
          atención al detalle que ofrecemos..{" "}
        </p>
      </div>
    </motion.section>
  );
};
