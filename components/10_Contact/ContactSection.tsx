"use client"
import { motion } from "framer-motion";
import { SubmitBtn } from "@/components/ui/buttons/Submit-btn";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const initValues: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const initState = { values: initValues, isLoading: false };

const ContactSection = () => {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    await sendContactForm(values);
    console.log(values);

    setState((prev) => ({
      ...prev,
      isLoading: false,
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
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

      <form className="mt-10 flex gap-2 flex-col xl:px-0 px-8 w-full xl:w-1/2 text-black">
        <input
          className="h-14 rounded-lg bg-[#ffff] w-full border border-black/10 p-4"
          name="name"
          type="text"
          placeholder="Nombre"
          required
          maxLength={30}
          value={values.name}
          onChange={handleChange}
        />

        <input
          className="h-14 rounded-lg bg-[#ffff] w-full border border-black/10 p-4"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
          maxLength={500}
          value={values.email}
          onChange={handleChange}
        />
        <textarea
          className="h-52 w-full bg-[#ffff] mb-4 p-4 rounded-lg"
          name="message"
          placeholder="Escribe tu mensaje"
          maxLength={5000}
          required
          value={values.message}
          onChange={handleChange}
        ></textarea>

        <SubmitBtn onClick={onSubmit} />
      </form>
    </motion.section>
  );
};

export default ContactSection;
