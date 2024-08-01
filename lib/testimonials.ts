
import user from "@/public/assets/img/people02.png"
import { StaticImageData } from 'next/image';

type Feedback = {
  id: string;
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
};

export const feedback:Feedback[] = [
    {
      id: "feedback-1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore omnis nam commodi laboriosam repudiandae", 
      name: "user1",
      title: "Difor - Automotora",
      img: user,
    },
    {
      id: "feedback-2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore omnis nam commodi laboriosam repudiandae",
      name: "user2",
      title: "Difor - Automotora",
      img: user,
    },
    {
      id: "feedback-3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore omnis nam commodi laboriosam repudiandae",
      name: "user3",
      title: "Sergio escobar - Automotora",
      img: user,
    },
  ];