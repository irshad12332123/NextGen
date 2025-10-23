import { motion } from "framer-motion";
import React from "react";

const DrawingOval = ({ color = "white", strokeWidth = 2, position = null }) => {
  return (
    <motion.svg
      className={`absolute lg:w-150 md:w-70 w-50 blur-[1px] lg:blur-[6px] ${
        true && position
      }`}
      viewBox="0 0 200 100"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <motion.ellipse
        cx="100"
        cy="50"
        rx="90"
        ry="40"
        strokeDasharray="565.48" // 2π√((rx^2 + ry^2)/2)
        strokeDashoffset="565.48"
        animate={{ strokeDashoffset: 0 }}
        transition={{
          strokeDashoffset: { duration: 2, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 4, ease: "linear" },
        }}
        style={{ originX: "50%", originY: "50%" }}
      />
    </motion.svg>
  );
};

export default DrawingOval;
