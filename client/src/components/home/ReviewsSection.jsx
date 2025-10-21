import React, { useRef } from "react";
import ScrollerContainer from "@/components/ScrollerContainer";
import ReviewCard from "@/components/cards/ReviewCard";
import { motion, useInView } from "framer-motion";
const ReviewsSection = () => {
  const reviewRef = useRef(null);
  const reviewIsInView = useInView(reviewRef);
  return (
    <motion.div
      ref={reviewRef}
      initial={{ opacity: 0 }}
      animate={reviewIsInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full h-full md:mt-10 mt-5  md:mb-10  flex flex-col px-5 md:px-20 xl:px-50"
    >
      <div className="items-center justify-center">
        <p className="md:text-4xl text-xl text-blue-600">
          Real voices. Real stories. Real impact.
        </p>
        <p className=" text-[#2d2d2d] mt-2 md:text-xl text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </p>

        <div className="w-full md:mb-10  md:bg-gray-50">
          <ScrollerContainer Card={ReviewCard} length={10} />
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewsSection;
