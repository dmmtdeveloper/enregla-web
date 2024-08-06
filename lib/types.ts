export type LinkItem = {
  name: string;
  hash: string;
};

export type NavItems = {
  home: LinkItem[];
};

/// Interfaz PreguntaFrecuente
export interface PreguntaFrecuente {
  id: number; // ID de la pregunta
  titulo: string;
  description?: string;
  descripcion2?: {
    titulo?: string; // Título opcional
    texto?: string; // Texto opcional
  };
  titulo2?: string;
  descripcion3?: {
    titulo?: string; // Título opcional
    texto?: string; // Texto opcional
  };
  descripcion4?: {
    titulo?: string; // Título opcional
    texto?: string; // Texto opcional
    texto2?: string; // Texto opcional
  };
  descripcion5?: {
    titulo?: string; // Título opcional
    titulo2?: string; // Título opcional
    texto?: string; // Texto opcional
  };
  descripcion6?: {
    titulo?: string; // Título opcional
    texto?: string; // Texto opcional
  };
  vehicles?: string[];
}

// Definición del tipo de las propiedades del componente AcordionFaq
export interface AcordionFaqProps {
  id: number; // ID de la pregunta
  titulo: string;
  description?: string;
  descripcion2?: {
    titulo?: string; // Título opcional
    texto?: string; // Texto opcional
  };
  titulo2?: string;
  descripcion3?: {
    titulo?: string; // Título opcional
    texto?: string; // Texto opcional
  };
  descripcion4?: {
    titulo?: string; // Título opcional
    texto?: string; // Texto opcional
    texto2?: string; // Texto opcional
  };
  descripcion5?: {
    titulo?: string; // Título opcional
    titulo2?: string; // Título opcional
    texto?: string; // Texto opcional
  };
  descripcion6?: {
    titulo?: string; // Título opcional
    texto?: string; // Texto opcional
  };
  vehicles?: string[];
}