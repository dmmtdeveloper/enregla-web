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
        className={`${sora.className} bg-gray-50 text-gray-950 relative pt-40 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 h-[5000px]`}
      >
        <div
          className={clsx(
            "bg-[#dbd7fb] absolute top-[20rem]",
            "-z-10 right-[12rem] h-[31.25rem] w-[31.25rem]",
            "rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#AC6AFF]"
          )}
        >

        </div>

        <div
          className={clsx(
            "bg-[#7ADB78] items-center flex justify-center",
            "absolute top-[25rem]",
            "-z-10 left-[-35rem]",
            "h-[30rem] w-[50rem]",
            "rounded-full blur-[10rem]",
            "sm:w-[68.75rem] md:left-[-33rem]",
            "lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]",
            
            "dark:bg-[#676394]"
          )}
        >

        </div>
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
