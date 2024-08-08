"use client"

import Image from 'next/image'
import React from 'react'
import logodark from "@/public/assets/svg/logo-dark.svg";
import logowhithe from "@/public/assets/svg/logo-white.svg";
import Link from 'next/link';
import {motion} from "framer-motion"

export const Logo = () => {
  return (
    <motion.div>
        <Link href="/#inicio">
          <Image
            className="cursor-pointer hidden dark:block w-[140px] h-auto"
            src={logowhithe}
            alt="logowhite"
            width={256}
            height={51}
            priority={true}
            quality={95}
          />
          <Image 
          className="cursor-pointer dark:hidden w-[140px] h-auto" 
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
