"use client";
import { motion } from "framer-motion";
import styles from "@/lib/style";
import { maximumTerm } from "@/lib/Benefits";
import { MovingBorderDemo } from "@/components/ui/buttons/ButtonMoving";
import { MaximumCard } from "@/components/05_MaximumTerm/MaximumCard";
import Link from "next/link";

export const MaximumTerm = () => {
  return (
    <motion.div
      id="beneficios"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className=" flex-grow xl:flex px-4 xl:px-32  scroll-m-12 xl:mb-32"
    >
      <div className="xl:w-1/2">
        <div className={` flex flex-col justify-center px-8 xl:p-20 p-12 rounded-[60px] xl:rounded-[100px]`}>
          <h2 className="font-normal text-[38px] xl:text-6xl xl:max-w-[700px]  dark:text-white text-black-100 xl:leading-[70px] leading-[50px] w-full mb-4">
            ¿Hasta cuando hay<span className="font-semibold text-[#25D366]"> plazo para el grabado</span> de patente?
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mt-5 mb-8 dark:text-white-200 text-justify`}>
            Según establece la ley 21.601 que regula el grabado de patentes en Chile y su reglamento publicado el 14 de
            mayo, los plazos para hacer este procedimiento varían según el tipo de vehículo:
          </p>
          <Link href="FAQ">
            <MovingBorderDemo title="Conoce más"></MovingBorderDemo>
          </Link>
        </div>
      </div>

      <div className={` flex flex-col items-start  mt-10 relative`}>
        {maximumTerm.map((term, index) => (
          <MaximumCard key={term.id} {...term} index={index} />
        ))}
      </div>
    </motion.div>
  );
};
