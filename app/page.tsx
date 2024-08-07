import { Footer } from "@/components/Footer";
import { LawSection } from "@/components/LawSection";
import { HeroSection } from "@/components/HeroSection";
import { OurServices } from "@/components/OurServices";
import { StatsSection } from "@/components/StatsSectionContainer";
import { ClientSection } from "@/components/ClientSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import MainLayout from "@/components/layout";
import CTA from "@/components/CTA";
import { MarqueSection } from "@/components/MarqueSection";
import { LampSection } from "@/components/LampSection";


export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <LampSection/>
      <BenefitsSection />
      <OurServices />
      <LawSection />
      {/* <AnimatedBeams /> */}
      <MarqueSection/>
      <ClientSection />
      <StatsSection />
      <CTA />
    </MainLayout>
  );
}
