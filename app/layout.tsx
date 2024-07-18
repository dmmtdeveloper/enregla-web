import "./globals.css";
import { Sora } from "next/font/google";
import type { Metadata } from "next";
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
      <body suppressHydrationWarning={true} className={`${sora.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
