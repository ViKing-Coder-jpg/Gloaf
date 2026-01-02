import React, { useEffect } from "react";
import { useState } from "react";

const ImageSlider = (props) => {
  const imageInfo = props.imgData;
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIdx) => {
        return prevIdx == imageInfo.length - 1 ? 0 : prevIdx + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [imageInfo.length]);

return (
  <div className="h-full w-full overflow-hidden relative font-[Poppins, sans-serif]">
    <div
      className="flex h-full transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${idx * 100}%)` }}
    >
      {imageInfo.map((img, i) => (
        <div key={i} className="min-w-full h-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-4">
            <div className="max-w-[80%] text-center">
              <h2 className="text-3xl md:text-4xl font-semibold">
                {img.imgTitle}
              </h2>
              <p className="mt-2 text-sm md:text-base">
                {img.imgText}
              </p>
            </div>
          </div>

          <img
            src={img.imgSrc}
            alt="slider"
            className="h-full w-full object-cover brightness-80"
          />
        </div>
      ))}
    </div>
  </div>
);

};
export default ImageSlider;
