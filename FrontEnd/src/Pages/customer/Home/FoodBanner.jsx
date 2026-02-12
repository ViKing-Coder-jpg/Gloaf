import React from 'react'
import ImageSlider from '../../../Components/Utilities/ImageSlider'
import {foodBannerImage} from '../../../utils/constants'

const FoodBanner = () => {
  return (
    <div className='w-full h-full flex items-center'>
        <div className='m-10 w-full h-[60%] rounded-3xl shadow-xl overflow-hidden'>
            <ImageSlider imgData={foodBannerImage} />
        </div>
    </div>
  )
}

export default FoodBanner