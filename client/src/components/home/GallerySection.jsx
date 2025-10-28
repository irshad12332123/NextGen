import React, { useRef } from "react";
import img_1 from "/images/img_1.jpg";
import img_2 from "/images/img_2.jpg";
import img_3 from "/images/img_3.jpg";
import img_4 from "/images/img_4.jpg";
import img_5 from "/images/img_5.jpg";
import img_6 from "/images/img_6.jpg";
import img_7 from "/images/img_7.jpg";
import { motion, useInView } from "framer-motion";
import BlurImage from "../common/BlurImage";
const GallerySection = () => {
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef);
  return (
    <div className="w-full hidden md:flex justify-center items-center">
      <div
        className="collage"
        ref={galleryRef}
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          duration: 1,
        }}
      >
        <div>
          <BlurImage src={img_1} alt={"image-1"} />
        </div>
        <div>
          <BlurImage src={img_2} alt={"image_2"} />
        </div>
        <div>
          <BlurImage src={img_3} alt={"image_3"} />
        </div>
        <div></div>
        <div>
          <BlurImage src={img_4} alt={"image_4"} />
        </div>
        <div></div>
        <div>
          <BlurImage src={img_5} alt={"image_5"} />
        </div>
        <div></div>
        <div></div>
        <div>
          <BlurImage src={img_6} alt={"image_6"} />
        </div>
        <div>
          <BlurImage src={img_7} alt={"image_7"} />
        </div>
        <div>
          <BlurImage src={img_2} alt={"image_2"} />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
