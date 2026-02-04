import React from 'react'
import { useRouteError } from 'react-router-dom'
import broken from '../../assets/broken_croissant_image-removebg-preview.png'
const ErrorPage = () => {
    const error=useRouteError()
  return (
    <div className="h-screen w-screen bg-[#F3CEA2]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src={broken} alt='broken img'/>
            </div>
            <div className="text-xl font-medium text-[#4D2308] flex flex-col text-center">
              <span className='text-4xl font-bold'>{`Error ${error.status}`}</span>
              <span>{`${error.statusText?error.statusText:error.message}`}</span>
            </div>
          </div>
        </div>
  )
}

export default ErrorPage