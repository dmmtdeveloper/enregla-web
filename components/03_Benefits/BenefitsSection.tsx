"use client";
import { motion } from "framer-motion";
import { benefits } from "@/lib/Benefits";
import clsx from "clsx";
import { useSectionInView } from "@/hooks/useSectionInView";
import { BenefitsCard } from "./Card";
import { BackgroundGradient } from "../ui/background-gradient";
import { ShieldSvg } from "../ui/ShieldSvg";
import { Reveal } from "../animation/Reveal";

export const BenefitsSection = () => {
  const { ref } = useSectionInView("Beneficios", 0.8);

  return (
    <Reveal>
      <section
        id="beneficios"
        ref={ref}
        className={clsx(
          "flex-col mb-32",
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
            <ShieldSvg />
          </BackgroundGradient>
        </div>
        <article className="w-full">
          <div className="flex flex-col">
            <h2 className=" font-styling font-display mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient dark:text-gray-50  text-black-100">
              Beneficios de{" "}
              <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#E131F3] via-[#59B2EA] to-[#A7FC8F]">
                grabar tu patente
              </span>
            </h2>
          </div>
          <p className="dark:text-gray-200 text-black-100 mx-auto mb-12 lg:max-w-3xl 2xl:max-w-3xl max-w-5xl text-center text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
            Esta medida no solo cumple con la Ley 21.601, sino que también introduce cambios
            significativos en la forma en que identificamos nuestros vehículos
          </p>
        </article>

        <div
          className={clsx(
            "items-center",
            "justify-center",
            "gap-4 flex flex-col",

            "xl:grid-cols-2",
            "xl:gap-2",

            "lg:grid-cols-2",
            "lg:grid",

            "2xl:grid-cols-2",
            "2xl:gap-4"
          )}
        >
          {benefits.map((benefit, index) => (
            <BenefitsCard key={benefit.id} {...benefit} index={index} />
          ))}
        </div>
      </section>
    </Reveal>
  );
};
