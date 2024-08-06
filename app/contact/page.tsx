"use client";
import MainLayout from "@/components/layout";
import { Footer } from "@/components/Footer";
import { FaPaperPlane } from "react-icons/fa6";
import clsx from "clsx";
import { motion } from "framer-motion";
export default function contact() {
  return (
    <MainLayout>
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        id="contact"
        className=" w-full h-screen  flex flex-col justify-center items-center"
      >
        <h1 className="text-black text-2xl text-center">Contactanos</h1>
        <p className="text-slate-700 text-center">
          Por favor contactanos directamente{" "}
          <a className="underline cursor-pointer" href="mailto:">
            contacto@enregla.net
          </a>{" "}
          o atravez de este formulario
        </p>

        <form className="mt-10 flex flex-col w-1/2 text-black">
          <input className="h-14 rounded-lg w-full border border-black/10 pl-2" placeholder="Nombre" type="email" />
          <textarea placeholder="Escribe tu mensaje" className="h-52 w-full my-3 p-2"></textarea>
          <button
            className={clsx(
              "group",
              "text-white flex gap-2",
              "h-[3rem] w-[8rem]",
              "bg-gray-900 items-center",
              "justify-center",
              "transition-all",
              "rounded-full",
              "hover:scale-110 active:scale-105",
              "hover:bg-gray-950",
              "focus:scale-110"
            )}
          >
            Submit{" "}
            <FaPaperPlane
              className={clsx(
                "text-xs",
                "opacity-70 transition-all",
                "group-hover:translate-x-1",
                "group-hover:-translate-y-1"
              )}
            />{" "}
          </button>
        </form>
      </motion.section>

      <Footer />
    </MainLayout>
  );
}
