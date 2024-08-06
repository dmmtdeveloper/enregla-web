import { Footer } from "@/components/Footer";
import { LawSection } from "@/components/LawSection";
import { HeroSection } from "@/components/HeroSection";
import { OurServices } from "@/components/OurServices";
import { StatsSection } from "@/components/StatsSectionContainer";
import { ClientSection } from "@/components/ClientSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialScroll } from "@/components/TestimonialSectionScroll";
import MainLayout from "@/components/layout";
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      {/* <RippleSection /> */}
      <BenefitsSection />
      <OurServices />
      <LawSection />
      {/* <AnimatedBeams /> */}
      <TestimonialScroll />
      <ClientSection />
      <StatsSection />
      <CTA />
      <Footer />
    </MainLayout>
  );
}
