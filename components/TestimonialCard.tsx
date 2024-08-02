import { feedback } from "@/lib/testimonials";
import React from "react";
import { FeedbackCard } from "./FeedbackCard";

export const TestimonialCard = () => {
  return (
    <>
      <div className="flex flex-wrap justify-start xl:justify-center w-full relative z-[1]">
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};
