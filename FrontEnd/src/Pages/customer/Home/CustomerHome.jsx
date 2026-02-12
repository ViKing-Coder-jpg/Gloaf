import React from 'react'
import SearchIntro from './SearchIntro'
import FilterFood from './FilterFood'
import FoodRecommend from './FoodRecommend'
import RestroRecommend from './RestroRecommend'
import FoodBanner from './FoodBanner'

const CustomerHome = () => {
  return (
    <div >
      <div className='w-screen h-[60vh] flex flex-col justify-center items-center'>
        <SearchIntro />
      </div>
      <div className='w-screen h-[50vh]'><FoodBanner/></div>
      <div className='w-screen h-[40vh]'><FilterFood /></div>
      <div className='w-screen h-[60vh]'><FoodRecommend/></div>
      <div className='w-screen h-[45vh]'><RestroRecommend/></div>
    </div>
  )
}

export default CustomerHome