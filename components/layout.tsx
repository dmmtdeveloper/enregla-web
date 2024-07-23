import clsx from "clsx";
import { Navbar } from "./Navbar";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-[#ECEFF1] relative pt-48 dark:bg-[#0E0C15] h-[9999px]">
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
