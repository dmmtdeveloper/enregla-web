import React from "react";
import { BenefitsPragraps } from "./Benefits/BenefitsPragraps";
import { AiOutlineStop } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi2";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { Subtitles } from "./Subtitles/Subtitles";
import { AiFillSecurityScan } from "react-icons/ai";

export const BenefitsSection = () => {
  return (
    <section className="flex flex-col items-center p-10 mt-10">
      <h2 className="text-center font-bold dark:text-gray-50 text-gray-900 text-3xl">
        Beneficios de grabar tu patente
      </h2>

      <article className="flex flex-col justify-center items-center pt-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <AiOutlineStop className="text-[#FF776F] text-4xl" />
            <Subtitles title="Disuasión contra el robo y la clonación" />
          </div>

          <BenefitsPragraps paragraph="Los ladrones y clonadores son menos propensos a atacar un automóvil con una patente grabada en vidrios y espejos, lo que contribuye a reducir el robo de vehículos." />
        </div>
      </article>

      <article className="flex flex-col justify-center items-center pt-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <HiIdentification className="text-[#7ADB78] text-4xl" />
            <Subtitles title="Facilita identificación y recuperación" />
          </div>

          <BenefitsPragraps paragraph="En caso de robo o accidente, el grabado permite una rápida identificación del vehículo. Las autoridades y los propietarios pueden verificar la autenticidad y tomar medidas adecuadas." />
        </div>
      </article>

      <article className="flex flex-col justify-center items-center pt-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <RiPoliceBadgeFill className="text-[#FFC876] text-4xl" />
            <Subtitles title="Cumplimiento legal y evita multas" />
          </div>

          <BenefitsPragraps paragraph="Al grabar la patente según las especificaciones legales, los propietarios cumplen con la Ley de Tránsito. Evitar el incumplimiento es crucial para evitar multas y sanciones." />
        </div>
      </article>

      <article className="flex flex-col justify-center items-center pt-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
          <AiFillSecurityScan className="text-[#AC6AFF] text-4xl"/>
            <Subtitles title="Contribuye a la seguridad vial" />
          </div>

          <BenefitsPragraps paragraph="La medida de grabado mejora la seguridad vehicular en Chile. Al dificultar el robo y la clonación, se crea un entorno más seguro para todos los conductores y sus vehículos." />
        </div>
      </article>
    </section>
  );
};
