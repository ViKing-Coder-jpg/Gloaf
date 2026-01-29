import React from "react";
import { Link } from "react-router-dom";
import Gloaf_icon from '../../assets/Gloaf_icon.png'


export const GlowButton = ({ link, write, img, height, width ,clickHandler}) => {
  return (
    <div>
      <div
        className="p-0 m-0 bg-[#F1B93D] rounded-full hover:text-white transition ease-in-out duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]" style={{height:height,width:width}}
      >
        {link ? ( <Link to={link} className="h-full w-full flex items-center justify-center gap-2">{img} <span>{write}</span></Link>) : (
          <button className="h-full w-full flex items-center justify-center gap-2" onClick={clickHandler}>
            <span>{write}</span>
            {img}
          </button>
        )}
      </div>
    </div>
  );
};

export const NormalButton = ({ link, write, img, height, width,clickHandler }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#F1B93D] rounded-md text-[#4D2308]  hover:text-white transition ease-in-out duration-300" style={{height:height,width:width}}>
        {link ? ( <Link to={link} className="h-full w-full flex items-center justify-center gap-2">{img} <span>{write}</span></Link>) :(<button className="h-full w-full font-medium flex items-center justify-center gap-2 cursor-pointer" onClick={clickHandler}>
          <span>{write}</span>
          {img}
        </button>)}
      </div>
    </div>
  );
};
export const SidebarButton = ({ link, write, img, height, width,clickHandler })=>{
    return <div className="hover:bg-[#5f3921] text-[#b19f94] hover:text-[#f2b93d] rounded-lg transition ease-in-out duration-300" style={{height:height,width:width}}>
             {link ? ( <Link to={link} className="h-full w-full flex items-center justify-start gap-2 pl-2">{img} <span>{write}</span></Link>) :(<button className="h-full w-full font-medium flex items-center justify-start gap-2 cursor-pointer pl-2" onClick={clickHandler}>
          {img}
          <span>{write}</span>
        </button>)}
    </div>
}


export const Logo=()=>{
    return <div className='h-full w-[30%] flex items-center  '>
        <Link to='/' className='flex items-center gap-3 h-12 hover:text-[#F1B93D] transition ease-in-out duration-300'>
          <img src={Gloaf_icon} alt='Gloaf icon' className='h-14 w-14 object-contain'/>
          <h3 className='text-3xl font-medium'>Gloaf</h3>
        </Link>
    </div>
}

export const Line=({color})=>{
    return <div className="flex items-center my-6">
        <div className="grow h-px w-full"  style={{backgroundColor:color}}/>
        </div>
}

export const IconHolder=({img,bg,border,ic,size="48px"})=>{
  return <div className='rounded-full border flex justify-center items-center object-cover' style={{backgroundColor:bg,borderColor:border,color:ic,height:size,width:size}}>
            {img}
          </div>
}