import React, { FC } from "react";

type benefitsPorps = {
  paragraph: string;
  title: string;
};

export const Benefits: FC<benefitsPorps> = ({ paragraph, title }) => {
  return (
    <div className="flex flex-col justify-center items-center ga-4">
      <h3 className="text-center text-[20px] dark:text-gray-50 text-gray-900 font-semibold">{title}</h3>
      <p className="text-[#837F96] text-[16px] text-center ">{paragraph}</p>
    </div>
  );
};
