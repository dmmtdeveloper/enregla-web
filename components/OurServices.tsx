import React from "react";
import styles, { layout } from "@/lib/style";
import Image from "next/image";
import radarImageWhite from "@/public/assets/img/radarappwhite.png";
import radarImageBlack from "@/public/assets/img/radarappblack.png";
import { MovingBorderDemo } from "./buttons/ButtonMoving";

export const OurServices = () => {
  return (
    <section id="products" className={`${layout.sectionReverse} dark:bg-black-100 bg-white flex-col-reverse px-4`}>
      <div className={`${layout.sectionImgReverse} `}>
        <Image
          className="hidden dark:block relative z-[5] w-[600px] h-auto"
          width={600}
          height={600}
          src={radarImageWhite}
          alt="enregla"
          priority={true}
        />
        <Image
          className="dark:hidden relative z-[5] w-[600px] h-auto"
          width={600}
          height={600}
          src={radarImageBlack}
          alt="enregla"
          priority={true}
        />

        <div className="absolute z-[5] -left-1/2 top-0 w-[20%] h-[20%] rounded-full white__gradient" />

        <div className="absolute z-[0] -left-1/2 bottom-0 w-[80%] h-[80%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className="font-semibold text-[48px] xl:text-7xl xl:max-w-[700px]  dark:text-white text-black-100 xl:leading-[76.8px] leading-[50px] w-full mb-4">
          ¿Por que {" "}
          <span className="from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent bg-gradient-to-b">grabar</span>{" "}
          tu patente con nosotros?
        </h2>
        <p className={`${styles.paragraph} max-w-[700px] mt-5 mb-8`}>
        Altos estándares de grabado, permitiéndole al cliente obtener una alta seguridad a su segundo bien más preciado.
        </p>

        <p className={`${styles.paragraph} max-w-[700px] mt-5 mb-8`}>Nuestra solución cuenta con una aplicación, que registra los grabados en tiempo real. Que facilita la lectura automática de patente sin necesidad de tipeo, asegurando un proceso de grabado sin errores. </p>

        <p className={`${styles.paragraph} max-w-[700px] mt-5 mb-8`}>Poseemos precios competitivos acorde al bolsillo de nuestros clientes.</p>
        <MovingBorderDemo title="Acerca de"></MovingBorderDemo>
      </div>
    </section>
  );
};
