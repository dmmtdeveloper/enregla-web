import { ClientSection } from "@/components/ClientSection";
import { HeroSection } from "@/components/HeroSection";
import MainLayout from "@/components/layout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ClientSection />
    </MainLayout>
  );
}
