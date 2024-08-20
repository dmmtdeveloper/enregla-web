import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { AcordionFaqProps } from "@/lib/types"; // Ajusta el path según tu estructura de proyecto
import clsx from "clsx";

export const AcordionFaq: React.FC<AcordionFaqProps> = ({
  titulo,
  titulo2,
  description,
  descripcion2,
  descripcion3,
  descripcion4,
  descripcion5,
  descripcion6,
  vehicles,
}) => {
  const [open, setOpen] = useState(false);

  const handleFaq = () => {
    setOpen(!open);
  };

  return (
    <section
      onClick={handleFaq}
      className={clsx(
        "w-full lg:w-3/4 lg:mx-auto xl:w-1/2 xl:mx-auto",
        "shadow-sm transition-all duration-300",
        "rounded-2xl",
        "mb-4",
        "border",
        "bg-white",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]"
      )}
    >
      <div className="flex justify-between items-center h-16 px-4 2xl:px-10">
        <p className="text-black text-left font-semibold text-[14px] xl:text-[18px] dark:text-white">{titulo}</p>
        <div className="cursor-pointer ">
          {open ? (
            <GoChevronUp className="h-[30px] w-[30px] text-black-100 dark:text-white" />
          ) : (
            <GoChevronDown className="h-[30px] w-[30px] text-black-100 dark:text-white" />
          )}
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="pl-10 pb-4 pr-5 flex flex-col gap-4">
          <p className="text-black text-left max-w-[800px] dark:text-slate-300">{description}</p>
          {descripcion2 && (
            <div className="">
              <p className="text-black font font-semibold text-left max-w-[800px] mb-5 dark:text-white">{titulo2}</p>
              {descripcion2.titulo && (
                <p className="text-black text-left font-semibold dark:text-white">{descripcion2.titulo}</p>
              )}
              {descripcion2.texto && (
                <p className="text-slate-500 dark:text-slate-300 text-left mt-1">{descripcion2.texto}</p>
              )}
            </div>
          )}
          {descripcion3 && (
            <div className="mt-2">
              {descripcion3.titulo && (
                <p className="text-black text-left font-semibold dark:text-white">{descripcion3.titulo}</p>
              )}
              {descripcion3.texto && (
                <p className="text-slate-500 dark:text-slate-300 text-left mt-1">{descripcion3.texto}</p>
              )}
            </div>
          )}
          {descripcion4 && (
            <div className="mt-2 bg-slate-200 p-5 rounded-2xl">
              {descripcion4.titulo && <p className="text-left font-semibold  text-black">{descripcion4.titulo}</p>}
              {descripcion4.texto && <p className="text-red-600 text-left mt-1">{descripcion4.texto}</p>}
              {descripcion4.texto2 && <p className="text-red-600 text-left mt-1">{descripcion4.texto2}</p>}
            </div>
          )}
          {descripcion5 && (
            <div className="mt-2">
              {descripcion5.titulo && (
                <p className="text-black text-left font-semibold dark:text-white">{descripcion5.titulo}</p>
              )}
              {descripcion5.texto && (
                <p className="text-slate-500 dark:text-slate-300 text-left mt-1">{descripcion5.texto}</p>
              )}
            </div>
          )}
          {descripcion6 && (
            <div className="mt-2">
              {descripcion6.titulo && (
                <p className="text-black text-left font-semibold dark:text-white">{descripcion6.titulo}</p>
              )}
              {descripcion6.texto && (
                <p className="text-slate-500 dark:text-slate-300 text-left mt-1 ">{descripcion6.texto}</p>
              )}
            </div>
          )}
          {vehicles && (
            <div className="mt-2">
              <p className="text-black text-left font-semibold dark:text-white">Vehículos aplicables:</p>
              <ul className="text-slate-500 text-left mt-1 dark:text-slate-300">
                {vehicles.map((vehicle, index) => (
                  <li key={index}>{vehicle}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
