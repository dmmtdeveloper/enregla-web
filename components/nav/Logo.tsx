import Image from 'next/image'
import React from 'react'
import logodark from "@/public/assets/img/logo-negro.png";
import logowhithe from "@/public/assets/img/logo-blanco.png";
import Link from 'next/link';

export const Logo = () => {
  return (
    <>
        <Link href="/">
          <Image
            className="cursor-pointer hidden dark:block"
            src={logowhithe}
            alt="logowhite"
            width={150}
            height={35}
            priority
          />
          <Image 
          className="cursor-pointer dark:hidden" 
          src={logodark} 
          alt="logodark" 
          width={150} 
          height={35} 
          priority />
        </Link>

    </>
  )
}
