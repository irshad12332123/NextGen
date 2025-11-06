import React, { useRef, lazy, Suspense, useCallback } from "react";
import { LightGlow } from "@/components/animated-components/LightGlow";
import Loader from "@/components/Loader";
import LazySection from "@/components/common/LazySection";

const LandingPage = lazy(() => import("@/components/home/LandingPage"));
const EventsSection = lazy(() => import("@/components/home/EventsSection"));
const ReviewsSection = lazy(() => import("@/components/home/ReviewsSection"));
const CourseSection = lazy(() => import("@/components/home/CourseSection"));
const GallerySection = lazy(() => import("@/components/home/GallerySection"));

const Home = () => {
  const containerRef = useRef(null);
  // const lightRef = useRef(null);
  // const handleMouseMove = useCallback((e) => {
  //   const { clientX, clientY } = e;

  //     const light = lightRef.current;
  //     const container = containerRef.current;

  //     if (!light || !container) return;

  //     const rect = container.getBoundingClientRect();
  //     const x = clientX - rect.left;
  //     const y = clientY - rect.top;

  //     light.style.transform = `translate(${x}px, ${y}px)`;
  //     light.style.opacity = 1;
  // }, []);
  return (
    <div
      ref={containerRef}
      // onMouseMove={handleMouseMove}
      className="relative px-5 2xl:px-70 bg-raisin-black min-h-screen w-full"
    >
      {/* <LightGlow lightRef={lightRef} /> */}

      <Suspense fallback={<Loader />}>
        <LandingPage />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <CourseSection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <EventsSection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <GallerySection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ReviewsSection />
      </Suspense>
    </div>
  );
};

export default Home;
