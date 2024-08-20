import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Sora } from "next/font/google";
import { generateMetadata as generateMetadataCustom } from "@/metadata";

// Configuración de la fuente Sora con soporte para el subset "latin"
const sora = Sora({ subsets: ["latin"] });

// Generación de la metadata utilizando una función personalizada
export const generateMetadata = (): Metadata => generateMetadataCustom();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body suppressHydrationWarning className={sora.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
