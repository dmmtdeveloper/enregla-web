import { motion } from "framer-motion";
import { Difor } from "./icons/Difor";
import { SergioEscobar } from "./icons/SergioEscobar";
import Link from "next/link";
import { MallPlaza } from "./icons/MallPlaza";

export const ClientsImage = () => {
  return (
    
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex gap-10"
      >
        <Link
          className="flex items-center justify-center pl-20 2xl:pl-40"
          href="https://www.difor.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Difor />
        </Link>

        <Link
          className="flex items-center justify-center pl-20 2xl:pl-40"
          href="https://sergioescobar.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SergioEscobar />
        </Link>

        <Link
          className="flex items-center justify-center pl-20 2x:pl-40"
          href="https://www.mallplaza.com/cl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MallPlaza />
        </Link>
      </motion.div>
    
  );
};
