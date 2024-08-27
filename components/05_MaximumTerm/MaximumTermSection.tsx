"use client";
import { motion } from "framer-motion";
import { maximumTerm } from "@/lib/Benefits";
import { MaximumCard } from "@/components/05_MaximumTerm/MaximumCard";
import { paragrapsMaximumTerm } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import clsx from "clsx";
import { BackgroundGradient } from "../ui/background-gradient";
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
        "flex-col mb-10",
        "gap-4 2xl:px-64",

        // lg: 1024px
        "lg:flex lg:pb-20",
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
            Plazos para{" "}
            <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#E131F3] via-[#59B2EA] to-[#A7FC8F]">
              grabar mi patente
            </span>
          </h2>
        </div>
        <p className="dark:text-gray-200 2xl:max-w-4xl lg:max-w-3xl text-black-100 mx-auto mb-12 max-w-5xl text-center text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
         {paragrapsMaximumTerm.paragraph}
        </p>
      </article>

      <div className="relative z-20 mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:flex-row md:gap-20 lg:grid-cols">
        {maximumTerm.map((term, index) => (
          <MaximumCard key={term.id} {...term} index={index} />
        ))}
      </div>
    </motion.div>
  );
};
