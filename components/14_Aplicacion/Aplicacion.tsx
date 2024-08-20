"use client"
import React from 'react'
import app from "@/public/assets/img/app.png";
import post from "@/public/assets/img/post.png";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };
  
export const Aplicacion = () => {
  return (
    <motion.section
        {...fadeIn}
        id="aplicacion"
        className="flex flex-col md:flex-row justify-center items-center min-h-screen px-8 py-12 md:py-52"
      >
        <motion.div {...fadeIn} className="flex flex-col gap-8 md:gap-16 mt-16 md:mt-0">
          <motion.article {...fadeIn} className="flex items-center justify-center mb-20">
            <h2
              className={clsx(
                "font-semibold",
                "text-[28px] md:text-[38px] xl:text-6xl",
                "xl:max-w-[800px]",
                "dark:text-white",
                "text-black-100",
                "leading-[40px] md:leading-[50px] xl:leading-[70px]",
                "w-full text-center"
              )}
            >
              "Reformulando el proceso de <span className="text-green">grabado de patentes</span> en vehículos"
            </h2>
          </motion.article>
          <motion.article {...fadeIn} className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div {...fadeIn}>
              <Image className="w-[400px] h-auto " width={400} height={400} alt="app" priority={true} src={app} />
            </motion.div>
            <div>
              <h2
                className={clsx(
                  "font-semibold",
                  "text-[28px] md:text-[38px] xl:text-6xl",
                  "xl:max-w-[500px]",
                  "dark:text-white",
                  "text-black-100",
                  "leading-[40px] md:leading-[50px] xl:leading-[70px]",
                  "w-full xl:text-left text-center"
                )}
              >
                Nuestra solución cuenta con una <span className="text-green">APP</span>
              </h2>
              <p className={clsx("max-w-[700px]", "dark:text-white", "text-black-100 xl:text-left text-center")}>
                Aplicación que registra los grabados en tiempo real, facilita la lectura automática de patente y VIN sin
                necesidad de tipeo, asegurando un proceso de grabado sin errores.
              </p>
            </div>
          </motion.article>
          <motion.article {...fadeIn} className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center order-2 md:order-1">
              <h2
                className={clsx(
                  "font-semibold",
                  "text-[28px] md:text-[38px] xl:text-6xl",
                  "xl:max-w-[800px]",
                  "dark:text-white",
                  "text-black-100",
                  "leading-[40px] md:leading-[50px] xl:leading-[70px]",
                  "w-full text-center"
                )}
              >
                Máquina <span className="text-green">POST</span>
              </h2>
            </div>
            <motion.div {...fadeIn} className="flex flex-col items-center order-1 md:order-2">
              <Image className="w-[400px] h-auto" width={345} height={370} alt="post" priority={true} src={post} />
            </motion.div>
          </motion.article>
        </motion.div>
      </motion.section>
  )
}
