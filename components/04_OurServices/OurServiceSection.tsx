"use client";
import Link from "next/link";
import clsx from "clsx";
import Ripple from "@/components/ui/ripple";
import { MovingBorderDemo } from "@/components/ui/buttons/ButtonMoving";
import { OurServicesCard } from "@/components/04_OurServices/CardServices";
import { services } from "@/lib/OurServices";
import { Auto } from "@/components/ui/Auto";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export const OurServiceSection = () => {
  const { ref } = useSectionInView("Nosotros", 0.5);

  return (
    <motion.section
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
      id="nosotros"
      className={clsx(
        "flex items-center justify-center",
        "md:flex-row",
        "dark:bg-black-100",
        "flex-col-reverse",
        "scroll-mb-10 scroll-mt-16",
        "xl:scroll-mt-0",
        "xl:px-8 mb-0 xl:mb-32",
        "xl:flex-row",
        "lg:flex-col lg:mb-32"
      )}
    >
      <div className="xl:w-[50%] lg:w-[100%] md:w-[50%] w-[100%] relative flex justify-center items-center">
        <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Auto />
          <Ripple />
        </div>
      </div>

      <div>
        <div
          className={` flex flex-col xl:items-start lg:items-center lg:justify-center p-10 xl:p-20  rounded-[60px] xl:rounded-[100px]`}
        >
          <h2
            className={clsx(
              "font-normal text-4xl",
              "xl:text-6xl xl:max-w-[700px]",
              "text-black-100",
              "xl:leading-[70px] leading-[50px]",
              "w-full mb-8 xl:text-left",
              
              "lg:max-w-[700px] lg:text-center",
              "lg:text-6xl lg:leading-[70px]",

              //dark mode
              "dark:text-white"
            )}
          >
            ¿Por que grabar tu patente con{" "}
            <span className="dark:text-green text-green font-semibold">nosotros?</span>
          </h2>

          <div className="flex flex-col gap-5 lg:max-w-[700px]">
            {services.map((service, index) => (
              <OurServicesCard key={service.id} {...service} index={index} />
            ))}
            <Link href="/aplicacion">
              <MovingBorderDemo title="Acerca de" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
