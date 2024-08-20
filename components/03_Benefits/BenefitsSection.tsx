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
      className=" flex-grow lg:flex lg:px-8 lg:mt-16 xl:flex px-8 md:px-16 xl:px-32  scroll-m-32 xl:mb-32 pt-8 pb-8"
    >
      <div className="xl:w-1/2">
        <div
          className={clsx(
            "flex",
            "flex-col",
            "justify-center",
            "xl:p-20",
            "lg:pt-10",
            "rounded-[60px]",
            "xl:rounded-[100px]"
          )}
        >
          <Title text="Beneficios" title="de grabar tu patente" />
          <ParagraphSection paragraph={paragrapsBenefits.paragraph} />
          <Link href="/FAQ">
            <MovingBorderDemo title="Contáctanos"></MovingBorderDemo>
          </Link>
        </div>
      </div>

      <div className={`${layout.sectionImg} flex flex-col items-start`}>
        {benefits.map((benefit, index) => (
          <BenefitsCard key={benefit.id} {...benefit} index={index} />
        ))}
      </div>
    </motion.div>
  );
};
