"use client"

import Image from 'next/image'
import React from 'react'
import logodark from "@/public/assets/img/logo-negro.png";
import logowhithe from "@/public/assets/img/logo-blanco.png";
import Link from 'next/link';
import {motion} from "framer-motion"

export const Logo = () => {
  return (
    <motion.div>
        <Link href="#inicio">
          <Image
            className="cursor-pointer hidden dark:block w-[150px] h-auto"
            src={logowhithe}
            alt="logowhite"
            width={256}
            height={51}
            priority={true}
            quality={95}
          />
          <Image 
          className="cursor-pointer dark:hidden w-[150px] h-auto" 
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
