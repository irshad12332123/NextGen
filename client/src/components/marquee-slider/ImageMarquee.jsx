import React from "react";
import Marquee from "react-fast-marquee";
import { marqueeImages } from "../../../types/Image";
function ImageMarquee({ imageList = marqueeImages, speed, where = "left" }) {
  return (
    <div className=" flex flex-col gap-5 md:gap-10  border-t-1 border-b-1 border-gray-300">
      {imageList ? (
        <Marquee
          gradient={true}
          speed={speed ? speed : 50}
          pauseOnHover={true}
          className=""
          autoFill={true}
          direction={where}
        >
          {imageList.map((item, i) => (
            <div
              className={`flex gap-2 lg:p-5 md:p-3 p-2 md:w-50 w-20 justify-center ${
                i % 2 == 0 ? "bg-white" : "bg-[#F4F5F9]"
              }  border-r-1 border-gray-300 `}
            >
              <img
                src={item}
                alt={`item-${i}`}
                className="md:h-12 h-7 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      ) : null}
    </div>
  );
}

export default ImageMarquee;
