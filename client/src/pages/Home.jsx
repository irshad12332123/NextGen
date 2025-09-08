import React from "react";
import RBU_BANNER_IMAGE from "../assets/RBUbanner_home.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const announcementsLinks = [
    "Results should be decalared soon",
    "Give your test Today to avaiil",
    "Perform your best",
  ];

  return (
    <div className="mt-30 relative">
      <img src={RBU_BANNER_IMAGE} alt="RBU_banner" />

      <div className="fixed bottom-0 w-full h-15 bg-[#6786] flex items-center">
        {/* TITLE */}
        <div className="bg-[#3b454e] absolute z-999 h-full flex items-center justify-center p-2">
          <p className="text-white">ANNOUNCEMENT</p>
        </div>

        {/* ANNOUNCEMENTS */}
        <motion.div
          animate={{ x: ["100%", "-45%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex w-full whitespace-nowrap px-4 overflow-x-hidden absolute z-10"
        >
          {announcementsLinks.map((announcement, index) => (
            <Link
              key={index}
              to={""}
              className=" font-medium text-xl border-r-1 px-10"
            >
              {announcement}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
