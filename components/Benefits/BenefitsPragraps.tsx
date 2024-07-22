import React, { FC } from 'react'

type paragraphPorps = {
    paragraph:string
}

export const BenefitsPragraps : FC<paragraphPorps> = ({paragraph}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='text-[#837F96] text-[16px] text-center'>{paragraph}</p>
    </div>
  )
}
