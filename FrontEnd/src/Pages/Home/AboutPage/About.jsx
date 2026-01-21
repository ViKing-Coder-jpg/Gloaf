import React from 'react'
import AboutIntro from './AboutIntro'

const About = () => {
  return (
    <div >
      <div className='w-screen h-[60vh] '><AboutIntro /></div>
      <div className='w-screen h-screen bg-yellow-500'></div>
      <div className='w-screen h-screen bg-blue-500'></div>
      <div className='w-screen h-screen bg-pink-500'></div>
      <div className='w-screen h-screen bg-green-500'></div>
    </div>
  )
}

export default About