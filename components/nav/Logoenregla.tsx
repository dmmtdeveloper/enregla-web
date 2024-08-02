"use client"

import Image from 'next/image'
import React from 'react'
import logodark from "@/public/assets/img/logo-negro-autoseguro.png";
import logowhithe from "@/public/assets/img/logo-blanco-autoseguro.png";
import Link from 'next/link';
import {motion} from "framer-motion"

export const Logoenregla = () => {
  return (
    <motion.div>
        <Link href="#inicio">
          <Image
            className="cursor-pointer hidden dark:block w-[280px] h-auto"
            src={logowhithe}
            alt="logowhite"
            width={256}
            height={51}
            priority={true}
            quality={95}
          />
          <Image 
          className="cursor-pointer dark:hidden w-[280px] h-auto" 
          src={logodark} 
          alt="logodark" 
          width={256} 
          height={51} 
          priority ={true}
          quality={95}
          />
        </Link>

    </motion.div>
  )
}
