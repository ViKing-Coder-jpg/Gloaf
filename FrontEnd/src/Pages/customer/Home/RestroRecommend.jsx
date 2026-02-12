import React, { useState } from "react";
import { RestroCard } from "../../../Components/Utilities/Cards";

const RestroRecommend = () => {
  const [recom, setRecom] = useState([]);
    
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <div className=" w-full h-[15vh] flex flex-col justify-center p-5  ">
        <span className="text-[#4e2307] text-3xl font-medium">
          Top Rated Near You
        </span>
        <span className="text-[#a87a56] text-xl font-light">
          Highly Rated Restaurants by neighbours
        </span>
      </div>
      <div className=" w-full h-[35vh] flex flex-col items-center justify-center">
        <div className="w-full h-full overflow-x-auto overflow-y-hidden flex flex-col justify-center">
          <div className="inline-flex space-x-4 scroll-smooth w-fit px-5">
            {recom.map((ele, key) => {
              return <RestroCard key={key} data={ele}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroRecommend;
