import React from 'react'
import { FaSearch ,FaShoppingCart,FaUtensils} from 'react-icons/fa'

const Outro = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        How it works
      </h2>

      <div className="relative flex flex-col gap-12">
        <div className="absolute left-6 top-0 h-full w-px bg-yellow-300" />

        <div className="flex gap-6 items-start hover:scale-130 ease-in-out transition duration-300">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-white z-10">
            <FaSearch size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Browse Local Favorites
            </h3>
            <p className="text-gray-600">
              Enter your address and explore menus from top-rated artisans
              and local bakeries near you.
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-start hover:scale-130 ease-in-out transition duration-300">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 text-white bg-yellow-400 z-10">
            <FaShoppingCart size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Place Your Order
            </h3>
            <p className="text-gray-600">
              Select your items, customize your cravings,
              and pay securely with a few taps.
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-start hover:scale-130 ease-in-out transition duration-300">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 text-white bg-yellow-400 z-10">
            <FaUtensils size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Enjoy Your Meal
            </h3>
            <p className="text-gray-600">
              Track your driver in real time and get ready to enjoy
              hot, fresh food delivered to your door.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outro