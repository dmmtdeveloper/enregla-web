import Link from 'next/link'
import React from 'react'

export const ButtonHeroSmall = () => {
  return (
    <div className="md:inline-flex">
    <Link
      href="/#contacto"
      className="rainbowBorder inline-flex items-center justify-center text-[14px]"
    >
      <span className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-1">
        Auto en regla auto seguro
      </span>
    </Link>
  </div>
  )
}
