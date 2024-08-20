"use client";

import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import clsx from "clsx";
import { motion } from "framer-motion";

export const Nosotros = () => {
  return (
    <motion.section
      id="us"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-center items-center  min-h-screen  px-8  py-36"
    >
      <div className="flex flex-col gap-10 w-full lg:w-3/4 xl:w-[55%]">
        <article className="flex flex-col gap-5">
          <h2
            className={clsx(
              "font-semibold",
              "text-4xl xl:text-6xl",
              "xl:max-w-[700px]",
              "dark:text-white",
              "text-black-100",
              "xl:leading-[70px] leading-[60px]",
              "w-[800px]"
            )}
          >
            ¿Quiénes Somos?
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-black dark:text-white text-justify">
              Somos una empresa que nace hace 9 años, como grupo simplifica y nos dedicamos a
              SERVICIOS INTEGRALES. Contamos con 3 años en el rubro automotriz donde contamos con
              experiencia en servicios de láminas de seguridad, pulidos y grabados sobre todo en
              centros comerciales como Mall plaza, también clientes como Difor y Sergio Escobar. Nos
              ubicamos en zonas estratégicas de Chile, tales como la quinta, Región Metropolitana y
              Octava región.
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-4">
          <div>
            <TbTargetArrow className="text-4xl text-green" />
            <h2
              className={clsx(
                "font-semibold",
                "text-4xl xl:text-5xl",
                "xl:max-w-[700px]",
                "dark:text-white",
                "text-black-100",
                "xl:leading-[70px] leading-[50px]",
                "w-full"
              )}
            >
              Misión:
            </h2>
          </div>
          <p className="text-black dark:text-white text-justify">
            Entregar una solución de manera integral en seguridad a nuestros clientes, enfocados
            100% en el servicio y acompañamiento a cada uno, entregando lo mejor de nosotros como
            empresa.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <div>
            <HiOutlineLightBulb className="text-4xl text-green" />
            <h2
              className={clsx(
                "font-semibold",
                "text-4xl xl:text-5xl",
                "xl:max-w-[700px]",
                "dark:text-white",
                "text-black-100",
                "xl:leading-[70px] leading-[50px]",
                "w-full"
              )}
            >
              Visión:
            </h2>
          </div>
          <p className="text-black dark:text-white text-justify">
            Ser una de las mejores empresas de seguridad automotriz en Chile, con enfoque en
            servicio y calidad de productos.
          </p>
        </article>
      </div>
    </motion.section>
  );
};
