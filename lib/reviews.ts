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
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "/assets/img/jack.png", // Ruta relativa desde la carpeta public
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "/assets/img/jill.png",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/assets/img/john.png",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/assets/img/jane.png",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/assets/img/jenny.png",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/assets/img/james.png",
    },
  ];