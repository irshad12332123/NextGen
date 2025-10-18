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
  const facilities = [
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      title: "Mountains Library",
      content: "World-class digital & physical library surrounded by nature.",
      link: "/facilities/library",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Desert Labs",
      content: "Advanced labs for hands-on experiments in a serene setting.",
      link: "/facilities/labs",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Beach Sports",
      content: "Modern sports infrastructure near the beach for students.",
      link: "/facilities/sports",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      title: "Forest Museums",
      content: "Explore art, history, and culture in a forest-inspired museum.",
      link: "/facilities/museums",
    },
    {
      src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
      title: "Ocean Plantation Drive",
      content: "Join community drives to make our environment greener.",
      link: "/facilities/plantation-drive",
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Waterfall Student Life",
      content: "Experience vibrant campus life surrounded by waterfalls.",
      link: "/facilities/student-life",
    },
  ];





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
      <FacilitiesSection />
      {/* Review Section */}
      <ReviewsSection />
      {/* Call to action */}
      <div className=" h-full p-5 flex flex-col items-center justify-center mb-20">
        <ImageCard />
      </div>
      {/* Announcements */}
      <Announcements />
    </div>
  );
};

export default Home;
