import { motion } from "framer-motion";
import { Difor } from "./icons/Difor";
import { SergioEscobar } from "./icons/SergioEscobar";
import Link from "next/link";

export const ClientsImage = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex gap-20"
      >
        <Link href="https://www.difor.cl/" target="_blank" rel="noopener noreferrer">
          <Difor />
        </Link>

        <Link href="https://sergioescobar.cl/" target="_blank" rel="noopener noreferrer">
          <SergioEscobar />
        </Link>
      </motion.div>
    </div>
  );
};
