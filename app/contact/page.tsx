"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/layout";

export default function contact() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace("/");
    }, 3000);
  };

  return (
    <MainLayout>
      <div className="pt-10 px-8">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl dark:text-white">Contactanos</h2>
          <Input type="text" variant="bordered" label="Nombre" />
          <Input type="text" variant="bordered" label="Apellido" />
          <Input type="Email" variant="bordered" label="Email" />
          <Input type="text" variant="bordered" label="Empresa" />
        </div>
        <Button onPress={() => router.replace("/")}>Ir a inicio</Button>
        <Button onPress={sendEmail} isLoading={loading}>
          Enviar
        </Button>
      </div>
    </MainLayout>
  );
}
