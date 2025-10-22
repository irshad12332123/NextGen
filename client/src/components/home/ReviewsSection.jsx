import React, { useRef } from "react";
import ScrollerContainer from "@/components/ScrollerContainer";
import ReviewCard from "@/components/cards/ReviewCard";
import { motion, useInView } from "framer-motion";

const ReviewsSection = () => {
  const reviewDetails = [
    {
      review:
        "Avademy provided me with the perfect launchpad for my career in tech. The hands-on projects and brilliant faculty made all the difference.",
      name: "Jessica Miller",
      course: "B.Tech in Computer Science, Class of 2023",
    },
    {
      review:
        "The collaborative environment and state-of-the-art labs at Avademy are unparalleled. I felt prepared for the industry from day one.",
      name: "David Chen",
      course: "B.Tech in Mechanical Engineering, Class of 2022",
    },
  ];
  const reviewRef = useRef(null);
  const reviewIsInView = useInView(reviewRef);
  return (
    <div className="md:mt-20 xl:mt-30 2xl:mt-40 flex flex-col items-center ">
      <p className="md:text-3xl  text-seasalt">Success Student Stories</p>
      <div className="grid grid-cols-1 md:gap-6 md:mb-30 md:mt-10 my-5 md:grid-cols-2 xl:grid-cols-2">
        {reviewDetails.map((review, i) => (
          <ReviewCard
            key={i}
            review={review.review}
            name={review.name}
            course={review.course}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
