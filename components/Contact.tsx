"use client";
"react-dom";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { SubmitBtn } from "@/components/buttons/Submit-btn";
import { toast } from "react-toastify";

const Contact = () => {
  return (
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
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-black dark:text-white text-4xl lg:5xl xl:text-6xl text-center font-semibold mb-4">
        Contáctanos
      </h1>
      <p className="text-slate-700 dark:text-slate-400  px-10  xl:text-center">
        Por favor contactanos directamente{" "}
        <a className="underline cursor-pointer" href="mailto:">
          contacto@enregla.net
        </a>{" "}
        o atravez de este formulario
      </p>

      <form
        className="mt-10 flex gap-2 flex-col xl:px-0 px-8 w-full xl:w-1/2 text-black"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Correo enviado!");
        }}
      >
        <input
          className="h-14 rounded-lg bg-[#ffff] w-full border border-black/10 p-4"
          name="senderName"
          placeholder="Nombre"
          required
          maxLength={30}
          type="text"
        />

        <input
          className="h-14 rounded-lg bg-[#ffff] w-full border border-black/10 p-4"
          name="senderEmail"
          placeholder="Correo electrónico"
          required
          maxLength={500}
          type="email"
        />
        <textarea
          className="h-52 w-full bg-[#ffff] mb-4 p-4 rounded-lg"
          placeholder="Escribe tu mensaje"
          name="message"
          maxLength={5000}
          required
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
