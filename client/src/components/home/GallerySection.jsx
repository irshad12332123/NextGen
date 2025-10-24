import React from "react";
import img_1 from "/images/img_1.jpg";
import img_2 from "/images/img_2.jpg";
import img_3 from "/images/img_3.jpg";
import img_4 from "/images/img_4.jpg";
import img_5 from "/images/img_5.jpg";
import img_6 from "/images/img_6.jpg";
import img_7 from "/images/img_7.jpg";
export const GallerySection = () => {
  return (
    <div className="w-full hidden md:flex justify-center items-center">
      <section className="collage">
        <div>
          <img src={img_1} alt="" />
        </div>
        <div>
          <img src={img_2} alt="" />
        </div>
        <div>
          <img src={img_3} alt="" />
        </div>
        <div></div>
        <div>
          <img src={img_4} alt="" />
        </div>
        <div></div>
        <div>
          <img src={img_5} alt="" />
        </div>
        <div></div>
        <div></div>
        <div>
          <img src={img_6} alt="" />
        </div>
        <div>
          <img src={img_7} alt="" />
        </div>
        <div>
          <img src={img_7} alt="" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};
