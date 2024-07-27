"use client";
import MainLayout from "@/components/layout";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();
  return (
    <MainLayout>
      <h1 className="pt-[8rem]">Products Page</h1>
      <Button onPress={() => router.replace("/")}>Go home</Button>
    </MainLayout>
  );
}
