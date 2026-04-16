import React from "react";
import { RestroCard } from "../../../Components/Utilities/Cards";
import { homeRestaurantRecommendations } from "../../../utils/constants";

const RestroRecommend = () => {
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
      <div className="w-full h-[35vh] px-5 pb-5">
        <div className="h-full overflow-x-auto overflow-y-hidden">
          <div className="flex h-full w-max items-start gap-4 pr-4">
            {homeRestaurantRecommendations.map((ele, key) => {
              return <RestroCard key={key} data={ele}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroRecommend;
