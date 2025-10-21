import React from "react";

import Announcements from "../components/Announcements";
import CustomBtn from "../components/CustomBtn";
import ImageCard from "../components/cards/ImageCard";
import HiringCompanies from "../components/HiringCompanies";
import LandingPage from "@/components/home/LandingPage";
import RankingSection from "@/components/home/RankingSection";
import CarouselSection from "@/components/home/CarouselSection";
import { EventsSection } from "@/components/home/EventsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
const Home = () => {
  return (
    <div className="mt-30">
      {/* Landing Page */}
      <LandingPage />
      <div className="h-full w-full flex flex-col">
        {/* Ranking Cards */}
        <RankingSection />
        {/* Carousel */}
        <CarouselSection />
        {/* Hiring componenet */}
        <HiringCompanies />
      </div>
      {/* Events */}
      <EventsSection />
      {/* Facilities */}
      {/* <FacilitiesSection /> */}
      {/* Review Section */}
      <ReviewsSection />
      {/* Call to action */}
      <div className=" h-full  flex flex-col items-center justify-center mb-20">
        <ImageCard />
      </div>
      {/* Announcements */}
      <Announcements />
    </div>
  );
};

export default Home;
