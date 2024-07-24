"use client";
import React from "react";
import { Subtitles } from "./Subtitles/Subtitles";
import { LawComponent } from "./Law/LawComponent";
import { ButtonCtaHero } from "./buttons/CtaHero";
import { AvoidFines } from "./Law/AvoidFines";

export const LawSection = () => {
  return (
    <section className=" flex flex-col px-8 pt-36 gap-10">
      <div>
        <Subtitles direction="left" title="Conozcamos esta nueva ley 21.601" />

        <div className="flex flex-col gap-4 pt-10">
          <LawComponent
            title="¿Qué busca esta nueva normativa?"
            paragaph="Busca prevenir la venta de vehículos robados y la venta de espejos retrovisores entre otros elementos de los vehículos venidos desde el mercado no autorizado."
          />

          <LawComponent
            title="¿Desde cuando rige esta ley?"
            paragaph="La ley empiezo a regir el 25 de septiembre del año 2023"
          />

          <LawComponent
            title="¿Quién debe grabar la patente de su vehículo ?"
            paragaph="En septiembre del 2023 el Gobierno promulgó la ley 21.601 que modificó la Ley de Tránsito y que obliga a los dueños de vehículos a grabar sus patentes en ventanas y espejos retrovisores de sus autos."
          />
        </div>
      </div>

      <ButtonCtaHero title="Conoce más" />
      <AvoidFines />
    </section>
  );
};
