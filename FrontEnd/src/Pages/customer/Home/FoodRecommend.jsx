import React from "react";
import { FoodCard } from "../../../Components/Utilities/Cards";
import { homeDishRecommendations } from "../../../utils/constants";

const FoodRecommend = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className=" w-full h-[12vh] flex flex-col justify-center p-3">
        <span className="text-[#4e2307] text-3xl font-medium">
          Your Gloaf Picks
        </span>
        <span className="text-[#a87a56] text-xl font-light">
          Recomendation based on recent order
        </span>
      </div>
      <div className="w-full h-[50vh] px-5 pb-5 flex flex-col justify-center">
        <div className="h-full flex flex-col overflow-x-auto overflow-y-hidden justify-center">
          <div className="flex h-full w-max items-start gap-4 pr-4 justify-center">
            {homeDishRecommendations.map((ele, key) => {
              return <FoodCard key={key} data={{ ...ele, compact: true, className: "min-w-[280px]" }} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRecommend;
