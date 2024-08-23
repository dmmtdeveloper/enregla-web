"use client";
import { motion } from "framer-motion";
import { benefits } from "@/lib/Benefits";
import { Title } from "@/components/ui/titles/Title";
import clsx from "clsx";
import { paragrapsBenefits } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
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
        "xl:px-8",
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
          <p
            className={clsx(
              // default styles
              "font-normal",
              "text-[18px]",
              "leading-[30.8px]",
              "text-black-100",
              "w-full xl:text-center text-justify",
              "mt-5 mb-8",

              // 2xl
              "2xl:max-w-[800px]",
              // xl
              "xl:max-w-[600px]",
              // lg
              "lg:max-w-[730px]",

              // dark mode
              "dark:text-white-200"
            )}
          >
            {paragrapsBenefits.paragraph}
          </p>
    
        </div>
      </div>

      <div
        className={clsx(
          "items-center",
          "justify-center",
          "gap-4 flex flex-col",

          // "md:grid-cols-2",
          // "md:grid",
          // "md:flex",
          // "md:gap-8",

          
          "xl:grid-cols-2",
          "xl:gap-2",
          
          "lg:grid-cols-2",
          "lg:grid",

          "2xl:grid-cols-4",
          "2xl:gap-4",
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
