"use client";
import React from "react";
import Image from "next/image";
import reportOffice from "@/public/assets/img/report-office.jpg";
import clsx from "clsx";
import { ConcesionariosCard } from "@/components/14_Aplicacion/Card";
import { concesionarios } from "@/lib/concesionarios";
import { useSectionInView } from "@/hooks/useSectionInView";
import MarqueeDemoLogo from "../ui/marquee-logo";
import { Reveal } from "../animation/Reveal";

// const fadeIn = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   transition: { duration: 2 },
// };

export const Aplicacion = () => {
  const { ref } = useSectionInView("Concesionarios", 0.5);
  return (
    <div
      // {...fadeIn}
      ref={ref}
      id="concesionarios"
      className={clsx(
        // default
        "flex-col mb-32 mt-32",
        "gap-4 px-0",

        // lg: 1024px
        "lg:flex lg:pb-20",
        "lg:px-16 lg:mt-48",

        // xl: 1280px
        "xl:flex px-8",
        "xl:px-32",
        "xl:mb-32",

        // 2xl
        "2xl:mt-52",
        "2xl:px-36",

        // md: 768px
        "md:px-16",
        "scroll-m-32"
        // "pt-8 pb-8"
      )}
    >
      <section className="w-full flex flex-col items-center justify-center">
        <article className="flex flex-col items-center justify-center">
          <Reveal>
            <h2 className=" font-styling font-display mb-2 2xl:max-w-[48rem] lg:max-w-[38rem] text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient dark:text-gray-50  text-black-100">
              El mejor servicio en{" "}
              <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#E131F3] via-[#59B2EA] to-[#A7FC8F]">
                grabado de patentes{" "}
              </span>
              del mercado
            </h2>
          </Reveal>

          <Reveal>
            <p className="dark:text-gray-200 text-black-100 mx-auto mb-12 lg:max-w-3xl 2xl:max-w-3xl max-w-5xl text-center text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
              Para obtener más detalles, no dudes en contactarnos. Mientras tanto, puedes confiar en
              que nuestro software manejará todo el proceso de manera eficiente, segura y sencilla,
              mejorando tus operaciones de grabado de patentes.
            </p>
          </Reveal>

          <Reveal>
            <div>
              <Image
                className="flex items-center justify-center rounded-3xl shadow-sm "
                width={700}
                height={400}
                priority
                src={reportOffice}
                alt="oficina-gráficos"
              />
            </div>
          </Reveal>
        </article>

        <article className="2xl:max-w-full lg:max-w-full max-w-[27rem]">
          <div className="relative 2xl:mb-32  scroll-m-32 2xl:scroll-m-48 mb-10 flex items-center flex-col px-8 2xl:mx-64">
            <div className="border-slate-6 dark:border-slate-800 border-t 2xl:w-1/2 flex mb-10 items-center justify-center"></div>

            <Reveal>
              <div className={clsx("flex flex-col", "items-center", "gap-4")}>
                <p
                  className={clsx(
                    "text-gray-900",
                    "font-semibold",
                    "xl:text-2xl lg:text-2xl",
                    "text-small",
                    "text-center text-pretty",
                    /* dark mode*/
                    "dark:text-white-200"
                  )}
                >
                  Ayudando a la gente a proteger sus vehículos
                </p>
                <p
                  className={clsx(
                    "text-center font-nomal",
                    "md:tracking-wider",
                    "text-sm md:text-lg",
                    "lg:text-1xl lg:max-w-[700px]",
                    "dark:text-blue-100",
                    "text-black-100",
                    "max-w-full md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center"
                  )}
                >
                  Nuestra tecnología en grabado de patentes es la elección preferida de los
                  principales concesionarios y distribuidores automotrices.
                </p>
              </div>
            </Reveal>

            <div className="2xl:max-w-[60rem] lg:max-w-[50rem] max-w-[25rem]">
              <MarqueeDemoLogo />
            </div>
          </div>
        </article>
      </section>

      <section className="2xl:px-40 lg:px-20">
        <Reveal>
          <p className="text-base 2xl:pl-1 leading-[1.6] dark:text-slate-300 font-normal text-black-200 text-justify pb-4">
            Sistema personalizado para ti
          </p>
        </Reveal>

        <Reveal>
          <h2 className=" text-left 2xl:max-w-[60rem] 2xl:text-left 2xl:pb-10 pb-8 font-semibold font-display  text-2xl md:text-[3.5rem] tracking-tight leading-[120%] text-black-100 dark:text-slate-200  ">
            Todo lo que tu concesionario requiere para gestionar y controlar tus grabados de
            patente.
          </h2>
        </Reveal>
        <article
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
          {concesionarios.map((conce, index) => (
            <ConcesionariosCard
              key={conce.id}
              title={conce.title}
              content={conce.content}
              index={index}
              icon={conce.icon}
            />
          ))}
        </article>
      </section>
    </div>
  );
};

{
  /* <motion.div {...fadeIn} className="flex flex-col gap-8 md:gap-16 mt-16 md:mt-0">
  <motion.article {...fadeIn} className="flex items-center justify-center mb-20">
    <h2
      className={clsx(
        "font-semibold",
        "text-[28px] md:text-[38px] xl:text-6xl",
        "xl:max-w-[800px]",
        "dark:text-white",
        "text-black-100",
        "leading-[40px] md:leading-[50px] xl:leading-[70px]",
        "w-full text-center"
      )}
    >
      "Reformulando el proceso de <span className="text-green">grabado de patentes</span> en
      vehículos"
    </h2>
  </motion.article>
  <motion.article
    {...fadeIn}
    className="flex flex-col md:flex-row items-center justify-center gap-8"
  >
    <motion.div {...fadeIn}>
      <Image
        className="w-[400px] h-auto "
        width={400}
        height={400}
        alt="app"
        priority={true}
        src={app}
      />
    </motion.div>
    <div>
      <h2
        className={clsx(
          "font-semibold",
          "text-[28px] md:text-[38px] xl:text-6xl",
          "xl:max-w-[500px]",
          "dark:text-white",
          "text-black-100",
          "leading-[40px] md:leading-[50px] xl:leading-[70px]",
          "w-full xl:text-left text-center"
        )}
      >
        Nuestra solución cuenta con una <span className="text-green">APP</span>
      </h2>
      <p
        className={clsx(
          "max-w-[700px]",
          "dark:text-white",
          "text-black-100 xl:text-left text-center"
        )}
      >
        Aplicación que registra los grabados en tiempo real, facilita la lectura automática de
        patente y VIN sin necesidad de tipeo, asegurando un proceso de grabado sin errores.
      </p>
    </div>
  </motion.article>
  <motion.article
    {...fadeIn}
    className="flex flex-col md:flex-row items-center justify-center gap-8"
  >
    <div className="flex flex-col items-center order-2 md:order-1">
      <h2
        className={clsx(
          "font-semibold",
          "text-[28px] md:text-[38px] xl:text-6xl",
          "xl:max-w-[800px]",
          "dark:text-white",
          "text-black-100",
          "leading-[40px] md:leading-[50px] xl:leading-[70px]",
          "w-full text-center"
        )}
      >
        Máquina <span className="text-green">POST</span>
      </h2>
    </div>
    <motion.div {...fadeIn} className="flex flex-col items-center order-1 md:order-2">
      <Image
        className="w-[400px] h-auto"
        width={345}
        height={370}
        alt="post"
        priority={true}
        src={post}
      />
    </motion.div>
  </motion.article>
</motion.div> */
}
