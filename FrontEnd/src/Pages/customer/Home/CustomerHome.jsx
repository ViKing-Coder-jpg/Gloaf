import React from 'react'
import SearchIntro from './SearchIntro'
import FilterFood from './FilterFood'

const CustomerHome = () => {
  return (
    <div >
      <div className='w-screen h-[60vh] flex flex-col justify-center items-center'>
        <SearchIntro />
      </div>
      <div className='w-screen h-[40vh]'><FilterFood /></div>
      <div className='w-screen h-screen'></div>
      <div className='w-screen h-screen'></div>
    </div>
  )
}

export default CustomerHome