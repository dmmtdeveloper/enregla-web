import { Metadata } from "next";

export const pagesMetadataList: Array<Metadata & { route: string }> = [
  {
    route: "/faq-grabado-patentes",
    title: "FAQ Grabado Patentes | Dudas Comunes Enregla | Preguntas Ley 21.601 | Graba tu patente",
    description:
      "Resolvemos sus dudas sobre el grabado de patentes. FAQ grabado patentes Enregla, cumplimiento de la Ley 21.601 y seguridad vehicular. Encuentre respuestas aquí.",
    keywords: "FAQ grabado patentes, Dudas comunes Enregla, Preguntas ley 21.601",
    authors: [{ name: "Enregla", url: "https://www.enreglaintegral.cl/FAQ" }],
  },

  {
    route: "/aplicacion",
    title: "enregla app",
    description:
      "Aplicación que registra los grabados en tiempo real, facilita la lectura automática de patente y VIN sin necesidad de tipeo, asegurando un proceso de grabado sin errores.",

    keywords: "lectura automática, grabado sin errores, patente, VIN, app, aplicación",
    authors: [{ name: "Enregla", url: "https://www.enreglaintegral.cl/aplicacion" }],
  },

  {
    route: "/nosotros",
    title: "Quienes-somos",
    description: "Conoce quiénes somos",
    keywords: "servicios integrales, protección vehicular, espejos, vidrios, seguridad automotriz",
    authors: [{ name: "Enregla", url: "https://www.enreglaintegral.cl/nosotros" }],
  },
];

export const defaultMetadata: Metadata = {
  title:
    "Enregla - Líderes en Grabado de Patentes | Seguridad Vehicular  | Ley 21.601 | Graba tu patente",
  description:
    "Enregla, somos expertos en el grabado de patentes en Chile. Cumple con la ley 21.601 y protege tu vehículo con nuestra tecnología de punta. ¡Contáctanos hoy!",
  icons: {
    icon: "/app/favicon.ico",
  },
  keywords: "grabado de patentes, protección vehicular, espejos, vidrios, seguridad automotriz",
  authors: [{ name: "Enregla", url: "https://www.enreglaintegral.cl" }],
  openGraph: {
    title:
      "Enregla - Líderes en Grabado de Patentes | Seguridad Vehicular  | Ley 21.601 | Graba tu patente",
    description:
      "Enregla, somos expertos en el grabado de patentes en Chile. Cumple con la ley 21.601 y protege tu vehículo con nuestra tecnología de punta. ¡Contáctanos hoy!",
    url: "https://www.enreglaintegral.cl",
    siteName: "enregla",
    images: "assets/images/brand.png",
    locale: "es_ES",
    type: "website",
  },
};
