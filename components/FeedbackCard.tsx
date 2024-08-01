import React from "react";
import quotes from "@/public/assets/svg/quotes.svg";
import Image, { StaticImageData } from "next/image";
type cardProps = {
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
};

export const FeedbackCard: React.FC<cardProps> = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5">
      <Image
        className="w-[42px] h-auto object-contain"
        alt="quotes"
        src={quotes}
        width={50}
        height={50}
        priority={true}
      />
      <p className="text-[18px] leading-[32px] dark:text-white text-black-100 my-10">{content}</p>

      <div className="flex flex-row">
        <Image
          className="w-[48px] h-[48px] rounded-full"
          src={img}
          width={100}
          height={100}
          priority={true}
          alt="user"
        />

        <div className="flex flex-col ml-4">
          <h4 className="font-semibold text-[20px] leading-[32px] dark:text-white text-black-100">{name}</h4>
          <p className="text-[16px] leading-[24px] dark:text-white text-black-100">{title}</p>
        </div>
      </div>
    </div>
  );
};
