import React, { useEffect, useRef } from "react";
import RankingCard from "@/components/cards/RankingCard";
import { motion, useInView } from "framer-motion";

const RankingSection = () => {
  const rankingSectionRef = useRef(null);
  const textSlideRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const textIsInView = useInView(textSlideRef);
  return (
    <motion.div
      className="w-full h-full lg:px-20 px-2 md:mt-20 bg-[#CAD5E2] py-10"
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-center mb-10">
        <motion.p
          ref={textSlideRef}
          initial={{ opacity: 0, x: -150 }}
          animate={textIsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center text-xl md:text-3xl font-bold max-w-2xl"
        >
          Proudly Distinguished by Our Prestigious Rankings and Accreditations
        </motion.p>
      </div>
      <div
        ref={rankingSectionRef}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-center gap-2"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <RankingCard key={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default RankingSection;
