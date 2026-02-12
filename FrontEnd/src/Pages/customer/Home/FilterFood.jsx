import React from 'react'
import { FilterCard } from '../../../Components/Utilities/Cards'
import { FaBurger } from 'react-icons/fa6'
import Asian from "../../../assets/Filter Icon/Asian.png"
import Burger from "../../../assets/Filter Icon/Burger.png";
import Cafe from "../../../assets/Filter Icon/Cafe.png";
import Cake from "../../../assets/Filter Icon/Cake.png";
import Continental from "../../../assets/Filter Icon/Continental.png";
import Healthy from "../../../assets/Filter Icon/Healthy.png";
import MiddleEastern from "../../../assets/Filter Icon/Middle-eastern.png";
import NonVeg from "../../../assets/Filter Icon/Non-veg.png";
import NorthIndian from "../../../assets/Filter Icon/North-Indian.png";
import Pizza from "../../../assets/Filter Icon/Pizza.png";
import Seafood from "../../../assets/Filter Icon/Seafood.png";
import SouthIndian from "../../../assets/Filter Icon/South-Indian.png";

const FileterOptionArray=[
    {
    name: "Asian",
    img: <img className=' scale-70 rounded-full' src={Asian} alt="Asian" />,
    clr: "#E53935",
    bg: "#FDECEA",
  },
  {
    name: "Burger",
    img: <img className=' scale-70 rounded-full' src={Burger} alt="Burger" />,
    clr: "#FB8C00",
    bg: "#FFF3E0",
  },
  {
    name: "Cafe",
    img: <img className=' scale-70 rounded-full' src={Cafe} alt="Cafe" />,
    clr: "#6D4C41",
    bg: "#EFE6E2",
  },
  {
    name: "Cake",
    img: <img className=' scale-70 rounded-full' src={Cake} alt="Cake" />,
    clr: "#D81B60",
    bg: "#FCE4EC",
  },
  {
    name: "Continental",
    img: <img className=' scale-70 rounded-full' src={Continental} alt="Continental" />,
    clr: "#5E35B1",
    bg: "#EDE7F6",
  },
  {
    name: "Healthy",
    img: <img className=' scale-70 rounded-full' src={Healthy} alt="Healthy" />,
    clr: "#43A047",
    bg: "#E8F5E9",
  },
  {
    name: "Middle Eastern",
    img: <img className=' scale-70 rounded-full' src={MiddleEastern} alt="Middle Eastern" />,
    clr: "#00897B",
    bg: "#E0F2F1",
  },
  {
    name: "Non-Veg",
    img: <img className=' scale-70 rounded-full' src={NonVeg} alt="Non Veg" />,
    clr: "#C62828",
    bg: "#FBE9E7",
  },
  {
    name: "North Indian",
    img: <img className=' scale-70 rounded-full' src={NorthIndian} alt="North Indian" />,
    clr: "#EF6C00",
    bg: "#FFF3E0",
  },
  {
    name: "Pizza",
    img: <img className=' scale-70 rounded-full' src={Pizza} alt="Pizza" />,
    clr: "#D84315",
    bg: "#FBE9E7",
  },
  {
    name: "Seafood",
    img: <img className=' scale-70 rounded-full' src={Seafood} alt="Seafood" />,
    clr: "#0277BD",
    bg: "#E1F5FE",
  },
  {
    name: "South Indian",
    img: <img className=' scale-70 rounded-full' src={SouthIndian} alt="South Indian" />,
    clr: "#2E7D32",
    bg: "#E8F5E9",
  },
]
const FilterFood = () => {
  return (
    <div>
        <div className='m-6 flex '>
            <div className='text-[#4e2307] w-[50%] h-[5vh] text-3xl font-medium'><span>Explore Cuisines</span></div>
        </div>
        <div className='w-full h-[95vh] overflow-x-auto overflow-y-hidden '>
        <div className='inline-flex space-x-4 scroll-smooth w-fit h-full p-7 gap-4'>
            {FileterOptionArray.map((ele,key)=>{
                return <FilterCard img={ele.img} clr={ele.clr} bg={ele.bg} text={ele.name} key={key}/>
            })}

        </div>

        </div>
    </div>
  )
}

export default FilterFood