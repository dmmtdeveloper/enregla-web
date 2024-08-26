import clsx from "clsx";
import React from "react";

export const ParagraphHero = () => {
  return (
    <>
      <p
        className={clsx(
          "2xl:text-left",
          "text-center",
          "md:tracking-wide",
          "mb-8 text-sm",
          "md:text-lg",
          "lg:text-[16px] lg:text-left lg:max-w-[500px]",
          "xl:text-[16px]",
          "text-black-100",
          "xl:max-w-[500px]",

          //dark mode
          "dark:text-white-200"
        )}
      >
        Compromiso en otorgar soluciones integrales que protejan a nuestros clientes y sus
        vehículos.
      </p>
    </>
  );
};
