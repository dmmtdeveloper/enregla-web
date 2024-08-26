"use client";
import { motion } from "framer-motion";
import { maximumTerm } from "@/lib/Benefits";
import { MovingBorderDemo } from "@/components/ui/buttons/ButtonMoving";
import { MaximumCard } from "@/components/05_MaximumTerm/MaximumCard";
import Link from "next/link";
import { ParagraphSection } from "../ui/paragraph/ParagraphSection";
import { paragrapsMaximumTerm } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { BackgroundGradientDemo } from "../ui/BackgroundGradientDemo";
import clsx from "clsx";
import { BackgroundGradient } from "../ui/background-gradient";
import { ShieldSvg } from "../ui/ShieldSvg";
import { TimeSvg } from "../ui/TimeSvg";

export const MaximumTerm = () => {
  const { ref } = useSectionInView("Plazos", 0.5);

  return (
    <motion.div
      ref={ref}
      id="plazo"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className={clsx(
        "flex-col mb-32",
        "gap-4 2xl:px-64",

        // lg: 1024px
        "lg:flex lg:pb-32",
        "lg:px-8 lg:mt-16",

        // xl: 1280px
        "xl:flex px-8",
        "xl:px-32",
        "xl:mb-32",

        // md: 768px
        "md:px-16",
        "scroll-m-32"
        // "pt-8 pb-8"
      )}
    >
      <div className="flex text-center items-center justify-center 2xl:pb-8 pb-4">
        <BackgroundGradient>
          <TimeSvg/>
        </BackgroundGradient>
      </div>
      <article className="w-full">
        <div className="flex flex-col">
          <h2 className=" font-styling font-display mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient dark:text-gray-50  text-black-100">
            ¿hasta cuando tengo plazo para{" "}
            <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#E131F3] via-[#59B2EA] to-[#A7FC8F]">
              grabar mi patente?
            </span>
          </h2>
        </div>
        <p className="dark:text-gray-200 text-black-100 mx-auto mb-12 max-w-5xl text-center text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
          Esta medida no solo cumple con la Ley 21.601, sino que también introduce cambios
          significativos en la forma en que identificamos nuestros vehículos
        </p>
      </article>

      {/* <div className="xl:w-1/2">
        <div
          className={` flex flex-col justify-center px-8 xl:p-20 p-12 rounded-[60px] xl:rounded-[100px]`}
        >
          <h2 className="font-normal text-[38px] xl:text-6xl xl:max-w-[700px] lg:text-5xl lg:max-w-[780px] lg:leading-[60px]  dark:text-white text-black-100 xl:leading-[70px] leading-[50px] w-full mb-4">
            ¿Hasta cuando hay
            <span className="font-semibold text-[#25D366]"> plazo para el grabado</span> de patente?
          </h2>
          <ParagraphSection paragraph={paragrapsMaximumTerm.paragraph} />
          <Link href="FAQ">
            <MovingBorderDemo title="Conoce más"></MovingBorderDemo>
          </Link>
        </div>
      </div> */}

      <div className={` flex flex-col items-start  mt-10 relative`}>
        {maximumTerm.map((term, index) => (
          <MaximumCard key={term.id} {...term} index={index} />
        ))}
      </div>
    </motion.div>
  );
};
