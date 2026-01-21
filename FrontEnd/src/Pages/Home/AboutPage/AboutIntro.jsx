import React from 'react'

const AboutIntro = () => {
  return (
    <div className="relative w-full py-24 px-6 overflow-hidden">
    <section >
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/60 text-sm font-semibold tracking-wide text-brown-700">
          OUR STORY
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4a2a0a] mb-6">
          The Story of Gloaf
        </h2>
        <p className="text-lg md:text-xl text-[#6b4a2d] leading-relaxed">
          Born from the simple joy of a chocolate croissant, we're on a mission to
          connect local chefs with neighbors who appreciate the craft of
          real food.
        </p>
      </div>
    </section>

    </div>
  )
}

export default AboutIntro