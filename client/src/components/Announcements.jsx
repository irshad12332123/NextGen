import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Announcements() {
  const announcementsLinks = [
    "Results should be decalared soon",
    "Give your test Today to avaiil",
    "Perform your best",
  ];
  return (
    <div className="fixed bottom-0 w-full h-15 bg-[#68737f] flex items-center z-50">
      {/* TITLE */}
      <div className="bg-[#3b454e] absolute z-999 h-full flex items-center justify-center p-2">
        <p className="text-white">ANNOUNCEMENT</p>
      </div>
      {/* ANNOUNCEMENTS */}
      <motion.div
        animate={{ x: ["100%", "-45%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="flex w-full whitespace-nowrap px-4 z-50 text-white"
      >
        {announcementsLinks.map((announcement, index) => (
          <Link
            key={index}
            to={""}
            className=" font-medium text-xl border-r px-10"
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
