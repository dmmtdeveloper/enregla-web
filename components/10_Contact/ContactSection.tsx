"use client";
import { motion } from "framer-motion";
import { SubmitBtn } from "@/components/ui/buttons/Submit-btn";
import { useForm } from "@/hooks/useHandleSubmit";
import { useSectionInView } from "@/hooks/useSectionInView";

const ContactSection = () => {
  const { formRef, handleSubmit } = useForm();
  const { ref } = useSectionInView("Contacto", 0.5);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contacto"
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-black dark:text-white text-4xl lg:5xl xl:text-6xl text-center font-semibold mb-4">
        Contáctanos
      </h1>
      <p className="text-slate-700 dark:text-slate-400 px-10 xl:text-center">
        Por favor contáctanos directamente{" "}
        <a className="underline cursor-pointer" href="mailto:contacto@enregla.net">
          contacto@enregla.net
        </a>{" "}
        o a través de este formulario
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 flex gap-2 flex-col xl:px-0 px-8 w-full lg:w-3/4 xl:w-1/2 text-black"
      >
        <input type="hidden" name="subject" value="Nuevo mensaje desde enregla.cl" />
        <input
          className="h-14 rounded-lg bg-[#ffff] w-full border border-black/10 p-4"
          name="name"
          type="text"
          placeholder="Nombre"
          required
          maxLength={30}
          autoComplete="true"
        />

        <input
          className="h-14 rounded-lg bg-[#ffff]  border border-black/10 p-4"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
          maxLength={500}
          autoComplete="true"
        />
        <textarea
          className="h-52 w-full bg-[#ffff] mb-4 p-4 rounded-lg"
          name="message"
          placeholder="Escribe tu mensaje"
          maxLength={5000}
          required
        ></textarea>

        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default ContactSection;
