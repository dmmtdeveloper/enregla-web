import { Footer } from "@/components/Footer";
import { LawSection } from "@/components/LawSection";
import { HeroSection } from "@/components/HeroSection";
import { OurServices } from "@/components/OurServices";
import { StatsSection} from "@/components/Testimonials";
import { LampSection } from "@/components/LampSection";
import { ClientSection } from "@/components/ClientSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import CTA from "@/components/CTA";
import MainLayout from "@/components/layout";

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
