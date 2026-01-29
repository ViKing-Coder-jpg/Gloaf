import React from 'react'
import AboutIntro from './AboutIntro'
import WhyWeDoIt from './WhyGloaf'
import AboutOutro from './AboutOutro'

const About = () => {
  return (
    <div >
      <div className='w-screen h-[60vh] '><AboutIntro /></div>
      <div className='w-screen h-screen bg-yellow-500'></div>
      <div className='w-screen h-[60vh]'><WhyWeDoIt/></div>
      <div className='w-screen h-screen bg-pink-500'></div>
      <div className='w-screen h-[37vh]'><AboutOutro/></div>
    </div>
  )
}

export default About