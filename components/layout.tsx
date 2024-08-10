import ThemeContextProvider from "@/context/theme-context";
// import ActiveSectionContextProvider from "@/context/active-section-context";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ToastContainer } from "react-toastify";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative dark:bg-black-100 bg-[#EDF1F3] overflow-hidden ">
        <ThemeContextProvider>
          {/* <ActiveSectionContextProvider> */}
          <Nav />
          {children}
          <ToastContainer position="bottom-center" />
          <Footer />
          {/* </ActiveSectionContextProvider> */}
        </ThemeContextProvider>
      </main>
    </>
  );
}
