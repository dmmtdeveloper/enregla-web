import Image from "next/image";
import React from "react";
import appImage from "@/public/assets/img/app.png";

export const AppSection = () => {
  return (
    <section className="flex items-center justify-center flex-col px-8 gap-5">
      <h2 className="text-3xl dark:text-white text-gray-900">
        "Reformulando el proceso de grabado de patentes en vehículos"
      </h2>
      <div className="flex flex-col gap-2">
        <p>App móvil</p>
        <p>Control de grabados en tiempo real a través de nuestra plataforma tecnológica.</p>
      </div>
      <div className="bg-slate-200 w-full items-center justify-center flex rounded-[50px] py-8 mt-10">
        <Image src={appImage} alt="" width={256} height={455} priority />
      </div>
    </section>
  );
};
