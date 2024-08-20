"use client"
import { preguntasFrecuentes } from '@/lib/FAQ'
import React from 'react'
import { AcordionFaq } from '../ui/AcordionFaq'

export const FAQuestions = () => {
  return (
    <div className="mt-32">
    <div>
      <h1 className="text-black dark:text-white text-center text-5xl font-semibold mb-10">Preguntas frecuentes</h1>
    </div>
    <div className="flex flex-col mb-20">
      {preguntasFrecuentes.map((faq, index) => (
        <AcordionFaq
          id={faq.id}
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
  )
}
