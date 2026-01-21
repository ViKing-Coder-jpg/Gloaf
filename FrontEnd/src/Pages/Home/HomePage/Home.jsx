import React from 'react'
import ChoiceGloaf from './choiceGloaf'
import IntroPage from './IntroPage'
import DetailedIntro from './DetailedIntro'
import Outro from './Outro'



const Home = () => {
  return (
    <div>

      <div className='w-screen h-[93vh]'>
        <IntroPage />
      </div>
      <div className='w-screen h-[186vh]'>
        <DetailedIntro />
      </div>
      <div className='w-screen h-[50vh]'>
          <ChoiceGloaf />
      </div>
      <div className='w-screen h-[60vh]'>
        <Outro />
      </div>
    </div>
  )
}

export default Home