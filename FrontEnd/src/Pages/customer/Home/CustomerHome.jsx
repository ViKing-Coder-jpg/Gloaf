import React from 'react'
import SearchIntro from './SearchIntro'

const CustomerHome = () => {
  return (
    <div className=' bg-linear-to-b from-[#f7dbb7] via-[#f9e6cc] to-[#fcf5e8]'>
      <div className='w-screen h-[60vh] flex flex-col justify-center items-center'>
        <SearchIntro />
      </div>
      <div className='w-screen h-screen'></div>
      <div className='w-screen h-screen'></div>
      <div className='w-screen h-screen'></div>
    </div>
  )
}

export default CustomerHome