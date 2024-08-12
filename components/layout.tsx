// import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { ToastContainer } from "react-toastify";
import { FooterSection } from "@/components/11_Footer/FooterSection";
import { NavSection } from "./00_Nav/NavSection";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative dark:bg-black-100 bg-[#EDF1F3] overflow-hidden ">
        <ThemeContextProvider>
          {/* <ActiveSectionContextProvider> */}
          <NavSection />
          {children}
          <ToastContainer position="bottom-center" />
          <FooterSection />
          {/* </ActiveSectionContextProvider> */}
        </ThemeContextProvider>
      </main>
    </>
  );
}
