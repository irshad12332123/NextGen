import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Announcements() {
  const announcementsLinks = [
    "Results should be decalared soon",
    "Checkout upcoming Events",
    "RBUSet 2026",
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full h-10 md:h-15 bg-raisin-black shadow-raisin rounded-md flex items-center z-50">
      {/* ANNOUNCEMENTS */}
      <motion.div
        animate={{ x: ["100%", "-45%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="flex w-full whitespace-nowrap px-4 z-50 text-seasalt"
      >
        {announcementsLinks.map((announcement, index) => (
          <Link
            key={index}
            to={""}
            style={{ fontFamily: "Iceberg" }}
            className=" md:text-xl text-xs border-r italic border-[#f9efe437] px-10"
          >
            {announcement}
          </Link>
        ))}
      </motion.div>
      {/* The showcase of the campus section */}
    </div>
  );
}

export default Announcements;
