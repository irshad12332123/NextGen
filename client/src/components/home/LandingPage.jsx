import React, { useEffect, useRef } from "react";
import RBU_BANNER_IMAGE from "@/assets/RBUbanner_home.webp";
import RBU_BANNER_MOBILE_IMAGE from "@/assets/RBUmobile-banner.webp";
import MarqueeSlider from "@/components/marquee-slider/TextMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const LandingPage = () => {
  const LandingPageRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      LandingPageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, duration: 0.55, scale: 1 }
    );
  }, []);
  const marqueeTitles = [
    {
      title: "25+",
      description: "Years of Excellence",
    },
    {
      title: "20,000+",
      description: "Active Students",
    },
    {
      title: "65+",
      description: "Countries Represented",
    },
    {
      title: "150+",
      description: "Academic Programs",
    },
    {
      title: "1,000+",
      description: "Research Publications",
    },
    {
      title: "A+",
      description: "NAAC Accreditation",
    },
  ];
  return (
    <div className="min-h-full w-full " ref={LandingPageRef}>
      <img
        src={RBU_BANNER_IMAGE}
        alt="RBU_banner"
        className="md:block hidden h-full"
        loading="lazy"
      />
      <img
        src={RBU_BANNER_MOBILE_IMAGE}
        alt="RBU_banner"
        className="block md:hidden h-full"
        loading="lazy"
      />
      <MarqueeSlider titlesList={marqueeTitles} />
    </div>
  );
};

export default LandingPage;
