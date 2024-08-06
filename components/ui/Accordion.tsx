// Importaciones
import { preguntasFrecuentes } from "@/lib/FAQ";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

// Componente AccordionSection
export const AccordionSection: React.FC = () => {
  return (
    <Accordion>
      {preguntasFrecuentes.map((pregunta, index) => (
        <AccordionItem key={index} aria-label={`Accordion ${index}`} title={`Pregunta ${index}`}>
          {pregunta.description}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
