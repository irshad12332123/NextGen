import React, { useRef } from "react";

import LandingPage from "@/components/home/LandingPage";
import { EventsSection } from "@/components/home/EventsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CourseSection from "@/components/home/CourseSection";
import { LightGlow } from "@/components/animated-components/LightGlow";
import { GallerySection } from "@/components/home/GallerySection";
const Home = () => {
  const lightRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const light = lightRef.current;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
    light.style.opacity = 1;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative px-5 2xl:px-70 bg-raisin-black min-h-screen w-full"
    >
      {/* GLOW */}
      <LightGlow lightRef={lightRef} />
      {/* Landing Page */}
      <LandingPage />
      {/* Cards course */}
      <CourseSection />
      <EventsSection />
      <GallerySection />
      <ReviewsSection />
    </div>
  );
};

export default Home;
