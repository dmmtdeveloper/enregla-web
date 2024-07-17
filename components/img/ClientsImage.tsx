import Image from "next/image";

import difor from "@/public/assets/difor.png";
import Sescobar from "@/public/assets/sergioEscobar.png";

import { motion } from "framer-motion";

export const ClientsImage = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex gap-16"
      >
        <Image
          className="w-[90px] h-auto"
          src={difor}
          alt="difor"
          height={100}
          width={45.31}
          priority
        />
        <Image
          className="w-[90px] h-auto"
          src={Sescobar}
          alt="sergio escobar"
          height={100}
          width={45.31}
          priority
        />
      </motion.div>
    </div>
  );
};
