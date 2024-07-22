import { BenefitsSection } from "@/components/BenefitsSection";
import { CardContainer } from "@/components/CardContainer";
import { CardSection } from "@/components/CardSection";
import { ClientSection } from "@/components/ClientSection";
import { HeroSection } from "@/components/HeroSection";
import MainLayout from "@/components/layout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ClientSection />
      <CardContainer/>
      <BenefitsSection/>
    </MainLayout>
  );
}
