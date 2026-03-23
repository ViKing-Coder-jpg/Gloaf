import React from "react";
import {
  IconHolder,
  Line,
  Logo,
  SidebarButton,
  ToggleDropdown,
} from "../Utilities/BasicUtils";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { FaChartSimple, FaShop } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const PartnerSidebar = ({ Name = "Restaurant Name", img }) => {
  return (
    <div className="w-[15vw] h-full bg-[#4e2307] flex flex-col ">
      <div className="pl-4 pt-4 text-white">
        <Logo />
      </div>
      <Line color="#5e3820" />
      <div className="h-[80vh] p-4 flex flex-col gap-4">
        <SidebarButton
          height={"35px"}
          width={"100%"}
          write="Overview"
          img={<BsGrid1X2Fill />}
          link="home"
        />
        <SidebarButton
          height={"35px"}
          width={"100%"}
          write="Orders"
          img={<IoReceipt />}
          link="order"
        />
        <SidebarButton
          height={"35px"}
          width={"100%"}
          write="Menu"
          img={<GiKnifeFork />}
          link="menu"
        />
        <SidebarButton
          height={"35px"}
          width={"100%"}
          write="Analytics"
          img={<FaChartSimple />}
          link="info"
        />
        <SidebarButton
          height={"35px"}
          width={"100%"}
          write="Review"
          img={<FaStar />}
          link="review"
        />
      </div>
      <Line color="#5e3820" />
      <div className="flex justify-center items-center h-[10vh] ">
        <ToggleDropdown position="top" >
          <div className="h-full flex items-center gap-3 cursor-pointer">
            <IconHolder
              img={img ? img : <FaShop />}
              bg="#62330e"
              border="#f2b93d"
              ic="#f2b93d"
            />
            <div>
              <span className="text-md text-white">{Name}</span>
              <p className="text-[#937869] text-xs">Manage Account</p>
            </div>
          </div>
        </ToggleDropdown>
      </div>
    </div>
  );
};

export default PartnerSidebar;
