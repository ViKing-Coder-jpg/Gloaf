import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PartnerHeader = ({Name="Restaurant Name"}) => {
  const [isOpen,setOpen]=useState(false)
  const handleOpen=()=>{
    setOpen((prev)=>!prev)
  }

  return (
    <header className='w-full h-[8.9vh] bg-[#fdf6ea] flex items-center'>
      <div className='h-full w-full flex flex-col justify-center pl-4'>
        <span className='text-3xl text-[#4e2307] font-bold'>Welcome back, {Name}</span>
        <p className='text-[#b38f6f] text-md'>Lets feed the city</p>
      </div>
      <div className='h-full w-full flex justify-end items-center pr-4 gap-6'>
        <div className='p-3 bg-[#fffbf2] border border-[#b69273] rounded-full cursor-pointer' onClick={handleOpen}>{isOpen?<span className='text-green-400'>Open</span>:<span className='text-red-400'>Closed</span>}</div>
        <Link to="alert">
        <div className='bg-[#fceccc] w-12 h-12 rounded-full border-[#fae0a5] border flex justify-center items-center text-[#52290b]'>
          <FaBell />
        </div>
        </Link>
      </div>
      
    </header>
  )
}

export default PartnerHeader