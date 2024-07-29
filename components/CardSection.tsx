"use client"
import React from "react";
import { Card } from "./card/Card";
import {motion} from "framer-motion"
import { Button } from "@nextui-org/button";

export const CardSection = () => {
  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="px-8 scroll-mt-20 flex flex-col gap-4 lg:grid-cols-2 lg:gap-8 lg:auto-cols-auto lg:grid">

      <Card title="Calidad" paragraph="Altos estándares de grabado, permitiéndole al cliente obtener una alta seguridad a su segundo bien más preciado, quedando en regla bajo la nueva normativa." color="#7ADB78" />
      
      <Card title="Experiencia" paragraph="Nos diferenciamos por ser los primeros en estandarizar el servicio, en cuanto a calidad y experiencia de visita de nuestros clientes" color="#FFC876" />

      <Card title="Precios justos" paragraph="Poseemos precios competitivos acorde al bolsillo de nuestros clientes. Elige enregla para obtener los mejores beneficios en seguridad automotriz." color="#FF776F" />

      <Card title="Equipamiento" paragraph="Conozca el equipamiento completo que ofrecemos para el grabado de vehículos." color="#AC6AFF" />
    </motion.div>
  );
};