"use client"

import Image from 'next/image'
import React from 'react'
import logodark from "@/public/assets/svg/auto-black.svg";
import logowhite from "@/public/assets/svg/auto-white.svg";
import Link from 'next/link';
import { motion } from "framer-motion"

type AutoProps = {
  width?: string,
  height?: string
}

export const Auto: React.FC<AutoProps> = ({ width, height }) => {
  return (
    <motion.div className='z-20 flex items-center justify-center animate-ripple'>
      <Link href="#inicio">
        <Image
          className="cursor-pointer hidden dark:block w-[80px] h-auto"
          src={logowhite}
          alt="logowhite"
          style={{ width, height }} // Pasar width y height como estilos
          priority={true}
          quality={95}
        />
        <Image
          className="cursor-pointer dark:hidden  w-[80px] h-auto"
          src={logodark}
          alt="logodark"
          style={{ width, height }} // Pasar width y height como estilos
          priority={true}
          quality={95}
        />
      </Link>
    </motion.div>
  )
}
