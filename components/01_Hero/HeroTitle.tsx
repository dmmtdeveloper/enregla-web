import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import clsx from "clsx";

export const HeroTitle = () => {
  return (
    <TextGenerateEffect
      className={clsx(
        "text-center",
        "text-5xl",
        "max-w-[300px]",

        // md
        "md:text-4xl",

        // lg
        "lg:max-w-[700px]",
        "lg:text-6xl",

        // xl
        "xl:text-5xl",
        "xl:max-w-[900px]",

        // 2xl
        "2xl:text-7xl"
      )}
      words="Solución integral en Seguridad Automotriz"
    />
  );
};
