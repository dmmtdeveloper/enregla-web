// Define the type for a review
export interface Review {
    name: string;
    username: string;
    body: string;
    img: string;
  }
  
  // Define the array of reviews
  export const reviews: Review[] = [
    {
      name: "Agustin Garrido",
      username: "@Agustin",
      body: "Excelente trabajo. El grabado de la patente quedó impecable y cumple con la ley chilena.",
      img: "/assets/img/jack.png", // Ruta relativa desde la carpeta public
    },
    {
      name: "Edgard Saéz",
      username: "@Edgard",
      body: "El grabado de la patente me ha dado mucha más seguridad. Estoy muy satisfecha.",
      img: "/assets/img/jill.png",
    },
    {
      name: "Rodrigo",
      username: "@rodrigo",
      body: "Atención al cliente excelente. Explicaron todo el proceso claramente.",
      img: "/assets/img/john.png",
    },
    {
      name: "Isidora",
      username: "@isidora",
      body: "El grabado de la patente vale la pena. Cumple con la normativa chilena.",
      img: "/assets/img/jane.png",
    },
    {
      name: "Valentina",
      username: "@valentina",
      body: "Increíble servicio. Estoy encantada con el resultado.",
      img: "/assets/img/jenny.png",
    },
    {
      name: "Mateo",
      username: "@mateo",
      body: "El grabado quedó perfecto. Estoy muy contento con el servicio.",
      img: "/assets/img/james.png",
    },
  ];
  

  
