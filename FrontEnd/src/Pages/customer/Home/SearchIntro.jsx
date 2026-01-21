import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchIntro = () => {
  return (
    <div className='flex flex-col gap-5 '>
        <div className='w-screen h-20 flex justify-center items-center'>
            <span className='text-6xl text-[#4e2307] font-bold'> Good food starts here.</span>
        </div>
        <div className='w-screen h-20 flex justify-center items-center text-center text-[#a2724b]'>
            <p>From trusted local partners to your doorstep—seamless, secure, and fast.<br/>
        Not just food, but an experience of flavor, freshness, and comfort.</p>
        </div>
        <div className='w-screen h-20  flex justify-center items-center'>
            <div className='flex bg-white rounded-xl w-[80vh] h-[6vh] shadow-lg'>
            <div className='h-full w-[5%] flex justify-center items-center text-[#4D2308]'>
                <FaSearch />
            </div>
            <div className='h-full w-[82%] flex justify-center items-center'>
                 <input type="text" id="Search" name="Search" placeholder="Search for food, coffee or restaurant..." className="block w-full  py-2 bg-white text-gray-900 placeholder-gray-400 h-full focus:outline-0"/>
            </div>
            <div className='flex justify-center items-center'>
                <div className="bg-[#F1B93D] h-[90%] w-[10vh] rounded-xl text-[#4D2308]  hover:text-white transition ease-in-out duration-300">
                <button type="submit" className="h-full w-full font-medium flex items-center justify-center gap-2 cursor-pointer">
                    <span>Search</span>
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SearchIntro