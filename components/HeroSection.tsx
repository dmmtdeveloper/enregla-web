import clsx from 'clsx'
import React from 'react'

export const HeroSection = () => {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <h1 className={clsx('text-4xl px-3 md:text-6xl dark:text-gray-200 text-gray-800 text-center font-semibold')}>Soluciones integrales de seguridad automotriz en Chile</h1>
        </div>
    </section>
  )
}
