import React, { FC } from "react";
import { FaCheck } from "react-icons/fa6";

type textProps = {
  title: string;
  paragaph: string;
};

export const LawComponent: FC<textProps> = ({ title, paragaph }) => {
  return (
    <article>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-5">
          <div className="bg-purple-600 p-2 rounded-ful w-8 rounded-full">
            <FaCheck className="text-1xl" />
          </div>
          <h3>{title}</h3>
        </div>

        <p className="text-[#837F96]">{paragaph}</p>
      </div>
    </article>
  );
};
