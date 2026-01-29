import React from 'react'
import Gloaf_Icon from '../../../assets/Gloaf_icon.png'
import { GlowButton, IconHolder } from '../../../Components/Utilities/BasicUtils'

const AboutOutro = () => {
  return (
    <section className="relative bg-[#4b1e04] py-24 px-6 text-center overflow-hidden">
      <div className="absolute bottom-10 left-10 opacity-20 p-0 m-0">
        <img src={Gloaf_Icon} className='h-[35vh] w-[20vw] p-0 m-0'/>
      </div>
      <div className='flex flex-col justify-center items-center'>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Ready to taste the craft?
      </h1>
      <p className="text-white/70 w-xl text-lg mb-4">
        Join thousands of food lovers who have already discovered their new
        favorite local artisans.
      </p>
      <div className="flex justify-center flex-wrap">
        <GlowButton write="Get Started" height={"5vh"} width={"10vw"} link="/signup" ></GlowButton>
      </div>
      </div>
    </section>
  )
}

export default AboutOutro