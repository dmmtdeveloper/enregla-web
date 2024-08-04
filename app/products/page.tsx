"use client";
import { AcordionFaq } from "@/components/AcordionFaq";
import { Footer } from "@/components/Footer";
import MainLayout from "@/components/layout";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="mt-32">
        <div className="flex flex-col gap-4">
          <AcordionFaq />
          <AcordionFaq />
          <AcordionFaq />
          <AcordionFaq />
          <AcordionFaq />
          <AcordionFaq />
          <AcordionFaq />
          <AcordionFaq />
          <AcordionFaq />
          <AcordionFaq />
        </div>
        <div>
          <h1 className="pt-[8rem]">Products Page</h1>
          <Button onPress={() => router.replace("/")}>Go home</Button>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
}
