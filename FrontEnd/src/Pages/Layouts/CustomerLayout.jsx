import React from 'react'
import CustomerHeader from '../../Components/Headers/CustomerHeader'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <CustomerHeader />
      <div className=' bg-linear-to-b from-[#f7dbb7] via-[#f9e6cc] to-[#fcf5e8] w-full h-full'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout