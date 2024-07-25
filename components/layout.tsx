import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Nav } from "./Nav";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-[#ECEFF1] relative dark:bg-[#0E0C15]">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Nav/>
            {children}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </main>
    </>
  );
}
