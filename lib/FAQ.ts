import { PreguntaFrecuente } from "@/lib/types";

export const preguntasFrecuentes: PreguntaFrecuente[] = [
  {
    id: 1,
    titulo: "¿Qué es la Ley 21.601?",
    description:
      "La Ley 21.601, fue publicada en el Diario Oficial y entró en vigencia el 01 de Septiembre del año 2023. El objetivo de esta ley es la modificación de la Ley del Tránsito (Ley Nº 18.290), para prevenir la venta de vehículos motorizados robados y reducir el robo de piezas",
  },
  {
    id: 2,
    titulo: "¿A quiénes aplica la Ley 21.601?",
    description:
      "La Ley 21.601 aplica a todos los vehículos motorizados que circulen por las vías públicas de Chile, entendiéndose por vehículo motorizado aquel que se encuentre por su naturaleza destinado al transporte o traslado de personas o cosas y sujeto a la obligación de obtener permiso de circulación para transitar, incluyendo:",
    vehicles: [
      "Automóviles",
      "Motocicletas",
      "Camiones",
      "Buses",
      "Furgones",
      "Maquinaria agrícola",
      "Vehículos de emergencia",
    ],
  },
  {
    id: 3,
    titulo: "¿Qué vehículos están exentos del grabado de patentes?",
    description: "Los siguientes vehículos están exentos del grabado de patentes:",
    vehicles: [
      "Vehículos diplomáticos",
      "Vehículos consulares",
      "Vehículos de las Fuerzas Armadas y de Orden",
      "Vehículos de emergencia",
      "Vehículos agrícolas que circulen por caminos rurales",
      "Motocicletas que no superen los 50 cc",
    ],
  },
  {
    id: 4,
    titulo: "¿Cuál es el plazo para grabar las patentes?",
    description:
      "El plazo para grabar las patentes en Chile depende de la fecha en que tu vehículo fue inscrito en el Registro de Vehículos Motorizados:",
    descripcion2: {
      titulo: "Fecha límite vehículos nuevos:",
      texto:
        "La ley señala que un vehículo motorizado nuevo corresponde a aquellos inscritos desde el 14 de agosto del año 2025, exigiendo a los concesionarios y distribuidores de vehículos motorizados nuevos, que desde el 14 de septiembre del año 2025 estos deben ser vendidos con la placa patente grabada.",
    },
    descripcion3: {
      titulo: "Vehículos usados:",
      texto:
        "La ley establece que todo vehículo motorizado usado (adquirido con anterioridad al 13 de agosto del año 2024), debe tener su placa patente grabada como fecha límite al 14 de mayo del año 2025.",
    },
    descripcion4: {
      titulo: "Es importante destacar que:",
      texto:
        "Las multas por incumplimiento ascienden a 1,5 UTM (aproximadamente $100.000). El vehículo podría ser retirado de circulación hasta que se cumpla con la normativa.",
      texto2: "Para evitar multas y sanciones, te recomendamos grabar la patente de tu vehículo lo antes posible.",
    },
  },
  {
    id: 5,
    titulo: "¿Qué método de grabado utiliza Enregla?",
    description:
      "En Enregla, utilizamos un método de grabado único y patentado que cumple con todos los requisitos exigidos por la ley del tránsito y el reglamento que establece las características del grabado. Nuestro grabado es lineal, permanente, inalterable y resistente a las inclemencias del tiempo.",
  },
  {
    id: 6,
    titulo: "¿Qué beneficios ofrece Enregla?",
    description: "Enregla te ofrece una serie de beneficios al grabar las patentes de tu vehículo:",
    descripcion2: {
      titulo: "Cumplimiento de la ley:",
      texto: "Te aseguras de cumplir con la Ley 21.601 y evitas multas y sanciones.",
    },
    descripcion3: {
      titulo: "Protección contra el robo:",
      texto: "El grabado de patentes disuade a los ladrones y facilita la recuperación de tu vehículo en caso de robo.",
    },
    descripcion5: {
      titulo: "Tranquilidad:",
      texto: "Puedes conducir con la tranquilidad de saber que tu vehículo está protegido.",
    },
    descripcion6: {
      titulo: "Servicio profesional:",
      texto:
        "Enregla te ofrece un servicio profesional y de alta calidad, con atención personalizada y garantía de satisfacción.",
    },
  },
  {
    id: 7,
    titulo: "¿Cómo puedo obtener más información sobre el grabado de patentes en Enregla?",
    description:
      "Puedes obtener más información sobre el grabado de patentes en Enregla visitando nuestra página web www.enregla.cl, contactándonos a través de nuestro teléfono +56 951596668 o correo electrónico contacto@enregla.cl.",
  },
  {
    id: 8,
    titulo: "¿Qué tipo de letra y tamaño debo usar para grabar la patente?",
    description:
      "Según la normativa vigente, la patente debe grabarse con una letra tipo sans serif, de altura mínima de 5 milímetros y ancho proporcional. Es importante que la letra sea legible y clara, para que pueda ser identificada fácilmente por las autoridades.",
  },
  {
    id: 9,
    titulo: "¿En qué parte del vehículo debo grabar la patente?",
    titulo2:
      "Las patentes deben grabarse en los vidrios y espejos laterales del vehículo, de manera visible y permanente. La ubicación específica varía según el tipo de vehículo:",

    descripcion2: {
      titulo: "Automóviles:",
      texto:
        "En los parabrisas delantero y trasero, en la parte inferior derecha, y en los vidrios laterales delanteros, en la esquina inferior izquierda.",
    },
    descripcion3: {
      titulo: "Motocicletas:",
      texto:
        "En el parabrisas delantero, en la parte inferior derecha, y en los espejos laterales, en la parte superior.",
    },
    descripcion5: {
      titulo: "Camiones y buses:",
      texto:
        "En el parabrisas delantero, en la parte inferior derecha, y en los vidrios laterales delanteros, en la esquina inferior izquierda.",
    },
  },
  {
    id: 10,
    titulo: "¿Puedo grabar las patentes por mi cuenta?",
    description:
      "No es recomendable grabar las patentes por tu cuenta, ya que existen requisitos específicos de formato y ubicación que deben cumplirse para que el grabado sea válido. Es mejor acudir a una empresa o taller autorizado por el Ministerio de Transportes y Telecomunicaciones, como Enregla.",
  },
  {
    id: 11,
    titulo: "¿Qué pasa si mi vehículo ya tiene un grabado de patentes antiguo?",
    description:
      "Si tu vehículo tiene un grabado de patentes anterior a la entrada en vigencia de la Ley 21.601, debes realizar un nuevo grabado que cumpla con los requisitos actuales.",
  },
];
