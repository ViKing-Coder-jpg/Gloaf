import React from 'react'
import Sushi from '../../../assets/Images/Sushi.png'
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const AboutDetails = () => {
  return (
    <div className='p-10'>
      <div className="mx-auto w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="relative flex justify-center">
          
            <img
              src={Sushi}
              className="rounded-xl shadow-lg"
            />

          <div className="absolute -bottom-6 left-6 bg-orange-200 rounded-2xl px-6 py-4 shadow-md w-xs">
            <p className="text-sm text-brown-800 italic">
              “We believe that real food has the power to bring communities together”
            </p>
          </div>
        </div>


        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-brown-900 mb-4">
            Our Mission: Freshness Without Compromise
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            In a world of mass production, Gloaf stands for the food artisans. We believe
            that delivery shouldn't mean sacrificing quality. Our mission is to
            preserve the warmth and integrity of locally crafted food from the
            chef's kitchen to your dining table.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-[]">
                <FaHandHoldingHeart />
              </div>
              <div>
                <h4 className="font-semibold text-brown-900">
                  Hand-picked Partners
                </h4>
                <p className="text-gray-600 text-sm">
                  We only work with artisans who share our obsession for quality ingredients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
               <MdDeliveryDining />
              </div>
              <div>
                <h4 className="font-semibold text-brown-900">
                  The Speed of Fresh
                </h4>
                <p className="text-gray-600 text-sm">
                  Our logistics are optimized to ensure your order arrives while it's still warm.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutDetails