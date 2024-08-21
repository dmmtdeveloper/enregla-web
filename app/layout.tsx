import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enregla, grabado de patentes",
  description: "Grabado de patentes de vehículos",
  keywords: "grabado de patentes, protección vehicular, espejos, vidrios, seguridad automotriz",
  authors: [{ name: "Enregla", url: "https://www.enregla.cl" }],
  openGraph: {
    title: "Solución definitiva para el grabado de patentes",
    description: "Grabado de patentes de vehículos",
    // images: [
    //   {
    //     url: "public/assets/img/logo-blanco.png",
    //     alt: "logotipo enregla",
    //   },
    // ],
    url: "https://www.enregla.cl/inicio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body suppressHydrationWarning className={sora.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
