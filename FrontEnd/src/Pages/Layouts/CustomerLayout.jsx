import React from 'react'
import CustomerHeader from '../../Components/Headers/CustomerHeader'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <CustomerHeader />
      <div className=' bg-[radial-gradient(circle_at_top,#f9edd8_0%,#fcf6ea_30%,#fcf7ef_100%)]  w-full h-full'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout