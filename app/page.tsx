
import { AppSection } from "@/components/AppSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CardSection } from "@/components/CardSection";
import { ClientSection } from "@/components/ClientSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { LawSection } from "@/components/LawSection";
import MainLayout from "@/components/layout";
import { ResponsabilitySection } from "@/components/ResponsabilitySection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ClientSection />
      <CardSection/>
      <BenefitsSection/>
      <AppSection/>
      <ContactSection/>
      <LawSection/>
      <ResponsabilitySection/>
      <FooterSection/>
    </MainLayout>
  );
}
