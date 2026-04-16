import React from 'react'
import { IconHolder, NormalButton } from './BasicUtils'
import { FaArrowRight, FaClock, FaFish, FaHeart, FaMotorcycle, FaStar } from 'react-icons/fa'
import GloafIcon from '../../assets/Gloaf_icon.png'
import { Link } from 'react-router-dom'
import { FaBowlFood } from 'react-icons/fa6'
import { BsGraphUp, BsReceipt } from 'react-icons/bs'
import { PiChefHatFill } from 'react-icons/pi'

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
  const {
    title,
    restro,
    restaurant,
    rating,
    price,
    expectedTime,
    img,
    badge,
    tag,
    liked=false,
    icon,
    tone="orange",
    className="",
    compact=false,
    restaurantSlug,
  } = data;

  const palette = {
    teal: {
      shell: "from-[#7eaeb2] via-[#a3c5bb] to-[#e4dccf]",
      iconBg: "bg-white/65",
      iconColor: "text-[#7aa38a]",
    },
    blush: {
      shell: "from-[#f8e3e6] via-[#f9ecef] to-[#fff5ef]",
      iconBg: "bg-[#fff5f6]",
      iconColor: "text-[#f28b8f]",
    },
    peach: {
      shell: "from-[#f6ead9] via-[#fff3e8] to-[#fffaf4]",
      iconBg: "bg-[#fff8ef]",
      iconColor: "text-[#f4a35d]",
    },
    yellow: {
      shell: "from-[#faf3d5] via-[#fff9e7] to-[#fffcf3]",
      iconBg: "bg-[#fffdf0]",
      iconColor: "text-[#efb728]",
    },
    orange: {
      shell: "from-[#f7d5b0] via-[#f9e2c6] to-[#fff7ee]",
      iconBg: "bg-[#fff5ec]",
      iconColor: "text-[#e18b2e]",
    },
  };
  const activeTone = palette[tone] || palette.orange;
  const restaurantLabel = restaurant || restro;

  const cardContent = (
    <article className={`group flex h-[440px] flex-col overflow-hidden rounded-[28px] border border-[#f0e0cb] bg-white shadow-[0_12px_30px_rgba(106,73,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(106,73,26,0.16)] ${compact ? "w-full max-w-[280px]" : "w-full"} ${className}`}>
      <div className={`relative h-[260px] w-full shrink-0 overflow-hidden rounded-[28px] bg-gradient-to-br ${activeTone.shell}`}>
        {img ? (
          <img src={img} alt={title} className='h-full w-full object-cover' />
        ) : (
          <div className='flex h-full w-full items-center justify-center'>
            <div className={`flex h-24 w-24 items-center justify-center rounded-[26px] ${activeTone.iconBg} text-5xl ${activeTone.iconColor}`}>
            {icon || <PiChefHatFill />}
            </div>
          </div>
        )}
        {badge ? (
          <span className='absolute left-3 top-3 rounded-xl bg-white px-3 py-1 text-xs font-semibold text-[#58301a] shadow-sm'>
            {badge}
          </span>
        ) : null}
        {tag ? (
          <span className='absolute left-3 top-3 rounded-xl bg-[#f95343] px-3 py-1 text-xs font-semibold text-white shadow-sm'>
            {tag}
          </span>
        ) : null}
        {liked ? (
          <div className='absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#d2b499] shadow-[0_10px_20px_rgba(98,54,15,0.12)]'>
            <FaHeart />
          </div>
        ) : null}
      </div>
      <div className='flex flex-1 flex-col justify-between space-y-4 p-5'>
        <div className='flex items-start gap-3'>
          <div className='min-w-0 flex-1'>
            <h3 className='truncate text-[1.55rem] font-semibold leading-tight text-[#411d09]'>{title}</h3>
            {restaurantLabel ? (
              <p className='mt-1 text-sm text-[#be9677]'>{restaurantLabel}</p>
            ) : null}
          </div>
          {rating ? (
            <div className='flex shrink-0 items-center gap-1 rounded-xl bg-[#fff0de] px-2.5 py-1 text-sm font-semibold text-[#a25212]'>
              <span>{rating}</span>
              <FaStar className='text-[#ef8b23]' />
            </div>
          ) : null}
        </div>
        <div className='flex items-center justify-between gap-3'>
          <span className='text-[1.7rem] font-semibold text-[#411d09]'>${price?.toFixed ? price.toFixed(2) : price}</span>
          {expectedTime ? (
            <div className='flex items-center gap-2 rounded-full bg-[#fff0de] px-3 py-2 text-sm text-[#9b6a39]'>
              <FaClock className='text-[#b57a3f]' />
              <span>{expectedTime}</span>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )

  return restaurantSlug ? (
    <Link to={`/customer/restaurant/${restaurantSlug}`} className="block">
      {cardContent}
    </Link>
  ) : (
    cardContent
  )
}

export const RestroCard =({data={title:"Sunny Snacks",rating:4.7,tags:["Snacks","North Indian"],isOpen:false,expectedPrice:500,expectedTime:"70-90 min"}})=>{
  const {
    title,
    rating,
    tags=[],
    isOpen=false,
    expectedPrice,
    expectedTime,
    img,
    icon,
    description,
    reviews,
    deliveryFee,
    tone="peach",
    className="",
    slug,
  } = data;

  const palette = {
    peach: {
      shell: "bg-[#fcf0e8]",
      iconColor: "text-[#f2a252]",
    },
    blush: {
      shell: "bg-[#fdeff0]",
      iconColor: "text-[#f58f94]",
    },
    mint: {
      shell: "bg-[#e7f7ef]",
      iconColor: "text-[#69dca1]",
    },
    butter: {
      shell: "bg-[#faf6dc]",
      iconColor: "text-[#efb11f]",
    },
  };
  const activeTone = palette[tone] || palette.peach;

  const cardContent = (
    <article className={`flex flex-col gap-5 rounded-[26px] border border-[#f0e0cb] bg-white p-4 shadow-[0_12px_32px_rgba(107,73,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(107,73,26,0.14)] md:flex-row ${className}`}>
      <div className={`flex min-h-[136px] w-full items-center justify-center rounded-[18px] ${activeTone.shell} md:w-[148px]`}>
        {img ? (
          <img src={img} alt={title} className='h-full w-full rounded-[18px] object-cover' />
        ) : (
          <div className={`text-5xl ${activeTone.iconColor}`}>
            {icon || <FaFish />}
          </div>
        )}
      </div>
      <div className='flex min-w-0 flex-1 flex-col gap-3'>
        <div className='flex flex-col gap-3 md:flex-row md:items-start md:justify-between'>
          <div className='min-w-0'>
            <h3 className='text-[1.7rem] font-semibold leading-tight text-[#411d09]'>{title}</h3>
            <p className='mt-1 text-sm text-[#be9677]'>{tags.join(' • ')}</p>
          </div>
          <span className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-medium ${isOpen ? "bg-[#dff6e7] text-[#0d7c34]" : "bg-[#eef1f5] text-[#4c5561]"}`}>
            {isOpen ? "Open" : "Closed"}
          </span>
        </div>
        {description ? (
          <p className='max-w-[42rem] border-b border-dashed border-[#f0decb] pb-4 text-[1rem] leading-7 text-[#8b5d3d]'>
            {description}
          </p>
        ) : null}
        <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6e4424]'>
          {rating ? (
            <div className='flex items-center gap-1.5'>
              <FaStar className='text-[#efb232]' />
              <span>{reviews ? `${rating} (${reviews})` : rating}</span>
            </div>
          ) : null}
          {expectedTime ? (
            <div className='flex items-center gap-2'>
              <FaClock className='text-[#9a6439]' />
              <span>{expectedTime}</span>
            </div>
          ) : null}
          {deliveryFee ? (
            <div className='flex items-center gap-2'>
              <FaMotorcycle className='text-[#9a6439]' />
              <span>{deliveryFee}</span>
            </div>
          ) : expectedPrice ? (
            <div className='flex items-center gap-2'>
              <FaMotorcycle className='text-[#9a6439]' />
              <span>{`Rs ${expectedPrice}`}</span>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )

  return slug ? (
    <Link to={`/customer/restaurant/${slug}`} className="block">
      {cardContent}
    </Link>
  ) : (
    cardContent
  )
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
  export const MenuCard=({activeMenu=0})=>{
    return <>
    <div className='relative bg-[#4e2307] h-[18vh] w-[20vw] rounded-2xl shadow-xl pl-3'>
        <div className='absolute z-0 w-full h-full flex items-center justify-end-safe pr-20'>
          <img src={GloafIcon} className='opacity-30 rotate-25 '/>
        </div>
        <div className='relative z-10 w-full h-full flex flex-col justify-evenly'>
          <div className='text-[#f2ba58] font-medium flex flex-col  gap-4' >
            <p className=' text-lg '>Active Menu Items</p>
            <span className=' text-4xl '>{activeMenu}</span>
            <Link to='/partner/menu'>
            <div className='p-2 bg-[#f2ba58] rounded-full max-w-[50%] flex items-center gap-2 text-[#4e2307]'>
              Change Items { <FaArrowRight/>}
            </div>
            </Link>
          </div>
        </div>
    </div>
    </>
  }

  export const LiveOrderCard=()=>{
    return <>
    <div className='w-[62vw] h-[40vh] bg-white rounded-2xl shadow-xl'>
        <div className='w-full h-[15%] text-[#4e2307] flex  px-4 items-center justify-between'>
          <div className='text-xl font-medium flex items-center gap-3'>{<FaBowlFood/>}Live Orders</div>
          <Link to='/partner/order' ><div className='text-[#bb702e] p-2 rounded-full  hover:bg-[#fffbf2] hover:text-[#f2ba58] transition ease-in-out duration-300 flex gap-2 items-center cursor-pointer'>View All {<FaArrowRight/>}</div></Link>
        </div>
        <div className='w-full h-[10%] bg-[#fffbf2] text-[#b38e6e] '></div>
        <div></div>



    </div>
    </>
  }
  
  export const MenuAdderCard=()=>{
    return <>
    <div className='w-[20vw] h-[40vh] bg-white rounded-2xl shadow-xl'>
      <div className='w-full h-[15%] text-[#4e2307] flex  px-4 items-center justify-between'>
          <div className='text-xl font-medium flex items-center gap-3'>{<BsReceipt/>}Top Orders</div>
      </div>
      <div></div>
      <div className='w-full h-[20%] flex items-center justify-center'>
        <div >
          <NormalButton link='/partner/menu' write='Manage Full Menu' padding='10px' />
        </div>
      </div>
    
    </div>
    </>
  }

  export const SalesPerformanceCard=()=>{
    return <div className='h-[30vh] w-[62vw] bg-white rounded-2xl shadow-xl'>
        <div className='w-full h-[15%] text-[#4e2307] flex  px-4 items-center justify-between'>
          <div className='text-xl font-medium flex items-center gap-3'>{<BsGraphUp/>}This Week Sales</div>
          <Link to='/partner/info' ><div className='text-[#bb702e] p-2 rounded-full  hover:bg-[#fffbf2] hover:text-[#f2ba58] transition ease-in-out duration-300 flex gap-2 items-center cursor-pointer'>See Stats {<FaArrowRight/>}</div></Link>
        </div>
        <div>

        </div>
    </div>
  }
