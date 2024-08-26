import MainLayout from "@/components/layout";
import { HeroSection } from "@/components/01_Hero/HeroSection";
import { OrbitingCirclesSection} from "@/components/02_OrbitingCircle/OrbitingCirclesSection";
import { BenefitsSection } from "@/components/03_Benefits/BenefitsSection";
import { OurServiceSection } from "@/components/04_OurServices/OurServiceSection";
import { MaximumTerm } from "@/components/05_MaximumTerm/MaximumTermSection";
import { LawSection } from "@/components/06_Law/LawSection";
import { MarqueSection } from "@/components/07_Marque/MarqueSection";
import { ClientSection } from "@/components/08_Client/ClientSection";
import { StatsSection } from "@/components/09_Stats/StatsSection";
import ContactSection from "@/components/10_Contact/ContactSection";
import { Responsability } from "@/components/05a_Responsanility/Responsability";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ClientSection />
      <StatsSection />
      <BenefitsSection />
      <OrbitingCirclesSection />
      <OurServiceSection />
      <MaximumTerm/>
      <Responsability/>
      <LawSection />
      <MarqueSection />
      <ContactSection />
    </MainLayout>
  );
}
