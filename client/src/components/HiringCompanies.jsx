import React, { useEffect, useRef } from "react";
import ImageMarquee from "./marquee-slider/ImageMarquee";
import { marqueeImages_2, marqueeImages_3 } from "../../types/Image";
import { delay, motion } from "framer-motion";
import { useInView } from "framer-motion";

function HiringCompanies({ noContent = false }) {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const paraRef = useRef(null);
  const slideRightRef = useRef(null);
  const textSlideRef = useRef(null);
  const img =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAVqJm9rCnjeFHZDuiBH62dkp-thMxOY8UFmRn_PrXTIDMCs-clbUFSLJ6IFRZGzSIvkNW76Yc02dgCzD4US54UForfXBrIcQ3TX2zJ-D8It5IKIjMQAJMA2a2jScXRhvWnRXiI58k568j_b3q0RaR7Cd2U6P8KgItrUJLpYI-5AihB4-ieeOqpzm93_LOf_9rPi-3q3XbfUMkqBoi_QZi69RE-8rARC9jh303hjzWIZNbfEc2TSh7zuXpnUj1KlBiv4Qo8g-16XMM";

  const paraIsInView = useInView(paraRef);
  const slideRightIsInView = useInView(slideRightRef);
  const textSlideIsInView = useInView(textSlideRef);

  return (
    <div className="px-5 md:px-20 " ref={containerRef}>
      {!noContent && (
        <div className="flex lg:justify-between flex-col lg:flex-row mt-20 md:mb-30">
          <div className="lg:w-2/3 md:w-full">
            <motion.p
              ref={textSlideRef}
              initial={{ opacity: 0, x: -150 }}
              animate={textSlideIsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="lg:w-2/3 w-full mb-2 md:mb-10 lg:mb-15 text-2xl md:text-5xl"
            >
              Our Esteemed Hiring Partners – Trusted by top MNCs and startups
              for talent
            </motion.p>
            <motion.p
              ref={paraRef}
              initial={{ opacity: 0, y: 50 }}
              animate={paraIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="lg:w-2/3 md:w-full text-gray-500 text-xs md:text-xl"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique cumque expedita rem. Suscipit, modi dicta atque quae,
              quia dignissimos molestiae necessitatibus ex fugit delectus error
              quod? Id modi alias molestias.
            </motion.p>
          </div>
          <motion.div
            ref={slideRightRef}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={slideRightIsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center center",
            }}
            className="lg:w-1/2 md:w-full mt-5  lg:h-150 h-70 shadow-md"
          ></motion.div>
        </div>
      )}

      <div ref={marqueeRef} className="mt-5 md:mt-10 marquee-open">
        <ImageMarquee where={"right"} speed={100} />
        <ImageMarquee imageList={marqueeImages_3} where={"left"} speed={50} />
        <ImageMarquee imageList={marqueeImages_2} where={"right"} speed={100} />
      </div>
    </div>
  );
}

export default HiringCompanies;
