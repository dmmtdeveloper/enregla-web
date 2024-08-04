"use client";
import MainLayout from "@/components/layout";
import { AccordionSection } from "@/components/ui/Accordion";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="mt-32">
        <div className="flex justify-center items-center px-10">
          <AccordionSection />
        </div>
        <div>
          <h1 className="pt-[8rem]">Products Page</h1>
          <Button onPress={() => router.replace("/")}>Go home</Button>
        </div>
      </div>
    </MainLayout>
  );
}
