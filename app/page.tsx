import { BenefitsSection } from "@/components/BenefitsSection";
import { ClientSection } from "@/components/ClientSection";
import CTA from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LampSection } from "@/components/LampSection";
import { LawSection } from "@/components/LawSection";
import MainLayout from "@/components/layout";
import { OurServices } from "@/components/OurServices";
import { StatsSection} from "@/components/Testimonials";
import { TestimonialSection } from "@/components/TestimonialSection";

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
      <TestimonialSection/>
      <CTA/>
      <Footer/>
      {/* <CardSection/> */}
      {/* <Grid/> */}
      {/* <AppSection /> */}
      {/* <ContactSection /> */}
      {/* <ResponsabilitySection /> */}
      {/* <FooterSection /> */}
    </MainLayout>
  );
}
