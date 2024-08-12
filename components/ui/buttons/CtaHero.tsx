import React, { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";

type ButttonProps = {
  title: string;
  background?: string;
  border?: string;
  color?: string;
  borderWidth?: string;
};

export const ButtonCtaHero: FC<ButttonProps> = ({ title, background, border, color, borderWidth }) => {
  return (
    <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Button
        size="lg"
        color="success"
      >
        {title}
      </Button>
    </motion.div>
  );
};
