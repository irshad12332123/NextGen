import React, { useRef } from "react";
import img_1 from "/images/img_1.jpg";
import img_2 from "/images/img_2.jpg";
import img_3 from "/images/img_3.jpg";
import img_4 from "/images/img_4.jpg";
import img_5 from "/images/img_5.jpg";
import img_6 from "/images/img_6.jpg";
import img_7 from "/images/img_7.jpg";
import { motion, useInView } from "framer-motion";
const GallerySection = () => {
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef);
  return (
    <div className="w-full hidden md:flex justify-center items-center">
      <motion.section
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
          <img src={img_1} alt="" loading="lazy" />
        </div>
        <div>
          <img src={img_2} alt="" loading="lazy" />
        </div>
        <div>
          <img src={img_3} alt="" loading="lazy" />
        </div>
        <div></div>
        <div>
          <img src={img_4} alt="" loading="lazy" />
        </div>
        <div></div>
        <div>
          <img src={img_5} alt="" loading="lazy" />
        </div>
        <div></div>
        <div></div>
        <div>
          <img src={img_6} alt="" loading="lazy" />
        </div>
        <div>
          <img src={img_7} alt="" loading="lazy" />
        </div>
        <div>
          <img src={img_7} alt="" loading="lazy" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </motion.section>
    </div>
  );
};

export default GallerySection;
