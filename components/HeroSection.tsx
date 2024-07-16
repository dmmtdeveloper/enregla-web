import clsx from "clsx";
import Image from "next/image";
import React from "react";
import HeroImage from "../public/assets/HeroImage.jpg";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section>
      <div className="flex items-center justify-center flex-col">
        <p
          className={clsx(
            "text-4xl",
            "px-3 md:text-6xl",
            "text-gray-800",
            "text-center",
            "font-semibold",

            /* Dark Mode */
            "dark:text-gray-200"
          )}
          
        >
          Soluciones integrales de seguridad automotriz en Chile
        </p>

        <div className="mt-8">
          <Image
          className=""
            src={HeroImage}
            alt="hero-image"
            width={400}
            height={100}
            priority
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};
