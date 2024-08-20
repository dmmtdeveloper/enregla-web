import { Aplicacion } from "@/components/14_Aplicacion/Aplicacion";
import MainLayout from "@/components/layout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Conoce nuestra app",
  description:
    "Conoce nuestra aplicación enregla que registra los grabados en tiempo real, facilita la lectura automática de patente y VIN sin necesidad de tipeo, asegurando un proceso de grabado sin errores.",
  keywords: "lectura automática, grabado sin errores, patente, VIN, app, aplicación",
  authors: [{ name: "Enregla", url: "https://www.enregla.cl" }],
};

const aplicacion = () => {
  return (
    <MainLayout>
      <Aplicacion />
    </MainLayout>
  );
};

export default aplicacion;
