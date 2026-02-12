import React from 'react'
import { AnalyseCard } from '../../../Components/Utilities/Cards'
import { FaArrowTrendUp, FaBagShopping, FaMoneyBills } from 'react-icons/fa6'
import { FaClock, FaStar } from 'react-icons/fa'

const Overview1 = () => {
  return (
    <div className='flex gap-4'>
        <AnalyseCard title="Total Revenue" data={`Rs ${12345}`} insights={`+${12}% from last week`} img={<FaMoneyBills className='text-[#a87a56] w-20 h-20 opacity-10'/>} insight_img={<FaArrowTrendUp/>} insightStyle='border-green-800 text-green-800 bg-green-200'/>
        <AnalyseCard title="Orders Accepted Today" data={`${24}`} insights={`${8} pending`} img={<FaBagShopping className='text-[#a87a56] w-20 h-20 opacity-10'/>} insight_img={<FaClock/>} insightStyle='border-orange-800 text-orange-800 bg-orange-200'/>
        <AnalyseCard title="Average Rating" data={`${4.7}`} insights={`${120} reviews`} img={<FaStar className='text-[#a87a56] w-20 h-20 opacity-10'/>} insight_img={<FaStar/>} insightStyle='border-yellow-800 text-yellow-800 bg-yellow-200'/>
    </div>
  )
}

export default Overview1