"use client";
import React, { SVGProps } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Auto } from "./Auto";
import { ShieldSvg } from "./ShieldSvg";

type BenefitsProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const BackgroundGradientDemo: React.FC<BenefitsProps> = ({
  icon: Icon,
  title,
  content,
  index,
}) => {
  return (
    <div>
      <BackgroundGradient className=" flex flex-col justify-between rounded-[22px] p-10 bg-white dark:bg-black-100 h-[350px] lg:w-full 2xl:h-[350px] lg:h-[350px]">
        <div>
          <ShieldSvg height="60px" width="60px" fillColor="none" />
        </div>

        <p className="text-base sm:text-3xl  text-black mt-4 mb-2 dark:text-neutral-200">{title}</p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify">{content}</p>
        <div className="flex justify-between items-center ">
          <Link href="/#contacto">
            <button className="rounded-full pl-4 pr-1 py-1 text-black-100 flex  space-x-1 dark:bg-green2-100 bg-white-100 text-xs font-bold  w-[190px]">
              <span>Proteje tu vehículo ahora</span>
            </button>
          </Link>
          {/* <Icon className="w-[40px] h-[40px] text-[#00ED64]" /> */}
          <Auto width="30px" height="30px" />
        </div>
      </BackgroundGradient>
    </div>
  );
};
