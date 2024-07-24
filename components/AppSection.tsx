import Image from "next/image";
import React from "react";
import informes from "@/public/assets/img/informes.jpg";
import postImageenregla from "@/public/assets/img/post.png";

export const AppSection = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-5 px-8 mt-20">
      <h2 className="text-3xl dark:text-white text-gray-900 font-semibold">
        Reformulando el proceso de grabado de patentes en vehículos
      </h2>

      <article className="dark:bg-[#2B263D] bg-gray-200 w-full items-center justify-center flex py-10 gap-2 p-4 rounded-2xl">
      <div className="flex flex-col gap-2">
        <p className="dark:text-white text-gray-900 text-3xl ">Máquina <span className="text-[#7ADB78] font-semibold">POS</span> con app móvil</p>
        <p className="text-gray-400 ">Lectura automática de patente sin necesidad de tipeo, asegurando un proceso de grabado sin errores.</p>
      </div>
        <Image className="w-48 h-auto" src={postImageenregla} alt="appenregla" width={256} height={455} priority />
      </article>


      <article className="dark:bg-[#2B263D] bg-gray-200 w-full items-center justify-center flex flex-col py-10 gap-2 p-4 rounded-2xl mb-28">
      <div className="flex flex-col gap-2">
        <p className="dark:text-white text-gray-900 text-3xl ">Monitoreo de <span className="text-[#7ADB78] font-semibold">informes</span>  en tiempo real</p>
        <p className="text-gray-400 ">Control de grabados en tiempo real a través de nuestra plataforma tecnológica.</p>
      </div>
        {/* <Image className="w-96 rounded-2xl h-auto" src={informes} alt="appenregla" width={256} height={171} priority /> */}
      </article>
    </section>
  );
};
