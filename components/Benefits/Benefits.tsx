import React, { FC } from "react";

type benefitsPorps = {
  paragraph: string;
  title: string;
};

export const Benefits: FC<benefitsPorps> = ({ paragraph, title }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-[20px] dark:text-white text-black font-semibold">{title}</h3>
      <p className="dark:text-white font-light text-justify text-black">{paragraph}</p>
    </div>
  );
};
