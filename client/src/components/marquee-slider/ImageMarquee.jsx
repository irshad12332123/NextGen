import React from "react";
import Marquee from "react-fast-marquee";
import { marqueeImages } from "../../../types/Image";
function ImageMarquee({ imageList = marqueeImages, speed, where }) {
  return (
    <div className=" flex flex-col gap-10  border-t-1 border-b-1 border-gray-300">
      {imageList ? (
        <Marquee
          gradient={true}
          speed={speed ? speed : 50}
          pauseOnHover={true}
          className=""
          autoFill={true}
          direction={where ? where : "left"}
        >
          {imageList.map((item, i) => (
            <div
              className={`flex gap-2 p-5 w-50 justify-center ${
                i % 2 == 0 ? "bg-white" : "bg-[#F4F5F9]"
              }  border-r-1 border-gray-300 `}
            >
              <img
                src={item}
                alt={`item-${i}`}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      ) : null}
    </div>
  );
}

export default ImageMarquee;
