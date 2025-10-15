import React from "react";
import RBU_BANNER_IMAGE from "../assets/RBUbanner_home.webp";
import RBU_BANNER_MOBILE_IMAGE from "../assets/RBUmobile-banner.webp";
import Announcements from "../components/Announcements";
import CustomBtn from "../components/CustomBtn";
import EventCard from "../components/cards/EventCard";
import ReviewCard from "../components/cards/ReviewCard";
import ImageCard from "../components/cards/ImageCard";
import Carousel from "../components/Carousel";
import RankingCard from "../components/cards/RankingCard";
import MarqueeSlider from "../components/marquee-slider/TextMarquee";
import HiringCompanies from "../components/HiringCompanies";
import CustomCard from "../components/cards/CustomCard";
import ScrollerContainer from "@/components/ScrollerContainer";
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

  const cardDetails = [
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      link: "Explore Library",
      title: "Mountains Library",
      content: "Read and study in a serene mountain library environment.",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      link: "Visit Labs",
      title: "Desert Labs",
      content: "Conduct experiments in fully equipped desert labs.",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      link: "Play Sports",
      title: "Beach Sports",
      content: "Enjoy sports activities with scenic ocean views.",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      link: "Tour Museums",
      title: "Forest Museums",
      content: "Immerse yourself in history and art amidst lush forests.",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      link: "Join Plantation",
      title: "Ocean Plantation Drive",
      content: "Participate in environmental conservation drives.",
    },
  ];

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
    <div className="mt-30">
      {/* Landing Page */}
      <div className="min-h-full w-full ">
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
      <div className="h-full w-full flex flex-col">
        {/* Ranking Cards */}
        <div className="w-full h-full lg:px-50 px-2 md:mt-20 bg-[#CAD5E2] py-10">
          <div className="flex items-center justify-center mb-10  ">
            <p className="text-center text-xl md:text-3xl font-bold max-w-2xl">
              Proudly Distinguished by Our Prestigious Rankings and
              Accreditations
            </p>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-center  gap-2 ">
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
        {/* Carousel */}
        <div className="w-full h-full lg:px-50 md:px-20 px-5 mt-10 md:mt-10 lg:mt-30 ">
          <div className="flex items-center justify-center mb-10 flex-col gap-1">
            <p className="font-bold w-full md:text-3xl text-xl lg:max-w-5xl md:text-center">
              Immerse yourself in a Global Educational Experience with peers
              from 65 countries
            </p>
            <p className="opacity-70 md:text-xl text-xs md:text-center max-w-3xl">
              Uniting students worldwide, our platform fosters a vibrant network
              with global learning opportunities and optimal learning
              experiences.
            </p>
          </div>
          <div className="rounded-3xl">
            <Carousel carouselImages={cardDetails} />
          </div>
        </div>

        {/* Hiring componenet */}
        <HiringCompanies />
      </div>
      <div className="flex my-20 md:my-30">
        <div className="flex-1 flex   justify-center flex-col">
          <p className="md:text-3xl text-xl px-5 font-semibold">
            Upcoming Events
          </p>
          <p className="md:text-center mt-3 mb-10 text-xs px-5  md:text-xl max-w-lg  text-[#616161]">
            Stay informed and get involved! Here are out latest community events
          </p>

          {/* Displaying Events */}
          <div className="flex lg:flex-row  flex-col lg:px-50 px-5 md:px-20 w-full h-full gap-2">
            <div className=" bg-blue-300 border-1 lg:w-2/3 md:w-full h-50 md:h-70 lg:h-150 border-blue-600"></div>
            {/* EventCard */}
            <div className="flex flex-col gap-5 self-end md:mt-5">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
        </div>
      </div>
      {/* Facilities */}
      <div className="relative w-full h-full md:my-20  flex flex-col flex-1 border-t-2 border-blue-900">
        <div className="bg-slate-300  p-5 flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center justify-center absolute -top-10 md:-top-15 bg-blue-300 border-1 border-blue-900 rounded-md md:p-5 p-2">
            <p className="text-xl md:text-4xl font-bold ">Our Facilities</p>
            <p className=" text-gray-800 text-xs md:text-xl md:mt-5 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </p>
          </div>
          <div className="h-full mt-20 mb-10 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6  lg:px-20 place-items-center">
            {cardDetails.map((card, i) => (
              <div key={i} className="w-full">
                <CustomCard cardDetails={card} link="/events" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Review Section */}
      <div className="w-full h-full md:mt-10 mt-5  md:mb-10  flex flex-col px-5 md:px-20 lg:px-50">
        <div className="items-center justify-center">
          <p className="md:text-4xl text-xl text-blue-600">
            Real voices. Real stories. Real impact.
          </p>
          <p className=" text-[#2d2d2d] mt-2 md:text-xl text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>

          <div className="w-full md:mb-10  md:bg-gray-50">
            <ScrollerContainer Card={ReviewCard} length={10} />
          </div>
        </div>
      </div>
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
