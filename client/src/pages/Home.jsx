import React, { useRef, lazy, Suspense } from "react";
import { LightGlow } from "@/components/animated-components/LightGlow";
import Loader from "@/components/Loader";
import LazySection from "@/components/common/LazySection";

const LandingPage = lazy(() => import("@/components/home/LandingPage"));
const EventsSection = lazy(() => import("@/components/home/EventsSection"));
const ReviewsSection = lazy(() => import("@/components/home/ReviewsSection"));
const CourseSection = lazy(() => import("@/components/home/CourseSection"));
const GallerySection = lazy(() => import("@/components/home/GallerySection"));

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
      <LightGlow lightRef={lightRef} />

      <Suspense fallback={<Loader />}>
        <LazySection>
          <LandingPage />
        </LazySection>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LazySection>
          <CourseSection />
        </LazySection>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LazySection>
          <EventsSection />
        </LazySection>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LazySection>
          <GallerySection />
        </LazySection>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LazySection>
          <ReviewsSection />
        </LazySection>
      </Suspense>
    </div>
  );
};

export default Home;
