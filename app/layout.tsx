import "./globals.css";
import clsx from "clsx";
import { Sora } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
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
      <body
        suppressHydrationWarning={true}
        className={`${sora.className} bg-[#EDF1F3] relative px-4 pt-48 dark:bg-[#0E0C15] h-[9999px]`}
      >
        <div
          className={clsx(
            "absolute top-[50rem] items-center flex flex-col",
            "-z-10 right-[12rem] h-[31.25rem] w-[31.25rem]",
            "rounded-full blur-[10rem] w-[68.75rem]" ,

            "dark:bg-[#0E0C15]"
          )}
        ></div>

        <div
          className={clsx(
            "bg-[#7ADB78] items-center flex justify-center",
            "absolute top-[25rem]",
            "-z-10 left-[-35rem]",
            "h-[30rem] w-[50rem]",
            "rounded-full blur-[10rem]",
            
            "dark:bg-[#AC6AFF]"
          )}
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
