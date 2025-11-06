import React, { useRef } from "react";
import { motion } from "framer-motion";
import CustomBtn from "../CustomBtn";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const LandingPageRef = useRef(null);
  const marqueeTitles = [
    { title: "25+", description: "Years of Excellence" },
    { title: "20,000+", description: "Active Students" },
    { title: "65+", description: "Countries Represented" },
    { title: "150+", description: "Academic Programs" },
    { title: "1,000+", description: "Research Publications" },
    { title: "A+", description: "NAAC Accreditation" },
  ];

  return (
    <div className=" md:pt-30 2xl:pt-40  w-full h-screen">
      <div className="relative flex justify-center items-center rounded-2xl h-full w-full overflow-hidden">
        <motion.div
          ref={LandingPageRef}
          initial={{ opacity: 0, width: 0, height: 0 }}
          animate={{ opacity: 1, width: "100%", height: "60%" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className=" absolute md:top-0 top-20 bg-gradient-to-br mix-blend-screen blur-2xl from-[rgba(61,91,138,1)] to-[rgba(29,29,40,1)]  h-1/2 w-full rounded-br-[100%] z-10"
        ></motion.div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-seasalt text-center text-4xl md:text-7xl">
            Shape the Future{" "}
            <span style={{ fontFamily: "Hurricane" }} className=" font-light ">
              with
            </span>
            &nbsp;
            <span className="text-wheat font-bold"> Next Gen</span>
          </p>
          <p className="text-celestial-blue">
            Where innovation meets Education
          </p>
          <div className=" h-full  flex gap-5 justify-center items-center">
            <Link to={"/courses"}>
              <CustomBtn type="primary" title={"Explore Courses"} />
            </Link>
            <Link to="/apply">
              <CustomBtn type="secondary" title={"Apply Now"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
