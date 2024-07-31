// import Image from "next/image";
import React from "react";
// import multas from "@/public/assets/img/multas.png";
// import multasWhite from "@/public/assets/img/multasWhite.png";
import { Subtitles } from "../Subtitles/Subtitles";
export const AvoidFines = () => {
  return (
    <div className="flex pt-10 flex-col gap-5">
      <div className="flex flex-col gap-2 pb-16">
        <Subtitles direction="left" title="Evita multas y graba con nosotros" />
        <p className="dark:text-[#837F96] text-gray-900 md:pr-36">
          Quienes no realicen el grabado obligatorio según la nueva ley, arriesga una multa que va desde 1 a 1,5 UTM.
        </p>
      </div>

      {/* <div className="flex items-center justify-center">
        <Image
          className="w-96 h-auto hidden dark:block"
          src={multas}
          alt="enreglaDark"
          priority
          width={256}
          height={256}
        />
        <Image
          className="w-96 h-auto dark:hidden"
          src={multasWhite}
          alt="enreglaWhite"
          priority
          width={256}
          height={256}
        />
      </div> */}
    </div>
  );
};
