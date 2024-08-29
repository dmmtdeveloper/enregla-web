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
    route: "/grabado-de-patentes-para-concesionarios",
    title: "Servicios de Grabado de Patentes para Concesionarios | ley 21.601 | Graba tu patente",
    description:
      "Ofrezca servicio de grabado de patentes para concesionarios con Enregla. Cumpla la ley 21.601, aumente sus ingresos y mejore la seguridad vehicular. ¡Conozca nuestras soluciones!",
    keywords: "concesionarios, servicio de grabado, ley 21.601, aumente sus ingresos, mejore la seguridad vehicular, soluciones",
    authors: [{ name: "Enregla", url: "https://www.enreglaintegral.cl/grabado-de-patentes-para-concesionarios" }],
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
    images: "https://www.enreglaintegral.cl/assets/images/brand.png",
    locale: "es_ES",
    type: "website",
  },
};
