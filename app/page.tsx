import { Footer } from "@/components/Footer";
import { LawSection } from "@/components/LawSection";
import { HeroSection } from "@/components/HeroSection";
import { OurServices } from "@/components/OurServices";
import { StatsSection} from "@/components/StatsSectionContainer";
import { LampSection } from "@/components/LampSection";
import { ClientSection } from "@/components/ClientSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import CTA from "@/components/CTA";
import MainLayout from "@/components/layout";
import { TestimonialScroll } from "@/components/TestimonialSectionScroll";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <LampSection/>
      <BenefitsSection />
      <OurServices/>
      <StatsSection />
      <LawSection />
      <ClientSection />
      <TestimonialScroll/>
      <CTA/>
      <Footer/>
    </MainLayout>
  );
}
