import React from "react";
import { Subtitles } from "./Subtitles/Subtitles";
import Image from "next/image";
import responsability from "@/public/assets/img/responsability.png";

export const ResponsabilitySection = () => {
  return (
    <section className="pt-24 flex flex-col  gap-10 px-8">
      <article className="flex flex-col gap-5">
        <Subtitles direction="left" title="Responsabilidad de las automotoras" />
        <div className="flex flex-col  justify-center">
          <p className="font-semibold dark:text-gray-50 text-gray-900">
            ¿Qué vidrios de los vehículos deben ser grabados?
          </p>
          <p className="dark:text-[#837F96] text-gray-900">Vidrios laterales y espejos laterales</p>
        </div>
      </article>
      <div className="flex items-center justify-center">
        <Image
          className="w-[400px] h-auto md:w-[800px]"
          src={responsability}
          alt="responsability"
          width={256}
          height={77}
          priority
        />
      </div>
    </section>
  );
};
