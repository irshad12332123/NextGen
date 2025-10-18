import React, { useRef, useEffect } from "react";
import RankingCard from "@/components/cards/RankingCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RankingSection = () => {
  const rankingSectionRef = useRef(null);
  const parentRankSection = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      rankingSectionRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: rankingSectionRef.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div
      className="w-full h-full lg:px-50 px-2 md:mt-20 bg-[#CAD5E2] py-10"
      ref={parentRankSection}
    >
      <div className="flex items-center justify-center mb-10">
        <p className="text-center text-xl md:text-3xl font-bold max-w-2xl">
          Proudly Distinguished by Our Prestigious Rankings and Accreditations
        </p>
      </div>
      <div
        ref={rankingSectionRef}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-center gap-2"
      >
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
      </div>
    </div>
  );
};

export default RankingSection;
