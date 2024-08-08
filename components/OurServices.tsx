"use client"
import { MovingBorderDemo } from "./buttons/ButtonMoving";
import { services } from "@/lib/OurServices";
import clsx from "clsx";
import Ripple from "@/components/ui/ripple";
import { Auto } from "./nav/Auto";
import { OurServicesCard } from "./OurServices/CardServices";
import {motion} from "framer-motion"

export const OurServices = () => {
  return (
    <motion.section
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
        "xl:px-8 xl:mb-32"
      )}
    >
      <div className="xl:w-[50%] md:w-[50%] w-[100%] relative flex justify-center items-center">
        <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Auto />
          <Ripple />
        </div>
      </div>

      <div>
        <div className={` flex flex-col  justify-center p-10 xl:p-20  rounded-[60px] xl:rounded-[100px]`}>
          <h2
            className={clsx(
              "font-normal text-[38px]",
              "xl:text-6xl xl:max-w-[700px]",
              "text-black-100",
              "xl:leading-[70px] leading-[50px]",
              "w-full mb-8",

              //dark mode
              "dark:text-white"
            )}
          >
            ¿Por que grabar tu patente con <span className="dark:text-green text-green font-semibold">nosotros</span>?
          </h2>

          <div className="flex flex-col gap-5">
            {services.map((service, index) => (
              <OurServicesCard key={service.id} {...service} index={index} />
            ))}
            <MovingBorderDemo title="Acerca de" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
