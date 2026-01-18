import React from 'react'
import HomePageHeader from '../../Components/Headers/HomePageHeader'
import Footer from '../../Components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import AnimmatedBackground  from '../../Components/Utilities/AnimatedBackground'

const HomeLayout = () => {
  return (
    <div className='relative top-0 left-0'>
    <HomePageHeader className=' top-0 left-0 w-screen'/>
    <AnimmatedBackground />
    <Outlet />
    <Footer />
    </div>
  )
}

export default HomeLayout