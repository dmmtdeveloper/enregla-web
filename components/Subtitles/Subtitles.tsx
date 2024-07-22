import { title } from 'process'
import React, { FC } from 'react'

type SubtitlesProps = {
  title:string
}

export const Subtitles : FC<SubtitlesProps> = ({title}) => {
  return (
    <>
    <h3 className=" text-center text-[20px] dark:text-gray-50 text-gray-900 font-semibold">{title}</h3>
    </>
  )
}
