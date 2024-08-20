import { Nosotros } from "@/components/12_us/Nosotros";
import MainLayout from "@/components/layout";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Quienes-somos",
  description: "Conoce quiénes somos",
  keywords: "servicios integrales, protección vehicular, espejos, vidrios, seguridad automotriz",
  authors: [{ name: "Enregla", url: "https://www.enregla.cl" }],
};

const UsPage = () => {
  return (
    <MainLayout>
      <Nosotros />
    </MainLayout>
  );
};

export default UsPage;
