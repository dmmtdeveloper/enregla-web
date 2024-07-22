import React, { FC } from "react";
import IconCard from "./icons/CardCheck";
import { GoChevronRight } from "react-icons/go";

type CardProps = {
  title: string;
  paragraph: string;
};

export const CardSection: FC<CardProps> = ({ paragraph, title }) => {
  return (
    <section className="dark:bg-[#16131A] bg-gray-50 rounded-[30px] flex flex-col gap-20 p-10 m-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-[24px] text-gray-900 dark:text-gray-50">{title}</h2>
        <p className="text-[#837F96]">{paragraph}</p>
      </div>

      <div className="flex items-center justify-between">
        <IconCard backgroundColor="#7ADB78" strokeColor="#ffff" />
        <div className="flex items-center gap-3">
          <p className="dark:text-gray-50 text-gray-900 font-semibold">EXPLORA MAS</p>
          <GoChevronRight className="text-2xl dark:text-gray-50 text-gray-900" />
        </div>
      </div>
    </section>
  );
};
