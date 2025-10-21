import React from "react";
import { motion } from "motion/react";
function BlobAnimation({ x, y, scale, duration, positionStyles }) {
  return (
    <motion.div
      animate={{
        x: x,
        y: y,
        scale: scale,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute -z-10 mix-blend-multiply rounded-full filter blur-2xl md:w-50 md:h-50 h-20 w-20 ${positionStyles} `}
    ></motion.div>
  );
}

export default BlobAnimation;
