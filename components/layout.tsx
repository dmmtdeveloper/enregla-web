import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Nav } from "./Nav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative dark:bg-black-100 bg-blue-50 overflow-hidden">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Nav />
            {children}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </main>
    </>
  );
}
