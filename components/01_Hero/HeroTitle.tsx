import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import clsx from "clsx";

export const HeroTitle = () => {
  return (
    <TextGenerateEffect
      className={clsx(
       " md:text-left text-[50px] max-w-[290px] lg:max-w-[500px] flex justify-center items-center text-center md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight 2xl:max-w-[32rem]"
      )}
      words="Grabado de patentes"
    />
  );
};
