import React, { useState } from "react";
import { FoodCard } from "../../../Components/Utilities/Cards";

const FoodRecommend = () => {
  const [recom, setRecom] = useState([]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className=" w-full h-[15vh] flex flex-col justify-center p-5">
        <span className="text-[#4e2307] text-3xl font-medium">
          Your Gloaf Picks
        </span>
        <span className="text-[#a87a56] text-xl font-light">
          Recomendation based on recent order
        </span>
      </div>
      <div className=" w-full h-[45vh] flex flex-col items-center justify-center">
        <div className="w-full h-full overflow-x-auto overflow-y-hidden flex flex-col justify-center">
          <div className="inline-flex space-x-4 scroll-smooth w-fit p-12 ">
            {recom.map((ele, key) => {
              return <FoodCard key={key} data={ele} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRecommend;
