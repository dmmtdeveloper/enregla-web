"use client";
import { motion } from "framer-motion";
import { layout } from "@/lib/style";
import { benefits } from "@/lib/Benefits";
import { MovingBorderDemo } from "@/components/ui/buttons/ButtonMoving";
import { BenefitsCard } from "@/components/03_Benefits/Card";
import { Title } from "@/components/ui/titles/Title";
import { ParagraphSection } from "@/components/ui/paragraph/ParagraphSection";
import clsx from "clsx";
import { paragrapsBenefits } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";
import { BackgroundGradientDemo } from "../ui/BackgroundGradientDemo";

export const BenefitsSection = () => {
  const { ref } = useSectionInView("Beneficios", 0.8);

  return (
    <motion.div
      id="beneficios"
      ref={ref}
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
        "flex-col",
        "gap-16",

        // lg: 1024px
        "lg:flex",
        "lg:px-8 lg:mt-16",

        // xl: 1280px
        "xl:flex px-8",
        "xl:px-24",
        "xl:mb-32",

        // md: 768px
        "md:px-16",
        "scroll-m-32",
        "pt-8 pb-8"
      )}
    >
      <div className="w-full">
        <div className={clsx("flex items-center justify-center", "flex-col", "lg:pt-10")}>
          <Title text="Beneficios" title="de grabar tu patente" />
          <ParagraphSection paragraph={paragrapsBenefits.paragraph} />
          <Link href="/FAQ">{/* <MovingBorderDemo title="Contáctanos"></MovingBorderDemo> */}</Link>
        </div>
      </div>

      <div
        className={clsx(
          "items-center",
          "justify-center",
          "gap-4 flex flex-col",


          "2xl:flex-row",
          "2xl:gap-8",
          "md:flex",
          "md:gap-8",
          "lg:grid-cols-2",
          "lg:grid"
        )}
      >
        {benefits.map((benefit, index) => (
          <BackgroundGradientDemo key={benefit.id} {...benefit} index={index} />
          // <BenefitsCard key={benefit.id} {...benefit} index={index} />
        ))}
      </div>
    </motion.div>
  );
};
