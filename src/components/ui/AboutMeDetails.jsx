import React from 'react'
import Btn from './Btn'

function AboutMeDetails() {
  return (
    <div className='w-full h-full flex flex-col justify-center gap-5 items-center text-center'>
        <h1 className='text-2xl font-bold uppercase'>Nwaiche Smart</h1>
        <p>I'm Nwaiche Smart, a frontend developer with 2+ years of experience building clean, responsive, and user-friendly websites that look good and work smoothly.</p>
        <Btn logintext="Hire Me"/>
    </div>
  )
}

export default AboutMeDetails