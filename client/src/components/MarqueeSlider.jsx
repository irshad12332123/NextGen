import React from "react";
import Marquee from "react-fast-marquee";
import image from "../assets/company-logo/accenture.svg";
function MarqueeSlider({ images, titlesList }) {
  return (
    <div className="bg-[#012F6D] text-white flex flex-col gap-10">
      {images ? (
        <Marquee
          gradient={true}
          speed={100}
          pauseOnHover={true}
          className=""
          autoFill={true}
        >
          {images.map((image, i) => (
            <img src={image} className=" mr-25 w-12" />
          ))}
        </Marquee>
      ) : null}
      {titlesList ? (
        <Marquee
          gradient={true}
          speed={50}
          pauseOnHover={true}
          className=""
          autoFill={true}
          direction="right"
        >
          {titlesList.map((item, i) => (
            <div className="flex gap-2 p-5 items-center mr-50">
              <p className="text-3xl">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </Marquee>
      ) : null}
    </div>
  );
}

export default MarqueeSlider;
