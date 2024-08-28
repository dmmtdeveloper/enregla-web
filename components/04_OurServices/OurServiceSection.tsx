"use client";
import clsx from "clsx";
import { OurServicesCard } from "@/components/04_OurServices/CardServices";
import { services } from "@/lib/OurServices";
import { useSectionInView } from "@/hooks/useSectionInView";
import { Auto } from "../ui/Auto";
import { Reveal } from "../animation/Reveal";

export const OurServiceSection = () => {
  const { ref } = useSectionInView("Nosotros", 0.5);

  return (
    <Reveal>
      <section
        id="nosotros"
        ref={ref}
        className={clsx(
          "flex 2xl:px-64 px-10",
          "md:flex-row",
          "dark:bg-black-100",
          "flex-col-reverse",
          "2xl:scroll-m-32",
          "xl:px-8 mb-32 xl:mb-32",
          "xl:flex-row",
          "lg:flex-col lg:mb-32"
        )}
      >
        <div>
          <div
            className={` flex flex-col xl:items-start lg:items-center lg:justify-center lg:px-10 `}
          >
            <h2 className=" text-left 2xl:max-w-[500px] 2xl:text-left  font-display mb-2 text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] text-black-100 dark:text-slate-200 font-gradient-white ">
              Graba tu patente con nosotros
            </h2>

            <div
              className={clsx(
                "relative z-20 mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:flex-row md:gap-20 lg:grid-cols"
              )}
            >
              {services.map((service, index) => (
                <OurServicesCard key={service.id} {...service} index={index} />
              ))}
            </div>
          </div>

          <Reveal>
            <div className="flex items-center justify-center flex-col mt-20">
              <div className="border-slate-6 dark:border-slate-800 border-t 2xl:w-1/2  w-3/4 flex mb-10 items-center justify-center"></div>
              <div className="flex items-center justify-center pl-[60px] 2xl:pt-10 lg:pt-10">
                <Auto width="60px" height="80px" />
              </div>

              <p className="dark:text-gray-100 text-black-200 text-sm 2xl:text-[1.5rem] lg:text-[1.5rem] leading-[1.5] text-slate-12 font-medium text-center 2xl:max-w-[850px] lg:max-w-[750px]">
                Enregla, se posiciona en el mercado por una necesidad real para todos los vehículos
                y automovilistas de Chile, bajo la nueva ley 21.601 que modifica la ley de tránsito.{" "}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Reveal>
  );
};
