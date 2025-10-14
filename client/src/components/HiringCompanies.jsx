import React from "react";
import ImageMarquee from "./marquee-slider/ImageMarquee";
import { marqueeImages_2 } from "../../types/Image";
import { marqueeImages_3 } from "../../types/Image";
function HiringCompanies({ noContent = false }) {
  return (
    <div className=" lg:px-50 md:px-20">
      {noContent ? null : (
        <div className="flex lg:justify-between md:flex-col lg:flex-row flex-row mt-20 mb-30">
          <div className="lg:w-2/3 md:w-full">
            <p className="lg:w-2/3 md:w-full  md:mb-10 mb-15 lg:mb-15 text-6xl">
              Our Esteemed Hiring Partners – Trusted by top MNCs and startups
              for talent
            </p>
            <p className="lg:w-2/3 md:w-full text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique cumque expedita rem. Suscipit, modi dicta atque quae,
              quia dignissimos molestiae necessitatibus ex fugit delectus error
              quod? Id modi alias molestias.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-full md:mt-5 bg-blue-300 border-1 lg:h-150 md:h-70 border-blue-600"></div>
        </div>
      )}

      <div className="mt-10">
        <ImageMarquee where={"right"} speed={100} />
        <ImageMarquee imageList={marqueeImages_3} where={"left"} speed={50} />
        <ImageMarquee imageList={marqueeImages_2} where={"right"} speed={100} />
      </div>
    </div>
  );
}

export default HiringCompanies;
