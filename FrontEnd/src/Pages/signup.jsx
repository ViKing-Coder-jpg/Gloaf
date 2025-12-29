import React from 'react'
import GloafIcon from '../assets/Gloaf_icon.png'

const Signup = () => {
  return (
    <div className='bg-amber-300 h-screen m-0 p-0 flex flex-row font-[Poppins, sans-serif]'>
        <div className='bg-orange-500 w-[55vw] m-0'>
        hello
        </div>
        <div className='bg-[#F3CEA2] w-[45vw] m-0 px-15 py-18'>
            <div className='bg-[#fffbf2] h-full rounded-[25px] m-0 p-5 flex justify-center flex-col shadow-lg'>
                <div className='h-[35vh] m-0 text-[#4D2308] flex flex-col items-center justify-around  p-1'>
                    <div className='flex justify-between'><img src={GloafIcon} alt='Gloaf icon' className='w-10 h-10 object-contain'/>
                    <h3 className='text-2xl'>Gloaf</h3></div>
                    <h2 className='font-semibold text-3xl'>Join Gloaf</h2>
                    <p className='text-sm text-[#996842]'>Good Food Starts Here.</p>
                </div>
                <div className='h-full m-0'>
                    <form className='p-4'>
                        <div className='space-y-4'>
                          <div className='flex flex-col space-y-1'>
                            <label htmlFor='Name' className='block text-sm font-medium text-[#4D2308]'>Full Name :</label>
                            <input type='text' id='Name' placeholder='Enter your full name' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400' required/>
                          </div>

                          <div className='flex flex-col space-y-1'>
                            <label htmlFor='Email' className='block text-sm font-medium text-[#4D2308]'>Email :</label>
                            <input type='email' id='Email' placeholder='Enter your email' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400' required/>
                          </div>

                          <div className='flex flex-col space-y-1'>
                            <label htmlFor='Phone' className='block text-sm font-medium text-[#4D2308]'>Phone :</label>
                            <input type='text' id='Phone' placeholder='Enter your phone number' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400' required/>
                          </div>

                          <div className='flex flex-col space-y-1'>
                            <label htmlFor='Password' className='block text-sm font-medium text-[#4D2308]'>Password :</label>
                            <input type='password' id='Password' placeholder='Enter your password' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400' required/>
                          </div>
                        <div className='flex flex-col items-center'>
                        <div className='bg-[#F1B93D] h-9 w-80 rounded-md'>
                            <input type='submit' value='Create Account ->' className='h-full w-full text-[#4D2308] font-medium'/>
                        </div>
                        </div>
                        </div>

                    </form>
                </div>
                <div className='bg-pink-300 h-[40vh] m-0'>c</div>
            </div>
        </div>
    </div>
  )
}

export default Signup