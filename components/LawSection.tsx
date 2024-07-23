import React from "react";
import { Subtitles } from "./Subtitles/Subtitles";
import { FaCheck } from "react-icons/fa6";
import { LawComponent } from "./Law/LawComponent";

export const LawSection = () => {
  return (
    <section className="px-4 pt-20">
      <Subtitles direction="left" title="Conozcamos esta nueva ley 21.601" />

      <div className="flex flex-col gap-4">
        <LawComponent title="¿Qué busca esta nueva normativa?" paragaph="Busca prevenir la venta de vehículos robados y la venta de espejos retrovisores entre otros elementos de los vehículos venidos desde el mercado no autorizado. " />
        <LawComponent title="" paragaph="" />
        <LawComponent title="" paragaph="" />
        <LawComponent title="" paragaph="" />
      </div>
    </section>
  );
};
