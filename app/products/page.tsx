"use client";
import React from "react";
import { AcordionFaq } from "@/components/AcordionFaq";
import { Footer } from "@/components/Footer";
import MainLayout from "@/components/layout";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { preguntasFrecuentes } from "@/lib/FAQ";

const ProductsPage: React.FC = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="mt-32">
        <div>
          <h1 className="text-black dark:text-white text-center text-5xl font-semibold mb-10">Preguntas frecuentes</h1>
          <Button onPress={() => router.replace("/")}>Go home</Button>
        </div>
        <div className="flex flex-col mb-20">
          {preguntasFrecuentes.map((faq, index) => (
            <AcordionFaq
              key={index}
              titulo={faq.titulo}
              titulo2={faq.titulo2}
              vehicles={faq.vehicles}
              description={faq.description}
              descripcion2={faq.descripcion2}
              descripcion3={faq.descripcion3}
              descripcion4={faq.descripcion4}
              descripcion5={faq.descripcion5}
              descripcion6={faq.descripcion6}
            />
          ))}
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
};

export default ProductsPage;
