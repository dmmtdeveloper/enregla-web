import { title } from 'process'
import React, { FC } from 'react'

type SubtitlesProps = {
  title:string
  direction?: string
}

export const Subtitles : FC<SubtitlesProps> = ({title, direction}) => {
  return (
    <>
    <h3 style={{textAlign : direction}} className="text-3xl dark:text-gray-50 text-gray-900 font-semibold">{title}</h3>
    </>
  )
}
