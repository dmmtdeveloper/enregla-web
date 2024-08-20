import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enregla",
  description: "Solución definitiva para el grabado de patentes en espejos y vidrios, protegiendo tu vehículo de manera integral.",
  keywords: "grabado de patentes, protección vehicular, espejos, vidrios, seguridad automotriz",
  authors: [{ name: "Enregla", url: "https://www.enregla.cl" }],
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
