import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Gloaf_icon from '../../assets/Gloaf_icon.png'

const HomePageHeader = () => {
  return (
    <header className='top-0 left-0 sticky z-100'>
    <div className=' bg-white/25 rounded-bl-2xl rounded-br-2xl shadow-lg backdrop-blur-md border border-white/35 h-18 w-screen flex items-center'>
      <div className='h-full w-[30%] flex items-center pl-10 '>
        <Link to='/' className='flex items-center gap-3 h-12 hover:text-[#F1B93D] transition ease-in-out duration-300'>
          <img src={Gloaf_icon} alt='Gloaf icon' className='h-14 w-14 object-contain'/>
          <h3 className='text-3xl font-medium'>Gloaf</h3>
        </Link>
      </div>
      <div className='h-full w-[42%] flex items-center justify-center'>
          <ul className='flex gap-8'>
            <li>
              <NavLink to='/' className={({isActive}) => `px-4 py-2 rounded-md transition ease-in-out duration-300 ${isActive ? 'text-[#F1B93D]' : 'text-black hover:text-[#F1B93D]'}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => `px-4 py-2 rounded-md transition ease-in-out duration-300 ${isActive ? 'text-[#F1B93D]' : 'text-black hover:text-[#F1B93D]'}`}>
                About
              </NavLink>
            </li>
            <li>
              <a href='https://github.com/ViKing-Coder-jpg/Gloaf' className='px-4 py-2 rounded-md transition ease-in-out duration-300 hover:text-[#F1B93D]'>Github</a>
            </li>
          </ul>
      </div>
      <div className='h-full w-[28%] flex justify-around items-center'>
        <div className='p-0 m-0 h-12 w-42 rounded-2xl hover:bg-[#F1B93D] hover:text-white transition ease-in-out duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]'>
          <Link to='/login' className='h-full w-full flex items-center justify-center'>Login</Link>
        </div>
        <div className='p-0 m-0 h-12 w-42 bg-[#F1B93D] rounded-2xl hover:text-white transition ease-in-out duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]'>
          <Link to='/signup' className='h-full w-full flex items-center justify-center gap-2'>Get Started <FaArrowRight/></Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default HomePageHeader