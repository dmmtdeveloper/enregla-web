"use client";
import React from "react";
import styles from "@/lib/style";
import clsx from "clsx";
import { ButtonContact } from "./buttons/ContactButton";

const CTA = () => {
  return (
    <section
      className={clsx(" z-[20] mx-4 xl:mx-32 relative xl:flex xl:items-center", "xl:justify-around", "dark:bg-black-100 rounded-3xl xl:rounded-[5rem]")}
    >
      <div
        className={clsx(
          "xl:flex shadow-card-white",
          "xl:flex-1 xl:justify-between",
          "xl:items-center gap-5",
          "xl:p-20 py-10 px-10",
          "bg-slate-300 rounded-3xl xl:rounded-[5rem]",
          "dark:bg-black-200",
        )}
      >
        <div className="flex flex-col gap-4 xl:px-10">
          <h2 className={clsx(
            "font-semibold",
            "text-[32px] md:text-[40px]",
            "xl:text-7xl xl:max-w-[700px]",
            "dark:text-white",
            "text-black-100",
            "xl:leading-[76.8px]",
            "leading-[35px]",
            "w-full mb-4"
          )}>
            ¿Interesado en nuestros sevicios?
          </h2>
          <p
            className={clsx(
              "font-normal",
              "dark:text-white-200",
              "text-[18px]",
              "leading-[30.8px]",
              "text-black-100",
              "max-w-[600px] text-black-200"
            )}
          >
            Estamos comprometidos con brindar soluciones de grabado de patentes de alta calidad a diversos sectores del
            mercado.
          </p>
        </div>
        <div>
          <ButtonContact />
        </div>
      </div>
    </section>
  );
};

export default CTA;
