
import CTA from "@/components/CTA";
import MainLayout from "@/components/layout";
import { LawSection } from "@/components/LawSection";
import { HeroSection } from "@/components/HeroSection";
import { OurServices } from "@/components/OurServices";
import { StatsSection } from "@/components/StatsSectionContainer";
import { ClientSection } from "@/components/ClientSection";
import { BenefitsSection } from "@/components/BenefitsSection";
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
      <MarqueSection/>
      <ClientSection />
      <StatsSection />
      <CTA />
    </MainLayout>
  );
}
