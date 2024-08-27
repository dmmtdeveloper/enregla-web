"use client";
import { BackgroundGradient } from "../ui/background-gradient";
import { motion } from "framer-motion";
import { ShieldSvg } from "./ShieldSvg";
export const BackgroundGradientDemo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      <BackgroundGradient>
        <ShieldSvg />
      </BackgroundGradient>
    </motion.div>
  );
};
