import React from 'react'
import DescriptionCard from '../../Components/Utilities/DescriptionCard'
import { FaShop } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { MdDesktopWindows } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";

const ChoiceGloaf = () => {
    const features = [
  {
    img: <FaShop />,
    title: "Curated Selection",
    detail:
      "Only the best local bakeries and kitchens selected for you. We taste-test everything first."
  },
  {
    img: <MdDeliveryDining />,
    title: "Swift Delivery",
    detail:
      "Hot and fresh orders delivered right on time, every time. Our insulated bags keep the warmth in."
  },
  {
    img: <MdDesktopWindows />,
    title: "Seamless Experience",
    detail:
      "Order your favorites in just three taps with our easy app. Reordering your daily bread is instant."
  },
//   {
//   img: <FaPizzaSlice />,
//   title: "Freshly Made Food",
//   detail: "Fresh food crafted with quality ingredients, every time."
// }
];
  return (
    <div className=' flex flex-col gap-5 h-full w-full justify-center'>
        <div className=' h-[10%] text-4xl p-5 font-medium'>
            <span>Why choose Gloaf ?</span>
        </div>
        <div className=' h-[12%] pl-5 font-medium text-[#404662]'>
            <p>Gloaf is more than a platform—it’s a refined experience built around you.<br/>
It connects you effortlessly to great food and trusted places with clarity and elegance.</p>
        </div>
        <div className=' w-full h-[40%] p-2 flex justify-evenly'>
            {
                features.map((ele)=>{
                    return <DescriptionCard img={ele.img} title={ele.title} detail={ele.detail}/>
                })
            }
        </div>
    </div>
  )
}

export default ChoiceGloaf