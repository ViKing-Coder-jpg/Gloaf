import React from 'react'
import CustomerHeader from '../../Components/Headers/CustomerHeader'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <CustomerHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout