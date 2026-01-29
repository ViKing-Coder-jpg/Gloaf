import React from 'react'
import { IconHolder } from './BasicUtils'

const DescriptionCard = ({img,title,detail}) => {
  return (
    <div className='bg-[#f7f6f5] border-[#e8e1cc] h-44 w-100 border-3 rounded-2xl flex flex-col gap-2 justify-center p-4 hover:scale-130 ease-in-out transition duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]'>
        <div className='bg-[#f5ead0] rounded-full h-14 w-14 text-[#f2b93d] flex items-center justify-center object-cover '>{img}</div>
        <div className=' h-[20%] w-full text-lg'>{title}</div>
        <div className=' h-[20%] w-full text-sm font-light'>{detail}</div>
    </div>
  )
}

export default DescriptionCard


export const FilterCard =({img,bg,clr,text})=>{
  return <>
  <div className='h-[20vh] w-[15vw] shadow-lg bg-white rounded-2xl flex flex-col justify-center items-center gap-2 hover:cursor-pointer hover:scale-120 transition ease-in-out duration-300'>
    <IconHolder img={img} size="100px" bg={bg} border={clr} ic={clr}/>
    <span className='text-[#4e2307] font-bold'>{text}</span>
  </div>
  </>
}