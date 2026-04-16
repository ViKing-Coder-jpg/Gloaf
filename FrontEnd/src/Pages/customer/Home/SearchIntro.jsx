import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBar } from '../../../Components/Utilities/BasicUtils'

const SearchIntro = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  return (
    <div className='flex w-full max-w-[980px] flex-col gap-6 px-6 text-center'>
        <div className='flex justify-center items-center'>
            <span className='text-4xl font-bold text-[#4e2307] md:text-6xl'>Good food starts here.</span>
        </div>
        <div className='flex justify-center items-center text-center text-[#a2724b]'>
            <p>From trusted local partners to your doorstep—seamless, secure, and fast.<br/>
        Not just food, but an experience of flavor, freshness, and comfort.</p>
        </div>
        <div className='flex justify-center items-center'>
            <SearchBar
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onSubmit={() => navigate(`/customer/collection${searchTerm.trim() ? `?query=${encodeURIComponent(searchTerm.trim())}` : ''}`)}
              className='w-full max-w-[760px]'
              placeholder='Search spicy food, cuisines, or restaurants'
            />
        </div>
    </div>
  )
}

export default SearchIntro
