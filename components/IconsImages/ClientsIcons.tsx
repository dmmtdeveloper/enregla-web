import { motion } from "framer-motion";
import { Difor } from "../icons/Difor";
import { SergioEscobar } from "../icons/SergioEscobar";


export const ClientsImage = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex gap-20"
      >
        <a
          href="https://www.difor.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Difor/>
        </a>
        <a
          href="https://sergioescobar.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <SergioEscobar/>
        </a>
      </motion.div>
    </div>
  );
};
