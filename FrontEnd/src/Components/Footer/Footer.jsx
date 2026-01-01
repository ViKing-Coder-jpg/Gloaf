import React from 'react'
import Gloaf_icon from '../../assets/Gloaf_icon.png'
import { FaGlobe, FaRegComment } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#f7f6f5] w-screen '>
      <div className='bg-white/0 rounded-xl shadow-sm p-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <img src={Gloaf_icon} alt='Gloaf' className='h-10 w-10 object-contain' />
              <h3 className='text-xl font-semibold'>Gloaf</h3>
            </div>
            <p className='text-gray-600 leading-relaxed'>Delivering warmth and flavor to your neighborhood, one order at a time.</p>
            <div className='flex items-center gap-4 text-gray-500'>
              <FaGlobe />
              <FaRegComment />
            </div>
          </div>

          <div>
            <h4 className='text-sm font-semibold tracking-wide text-gray-800 uppercase mb-4'>Company</h4>
            <ul className='space-y-3 text-gray-600'>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className='text-sm font-semibold tracking-wide text-gray-800 uppercase mb-4'>Support</h4>
            <ul className='space-y-3 text-gray-600'>
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div>
            <h4 className='text-sm font-semibold tracking-wide text-gray-800 uppercase mb-4'>Partner</h4>
            <ul className='space-y-3 text-gray-600'>
              <li>Add your restaurant</li>
              <li>Become a rider</li>
              <li>Business</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-[#ebe6da] mt-8 pt-6 flex items-center justify-between text-sm text-gray-500'>
          <div>Made by Vinayak</div>
          <div className='text-gray-400'>English (US)</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer