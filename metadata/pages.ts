import { Metadata } from "next";

export const pagesMetadataList: Array<Metadata & { route: string }> = [
  {
    route: "/aplicacion",
    title: "Conoce nuestra aplicacion",
    description: "Aqui se dara a conocer la aplicación de enregla",
  },
  {
    route: "/FAQ",
    title: "Preguntas frecuentes",
    description: "Aqui se encontraran las preguntas frecuentes de los usuarios",
  },
  {
    route: "/us",
    title: "Acerca de",
    description: "Aqui se encontrara la mision y vision de la empresa",
  },
];




export const defaultMetadata: Metadata = {
  title:
    "soluciones integrales en seguridad automotriz grabado de patentes",
  description:
    "Compromiso en otorgar soluciones integrales que protejan a nuestros clientes y sus vehículos.",
  keywords: ["enregla", "seguridad", "automotriz", "integrales", "vehiculos", "soluciones", "grabado", "patentes"],
};
