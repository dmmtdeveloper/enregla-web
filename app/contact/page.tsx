"use client";
import clsx from "clsx";
import MainLayout from "@/components/layout";
import { Footer } from "@/components/Footer";
import { FaPaperPlane } from "react-icons/fa6";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

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
        <h1 className="text-black dark:text-white text-2xl text-center">Contactanos</h1>
        <p className="text-slate-700 dark:text-slate-400 text-center">
          Por favor contactanos directamente{" "}
          <a className="underline cursor-pointer" href="mailto:">
            contacto@enregla.net
          </a>{" "}
          o atravez de este formulario
        </p>

        <form
          className="mt-10 flex gap-2 flex-col xl:px-0 px-8 w-full xl:w-1/2 text-black"
          action={async (FormData) => {
            await sendEmail(FormData);
          }}
        >
          <input
            className="h-14 rounded-lg w-full border border-black/10 p-4"
            name="senderName"
            placeholder="Nombre"
            required
            maxLength={500}
            type="text"
          />
          <input
            className="h-14 rounded-lg w-full border border-black/10 p-4"
            name="senderEmail"
            placeholder="Email"
            required
            maxLength={500}
            type="email"
          />
          <textarea
            placeholder="Escribe tu mensaje"
            name="message"
            maxLength={500}
            required
            className="h-52 w-full mb-4 p-4"
          ></textarea>
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
