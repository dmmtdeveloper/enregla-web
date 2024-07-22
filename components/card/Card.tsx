import React, { FC } from "react";

type CardProps = {
  title: string;
  paragraph: string;
};

export const Card: FC<CardProps> = ({ title, paragraph}) => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2 className="text-[24px]">{title}</h2>
        <p className="text-[#837F96]">{paragraph}</p>
      </div>
    </section>
  );
};
