import React from "react";
import { Subtitles } from "./Subtitles/Subtitles";
import Image from "next/image";
import responsability from "@/public/assets/img/responsability.png";

export const ResponsabilitySection = () => {
  return (
    <section className="pt-24 flex flex-col items-center justify-center gap-10">
      <article className="flex flex-col gap-5">
        <Subtitles direction="center" title="Responsabilidad de las automotoras" />
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold dark:text-gray-50 text-gray-900">
            ¿Qué vidrios de los vehículos deben ser grabados? 
          </p>
          <p className="dark:text-[#837F96] text-gray-900">Vidrios laterales y espejos laterales</p>
        </div>
      </article>

      <Image 
        className="w-[400px] h-auto" 
        src={responsability} 
        alt="responsability" 
        width={256} 
        height={77} 
        priority />
    </section>
  );
};
