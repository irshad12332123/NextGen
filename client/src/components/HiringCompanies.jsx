import React from "react";
import ImageMarquee from "./marquee-slider/ImageMarquee";
import { marqueeImages_2 } from "../../types/Image";
import { marqueeImages_3 } from "../../types/Image";
function HiringCompanies() {
  return (
    <div className=" px-50">
      <div className="flex justify-between mt-20 mb-30">
        <div className="w-2/3">
          <p className="w-2/3 mb-15 text-6xl">
            Our Esteemed Hiring Partners – Trusted by top MNCs and startups for
            talent
          </p>
          <p className="w-2/3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            cumque expedita rem. Suscipit, modi dicta atque quae, quia
            dignissimos molestiae necessitatibus ex fugit delectus error quod?
            Id modi alias molestias.
          </p>
        </div>
        <div className="w-1/2 bg-blue-300 border-1 h-150 border-blue-600"></div>
      </div>
      <div className="mt-10">
        <ImageMarquee where={"right"} speed={100} />
        <ImageMarquee imageList={marqueeImages_3} where={"left"} speed={50} />
        <ImageMarquee imageList={marqueeImages_2} where={"right"} speed={100} />
      </div>
    </div>
  );
}

export default HiringCompanies;
