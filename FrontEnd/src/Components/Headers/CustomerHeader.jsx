import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Gloaf_icon from '../../assets/Gloaf_icon.png'
import { MdShoppingBasket } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const CustomerHeader = () => {
  return (
    <header className='top-0 left-0 sticky z-100'>
    <div className='bg-[rgba(255,251,242,0.76)] flex justify-center items-center rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[1.8px] border border-[rgba(255,251,242,0.84)]'>
      <div className='h-full w-[30%] flex items-center pl-10 '>
        <Link to='/' className='flex items-center gap-3 h-12 hover:text-[#F1B93D] transition ease-in-out duration-300'>
          <img src={Gloaf_icon} alt='Gloaf icon' className='h-14 w-14 object-contain'/>
          <h3 className='text-3xl font-medium'>Gloaf</h3>
        </Link>
      </div>
      <div className='h-full w-[42%] flex items-center justify-center'>
          <ul className='flex gap-8'>
            <li>
              <NavLink to='/customer/home' className={({isActive}) => `px-4 py-2 rounded-md transition ease-in-out duration-300 ${isActive ? 'text-[#F1B93D]' : 'text-black hover:text-[#F1B93D]'}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/customer/collection' className={({isActive}) => `px-4 py-2 rounded-md transition ease-in-out duration-300 ${isActive ? 'text-[#F1B93D]' : 'text-black hover:text-[#F1B93D]'}`}>
                Search
              </NavLink>
            </li>
            <li>
              <NavLink to='/customer/orders' className={({isActive}) => `px-4 py-2 rounded-md transition ease-in-out duration-300 ${isActive ? 'text-[#F1B93D]' : 'text-black hover:text-[#F1B93D]'}`}>
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to='/customer/chef' className={({isActive}) => `px-4 py-2 rounded-md transition ease-in-out duration-300 ${isActive ? 'text-[#F1B93D]' : 'text-black hover:text-[#F1B93D]'}`}>
                Surprise Me
              </NavLink>
            </li>
          </ul>
      </div>
      <div className='h-full w-[28%] flex justify-evenly items-end p-3'>
        <div className='bg-white w-42 h-12 rounded-full border-[#e6dacf] border flex'>
            <div className='h-full w-[20%] flex justify-center items-center'>
              <FaMapMarkerAlt className=' h-[50%] w-[50%] text-[#52290b] object-cover'/>
            </div>
            <div className='h-full w-[80%] flex justify-center items-center'>
              <span className=' text-sm'>Pune, Maharashtra</span>
            </div>
        </div>
        <div className='bg-[#ffedd6] w-12 h-12 rounded-full flex justify-center items-center '>
          <MdShoppingBasket className='h-[70%] w-[70%] object-cover text-[#bd702d]'/>
        </div>
        <div className='bg-[#fceccc] w-12 h-12 rounded-full border-[#fae0a5] border flex justify-center items-center text-[#52290b]'>
          <span></span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default CustomerHeader