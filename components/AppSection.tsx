"use client";
import React from "react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import Image from "next/image";
import app from "@/public/assets/img/app.png";
import postImageenregla from "@/public/assets/img/post.png";

export function AppSection() {
  return (
    <div id="App" className="flex flex-col overflow-hidden  bg-white dark:bg-black-100 pb-20">
      <ScrollAnimation
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Reformulando el proceso de grabado de patentes
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">Aplicación móvil</span>
            </h1>
          </>
        }
      >
        <div className="xl:flex">
          <Image
            src={postImageenregla}
            alt="hero"
            height={150}
            width={190}
            className="mx-auto rounded-2xl object-cover pt-10 "
            draggable={false}
          />
          <div className="hidden">
            <Image
              src={app}
              alt="hero"
              height={100}
              width={220}
              className="mx-auto rounded-2xl object-cover pt-10 "
              draggable={false}
            />
          </div>
        </div>
      </ScrollAnimation>

      <div className="flex gap-5 flex-col px-4">
        <article className="dark:bg-[#2B263D] bg-gray-200 w-full items-center justify-center flex flex-col py-10 gap-2 p-4 rounded-2xl">
          <div className="flex flex-col gap-2">
            <h2 className="dark:text-white text-black-100 text-2xl">
              Máquina <span className="text-[#7ADB78] font-semibold">POS</span> con app móvil
            </h2>
            <p className=" text-gray-400 ">
              Lectura automática de patente sin necesidad de tipeo, asegurando un proceso de grabado sin errores.
            </p>
          </div>
        </article>

        <article className="dark:bg-black-100 bg-gray-200 w-full items-center justify-center flex flex-col py-10 gap-2 p-4 rounded-2xl">
          <div className="flex flex-col gap-2">
            <p className="dark:text-white text-black-100 text-2xl ">
              Monitoreo de <span className="text-[#7ADB78] font-semibold">informes</span> en tiempo real
            </p>
            <p className="text-gray-400 ">
              Control de grabados en tiempo real a través de nuestra plataforma tecnológica.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
