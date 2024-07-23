import React from 'react'
import { Subtitles } from './Subtitles/Subtitles'

export const ResponsabilitySection = () => {
  return (
    <section className='pt-24'>
        <article>
            <Subtitles direction='center' title='Responsabilidad de las automotoras'/>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-semibold'>¿Qué vidrios de los vehículos deben ser grabados? </p>
                <p className="dark:text-[#837F96] text-gray-900">Vidrios laterales y espejos laterales</p>
            </div>
        </article>
    </section>
  )
}
