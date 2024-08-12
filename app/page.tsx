import MainLayout from "@/components/layout";
import { LawSection } from "@/components/LawSection";
import { HeroSection } from "@/components/HeroSection";
import { OurServices } from "@/components/OurServices";
import { StatsSection } from "@/components/StatsSectionContainer";
import { ClientSection } from "@/components/ClientSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { MarqueSection } from "@/components/MarqueSection";
import { OrbitingCirclesDemo } from "@/components/ui/OrbitingCirclesComponent";
import Contact from "@/components/Contact";
import { MaximumTerm } from "@/components/MaximumTerm";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <OrbitingCirclesDemo />
      <BenefitsSection />
      <OurServices />
      <MaximumTerm/>
      <LawSection />
      <MarqueSection />
      <ClientSection />
      <StatsSection />
      <Contact />
    </MainLayout>
  );
}
