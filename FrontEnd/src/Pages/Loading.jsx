import React from "react";
import Gloaf_Icon from "../assets/Gloaf_icon.png";

const Loading = () => {
  return (
    <div className="h-screen w-screen bg-[#F3CEA2]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
          <img
            src={Gloaf_Icon}
            alt="Gloaf icon"
            className="block h-10 w-10 animate-spin"
          />
        </div>
        <div className="text-xl font-medium text-[#4D2308]">
          Loading{" "}
          <span className="inline-flex w-6 justify-start">
            <span className="animate-pulse delay-0">.</span>
            <span className="animate-pulse [animation-delay:1s]"> . </span>
            <span className="animate-pulse [animation-delay:2s]"> . </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
