import React from 'react'
import HomePageHeader from '../../Components/Headers/HomePageHeader'
import Footer from '../../Components/Footer/Footer'
import {Outlet} from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <HomePageHeader />
    <Outlet />
    <Footer />
    </>
  )
}

export default HomeLayout