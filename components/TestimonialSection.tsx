import React from "react";
import { feedback } from "@/lib/testimonials";
import styles from "@/lib/style";
import { FeedbackCard } from "./FeedbackCard";

export const TestimonialSection = () => {
  return (
    <section id="clientes" className={`flex flex-col md:flex-row xl:flex-col px-4 xl:px-[44px] sm:py-16  bg-white dark:bg-black-100 `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[30%] rounded-full blue__gradient"></div>

      <div className="w-full flex justify-between items-center md:flex-row xl:flex-row-reverse flex-col sm:mb-16 mb-6 relative z-[1] xl:px-32">
        <h1 className="font-semibold text-[48px] xl:text-7xl xl:max-w-[700px]  dark:text-white text-black-100 xl:leading-[76.8px] leading-[50px] w-full mb-4">
          Que dicen nuestros  <span className="from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent bg-gradient-to-b">clientes</span>
         
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>clientes satisfechos</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-start xl:justify-center w-full relative z-[1]">
        {
          feedback.map((card, index) => (
            <FeedbackCard key={card.id} {...card}/>
          ))
        }
      </div>
    </section>
  );
};
