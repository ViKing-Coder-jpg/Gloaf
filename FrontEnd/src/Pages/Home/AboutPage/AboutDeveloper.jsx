import React from 'react'
import Avatar from '../../../assets/Avatar.png'

const AboutDeveloper = () => {
  return (
       <div className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        

        <div className="mb-14">
          <h2 className="text-3xl font-semibold text-brown-900 mb-3">
            Meet the Developer
          </h2>
          <p className="text-gray-600 max-w-xl">
            Gloaf is built and maintained by a passionate developer who cares deeply
            about clean design, thoughtful UX, and scalable systems.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          

          <div className="flex flex-col items-center  justify-center md:items-start text-center md:text-left">
            <div className="w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={Avatar}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              Vinayak Mohakud
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Full Stack Developer & Creator of Gloaf
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-md leading-relaxed text-center">
              I design and build end-to-end digital products with a focus on performance,
              accessibility, and real-world impact. Gloaf is a reflection of my belief
              that technology should feel human, warm, and intentional.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutDeveloper