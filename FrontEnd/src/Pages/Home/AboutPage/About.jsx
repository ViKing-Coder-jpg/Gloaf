import React from 'react'
import AboutIntro from './AboutIntro'
import WhyWeDoIt from './WhyGloaf'
import AboutOutro from './AboutOutro'
import AboutDetails from './AboutDetails'
import AboutDeveloper from './AboutDeveloper'

const About = () => {
  return (
    <div >
      <div className='w-screen h-[60vh] '><AboutIntro /></div>
      <div className='w-screen h-screen '><AboutDetails/></div>
      <div className='w-screen h-[60vh]'><WhyWeDoIt/></div>
      <div className='w-screen h-[60vh] '><AboutDeveloper/></div>
      <div className='w-screen h-[37vh]'><AboutOutro/></div>
    </div>
  )
}

export default About