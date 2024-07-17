import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "@/public/assets/HeroImage.jpg";
import clsx from "clsx";

export const HeroPicture = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-center"
      >
        <Image
          className={clsx(
            /* default*/
            "gradient-mask-b-0",
            "rounded-xl",
            "border-2 border-green-400",

            /*dark mode */
            "dark:border-purple-500"
      
          )}
          src={HeroImage}
          alt="hero-image"
          width={400}
          height={100}
          priority
        />
      </motion.div>
    </>
  );
};
