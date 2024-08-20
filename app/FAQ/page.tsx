import React from "react";
import MainLayout from "@/components/layout";
import { Metadata } from "next";
import { FAQuestions } from "@/components/13_FAQuestions/FAQuestions";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Conoce las preguntas frecuentes de los usuarios de enregla",
  keywords: "servicios integrales, protección vehicular, espejos, vidrios, seguridad automotriz",
  authors: [{ name: "Enregla", url: "https://www.enregla.cl" }],
};

const FAQPage: React.FC = () => {
  return (
    <MainLayout>
      <FAQuestions />
    </MainLayout>
  );
};

export default FAQPage;
