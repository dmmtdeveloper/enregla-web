import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import clsx from "clsx";

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
      <body className={`${sora.className} bg-gray-50 text-gray-950 relative`}>
        <div
          className={clsx(
            "bg-[#7ADB78]",
            " absolute top-[-6rem]",
            "-z-10 right-[11rem]",
            "h-[31.25rem] w-[31.25rem]",
            "rounded-full blur-[10rem] sm:w-[68.75rem]"
          )}
        ></div>

        <div
          className={clsx(
            "bg-[#dbd7fb]",
            "absolute top-[-1rem] -z-10",
            "left-[-35rem] h-[31.25rem] w-[50rem]",
            "rounded-full blur-[10rem] sm:w-[68.75rem]",
            "md:left-[-33rem] lg-left-[-28rem] xl-left-[-15rem] 2xl:left-[]"
          )}
        ></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
