import "./globals.css";
import { Sora } from "next/font/google";
import type { Metadata } from "next";
import Providers from "./providers";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";


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
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <body suppressHydrationWarning={true} className={`${sora.className}`}>
            <Providers>{children}</Providers>
          </body>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </html>
  );
}
