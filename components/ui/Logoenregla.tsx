"use client"

import Image from 'next/image'
import React from 'react'
import logodark from "@/public/assets/svg/logo-dark-autoseguro.svg";
import logowhite from "@/public/assets/svg/logo-white-autoseguro.svg";
import Link from 'next/link';
import {motion} from "framer-motion"

export const Logoenregla = () => {
  return (
    <motion.div>
        <Link href="#inicio">
          <Image
            className="cursor-pointer hidden dark:block w-40 h-auto"
            src={logowhite}
            alt="logowhite"
            width={256}
            height={51}
            priority={true}
            quality={95}
          />
          <Image 
          className="cursor-pointer dark:hidden w-20 h-auto" 
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
