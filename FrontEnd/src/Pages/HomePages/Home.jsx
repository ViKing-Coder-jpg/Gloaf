import React from 'react'
import ChoiceGloaf from './choiceGloaf'


const Home = () => {
  return (
    <div>
      <div className='w-screen h-screen bg-green-500'></div>
      <div className='w-screen h-[60vh]'>
          <ChoiceGloaf />
      </div>
      <div className='w-screen h-screen bg-blue-500'></div>
      <div className='w-screen h-screen bg-pink-500'></div>
    </div>
  )
}

export default Home