import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import PartnerHeader from '../../Components/Headers/PartnerHeader'
import PartnerSidebar from '../../Components/SideBar/PartnerSidebar'

const PartnerLayout = () => {
  return (
    <>
    <div className='flex'>  
    <div>
      <PartnerSidebar />
    </div>
    <div className=' bg-linear-to-b from-[#f7dbb7] via-[#f9e6cc] to-[#fcf5e8] w-full flex flex-col'>
    <PartnerHeader />
    <Outlet />
    </div>
    </div>
    <Footer />
    </>
  )
}

export default PartnerLayout