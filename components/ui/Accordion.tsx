import { preguntasFrecuentes } from "@/lib/FAQ";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export const AccordionSection: React.FC = () => {
  return (
  
      <Accordion>
        {preguntasFrecuentes.map((pregunta) => (
          <AccordionItem
            className="font"
            key={pregunta.id}
            aria-label={`Accordion ${pregunta.id}`}
            title={`Pregunta ${pregunta.id}`}
          >
            {pregunta.description}
          </AccordionItem>
        ))}
      </Accordion>
    
  );
};
