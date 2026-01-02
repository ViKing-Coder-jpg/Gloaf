import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import PartnerHeader from '../../Components/Headers/PartnerHeader'

const PartnerLayout = () => {
  return (
    <>  <PartnerHeader />
        <Outlet />
        <Footer />
    </>
  )
}

export default PartnerLayout