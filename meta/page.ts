import { Metadata } from "next";

export const pagesMetadataList: Array<Metadata & { route: string }> = [
  {
    route: "/faq-grabado-patentes",
    title: "FAQ Grabado Patentes | Dudas Comunes Enregla | Preguntas Ley 21.601 | Graba tu patente",
    description: "Resolvemos sus dudas sobre el grabado de patentes. FAQ grabado patentes Enregla, cumplimiento de la Ley 21.601 y seguridad vehicular. Encuentre respuestas aquí.",
    keywords: "FAQ grabado patentes, Dudas comunes Enregla, Preguntas ley 21.601",
    authors: [{ name: "Enregla", url: "https://www.enregla.cl/FAQ" }],

    openGraph: {
      title: 'Mi Título en OpenGraph',
      description: 'Descripción en OpenGraph',
      url: 'https://mi-sitio.com',
      siteName: 'Mi Sitio',
      images: [
        {
          url: '/public/images/imagen-og.png',
          width: 800,
          height: 600,
          alt: 'Imagen de ejemplo',
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
  },



  {
    route: "/aplicacion",
    title: "enregla app",
    description:
      "Aplicación que registra los grabados en tiempo real, facilita la lectura automática de patente y VIN sin necesidad de tipeo, asegurando un proceso de grabado sin errores.",

    keywords: "lectura automática, grabado sin errores, patente, VIN, app, aplicación",
    authors: [{ name: "Enregla", url: "https://www.enregla.cl/aplicacion" }],
  },

  {
    route: "/nosotros",
    title: "Quienes-somos",
    description: "Conoce quiénes somos",
    keywords: "servicios integrales, protección vehicular, espejos, vidrios, seguridad automotriz",
    authors: [{ name: "Enregla", url: "https://www.enregla.cl/nosotros" }],
  },
];




export const defaultMetadata: Metadata = {
  title: "Enregla, grabado de patents",
  description: "Grabado de patentes de vehículos",
  // icons: {
  //   icon: "/app/favicon.ico",
  // },
  keywords: "grabado de patentes, protección vehicular, espejos, vidrios, seguridad automotriz",
  authors: [{ name: "Enregla", url: "https://www.enregla.cl" }],
  openGraph: {
    title: "Solución definitiva para el grabado de patentes",
    description: "Grabado de patentes de vehículos",
    url: "https://www.enregla.cl/inicio",
    type: "website",
  },
};
