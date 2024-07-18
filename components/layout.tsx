import clsx from "clsx";
import { Navbar } from "./Navbar";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-[#EDF1F3] relative px-4 pt-48 dark:bg-[#0E0C15] h-[9999px]">
        <div
          className={clsx(
            "absolute top-[50rem] items-center flex flex-col",
            "-z-10 right-[12rem] h-[31.25rem] w-[31.25rem]",
            "rounded-full blur-[10rem] w-[68.75rem]",

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
      </main>
    </>
  );
}
