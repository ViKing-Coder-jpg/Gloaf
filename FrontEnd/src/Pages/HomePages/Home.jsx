import React from 'react'
import ChoiceGloaf from './choiceGloaf'
import IntroPage from './IntroPage'



const Home = () => {
  return (
    <div>

      <div className='w-screen h-[93vh]'>
        <IntroPage />
      </div>
      <div className='w-screen h-[50vh]'>
          <ChoiceGloaf />
      </div>
      <div className='w-screen h-[93vh] bg-blue-500'></div>
      <div className='w-screen h-screen bg-pink-500'></div>
    </div>
  )
}

export default Home