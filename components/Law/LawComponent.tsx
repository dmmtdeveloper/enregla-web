import React, { FC } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

type textProps = {
  title: string;
  paragaph: string;
};

export const LawComponent: FC<textProps> = ({ title, paragaph }) => {
  return (
    <article>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-5">
          <BsCheckCircleFill className="text-2xl fill-purple-600" />
          <h3 className="text-gray-900 font-semibold dark:text-gray-50">{title}</h3>
        </div>

        <p className="dark:text-[#837F96] text-gray-900 text-justify">{paragaph}</p>
      </div>
    </article>
  );
};
