import React from "react";
import { feedback } from "@/lib/testimonials";
import styles from "@/lib/style";
import { FeedbackCard } from "./FeedbackCard";
import clsx from "clsx";

export const TestimonialSection = () => {
  return (
    <section
      id="clientes"
      className={clsx(
        "flex flex-col",
        "md:flex-row xl:flex-col",
        "px-4 xl:px-[44px]",
        "sm:py-16",
        "dark:bg-black-100",
        "pt-40 mb-40"
      )}
    >
      {/* modificar gradients considerar modo dark y light mode */}
      <div className="hidden ">
        <div className="dark:absolute z-[1] -right-1/2 top-0 w-[20%] h-[20%] rounded-full white__gradient" />
        <div className="dark:absolute z-[0] -right-1/2 bottom-0 w-[40%] h-[20%] rounded-full green__gradient" />
      </div>

      {/* modificar gradients */}
      <div className="hidden">
        <div className="dark:absolute z-[1] -right-1/2 top-0 w-[20%] h-[20%] rounded-full white__gradient" />
        <div className="dark:absolute z-[0] -right-1/2 bottom-0 w-[40%] h-[20%] rounded-full green__gradient" />
      </div>
      
      <div
        className={clsx(
          "w-full flex justify-between",
          "items-center md:flex-row",
          "xl:flex-row-reverse flex-col",
          "mb-16 md:mb-6",
          "relative z-[1]",
          "xl:px-32 md:flex-col"
        )}
      >
        <h1
          className={clsx(
            "font-semibold",
            "text-[48px]",
            "xl:text-7xl xl:max-w-[700px]",
            "dark:text-white",
            "text-black-100",
            "xl:leading-[76.8px]",
            "leading-[50px]",
            "w-full mb-4"
          )}
        >
          ¿Que dicen nuestros{" "}
          <span className="dark:from-[#6FEE8D] dark:to-[#17c964] from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent bg-gradient-to-b">
            clientes
          </span>
          ?
        </h1>
        {/* <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>clientes satisfechos</p>
        </div> */}
      </div>

      <div className="flex flex-wrap justify-start xl:justify-center w-full relative z-[1]">
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
