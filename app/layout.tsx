import "./globals.css";
import clsx from "clsx";
import { Sora } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import React, { StrictMode } from "react";
import ThemeContextProvider from "@/context/theme-context";

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
      <body
        className={`${sora.className} text-gray-950 relative h-[1000px] bg-slate-300 dark:bg-[#0E0C15] pt-36`}
      >
        <div
          className={clsx(
            // "bg-[#7ADB78]",
            // " absolute top-[-6rem]",
            // "-z-10 right-[11rem]",
            // "h-[31.25rem] w-[31.25rem]",
            // "rounded-full blur-[10rem] sm:w-[68.75rem]",
            "dark:bg-[#0E0C15]"
          )}
        ></div>

        <div
          className={clsx(
            "absolute top-[-1rem] -z-10",
            "left-[-35rem] h-[31.25rem] w-[50rem]",
            "rounded-full blur-[10rem] sm:w-[68.75rem]",
            "md:left-[-33rem] lg-left-[-28rem] xl-left-[-15rem] 2xl:left-[]",
            "dark:bg-[#0E0C15]"
          )}
        ></div>
        <ThemeContextProvider>
          <Navbar />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
