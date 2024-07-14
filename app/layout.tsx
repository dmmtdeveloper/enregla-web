import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import clsx from "clsx";
import Providers from "./providers";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "enregla webSite",
  description: "Solucion definitiva para tu grabado de patentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
