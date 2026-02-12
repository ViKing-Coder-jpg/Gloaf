import React from 'react'
import { IconHolder } from './BasicUtils'
import { FaClock, FaFish, FaStar } from 'react-icons/fa'

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

export const FoodCard = ({data={title:"hello",restro:"hi",rating:3.7,price:90,expectedTime:"70-90 min"}})=>{
  return <>
  <div className='h-[37vh] w-[23vw] bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-120 ease-in-out transition duration-300'>
      <div className=' w-full h-[60%] '><img src={data.img} alt='img' className=' object-cover'/></div>
      <div className='w-full h-[20%] p-2 flex'>
        <div className='w-full h-[50%] pt-3 flex flex-col gap-0.5'>
          <span className='text-[#4e2307] text-xl font-medium pl-3'>{data.title}</span>
          <span className='text-[#bb9a80] text-md font-light pl-3'>{data.restro}</span>
        </div>
        {data.rating?<div className='px-3 py-1 bg-[#ffedd5] rounded-xl text-center text-[#814414] flex items-center justify-center gap-1'>{data.rating} <FaStar className='text-[#fa7315]'/></div>:<div></div>}
      </div>
      <div className='w-full h-[20%] flex justify-between'>
        <div className='flex fle-col items-center justify-center text-[#4e2307]'>
          <span className='text-[#4e2307] text-xl font-medium pl-5'>Rs. {data.price}</span>
        </div>
        <div className='px-4 py-0.5 bg-[#ffedd5] rounded-full text-center text-[#814414] flex items-center justify-center gap-2 mb-2 mr-2'><FaClock/> {data.expectedTime}</div>
      </div>
  </div>
  </>
}

export const RestroCard =({data={title:"Sunny Snacks",rating:4.7,tags:["Snacks","North Indian"],isOpen:false,expectedPrice:500,expectedTime:"70-90 min"}})=>{
  return <>
  <div className='bg-white h-[20vh] w-[40vw] rounded-2xl shadow-md overflow-hidden flex'>
      <div className=' w-[30vw] h-full flex items-center justify-center'>
        <div className=' bg-white rounded-2xl p-16 overflow-hidden object-cover'>
            {data.img?<img src={data.img} alt='restroImg'/>:<IconHolder img={<FaFish/>} ic='red' bg='pink'/>}
        </div>
      </div>
      <div className=' w-[70vw] h-full'>
            <div className='m-5 w-[90%] h-[80%] bg-white p-5'>
                    <div className='w-full h-[70%] flex'>
                      <div className=' h-full w-[80%]'>
                        <span className='text-[#4e2307] text-2xl font-medium'>{data.title}</span>
                        <p className='text-[#bb9a80] text-md font-light'>{data.tags.join(' • ')}</p>
                        
                      </div>
                      <div className='h-full w-[20%]'>
                        {data.isOpen?<span className='p-2 text-green-700 bg-green-200 rounded-full'>Open</span>:<span className='p-2 bg-gray-400 rounded-full'>Closed</span>}
                      </div>
                      
                    </div>
                    <div className='w-full h-[30%] flex gap-2 items-center '>
                        {data.rating?<div className='px-3 py-1 bg-[#ffedd5] rounded-full text-center text-[#814414] flex items-center justify-center gap-1'>{data.rating} <FaStar className='text-[#fa7315]'/></div>:<div></div>}
                        <p className='text-[#bb9a80] text-sm font-light'>{`Rs ${data.expectedPrice} for two • ${data.expectedTime} away`}</p>
                    </div>
            </div>
      </div>

  </div>
  </>
}

  export const AnalyseCard=({title,data,insights,insight_img,img,insightStyle=''})=>{
    return <>
    <div className='relative bg-white h-[18vh] w-[20vw] rounded-2xl shadow-xl pl-3'>
        <div className='absolute z-0 w-full h-full flex items-center justify-end-safe pr-20'>{img}</div>
        <div className='relative z-10 w-full h-full flex flex-col justify-evenly'>
          <div className={`p-1 rounded-full ${insightStyle} border flex gap-3 items-center max-w-[60%]`} >{insight_img }{insights}</div>
          <div>
            <p className='text-[#a87a56] text-lg font-medium'>{title}</p>
            <span className='text-[#4e2307] text-5xl font-bold'>{data}</span>
          </div>
        </div>
    </div>
    </>
  }