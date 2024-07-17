import { ClientSection } from "@/components/ClientSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ClientSection/>
    </main>
  );
}
