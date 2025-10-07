import React from "react";
import RBU_BANNER_IMAGE from "../assets/RBUbanner_home.webp";
import RBU_BANNER_MOBILE_IMAGE from "../assets/RBUmobile-banner.webp";
import Announcements from "../components/Announcements";
import CustomBtn from "../components/CustomBtn";
import EventCard from "../components/EventCard";
import ReviewCard from "../components/ReviewCard";
import ImageCard from "../components/ImageCard";
import Carousel from "../components/Carousel";
import RankingCard from "../components/RankingCard";
import MarqueeSlider from "../components/MarqueeSlider";

import { marqueeImages } from "../../types/Image";
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

  // here we are fetching the capus show off images from the DB -->
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
      src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
      link: "Join Plantation",
      title: "Ocean Plantation Drive",
      content: "Participate in environmental conservation drives.",
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      link: "Student Life",
      title: "Waterfall Student Life",
      content: "Engage in vibrant campus events near natural waterfalls.",
    },
    {
      src: "https://images.unsplash.com/photo-1507097634215-e82e6b518529",
      link: "City Exploration",
      title: "City Life",
      content: "Experience student life in a bustling cityscape.",
    },
    {
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      link: "Coffee & Study",
      title: "Campus Cafe",
      content: "Relax and study in cozy campus cafes.",
    },
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      link: "Healthy Meals",
      title: "Food Court",
      content: "Enjoy nutritious meals and snacks at the campus food court.",
    },
    {
      src: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24",
      link: "Read Books",
      title: "Library Corner",
      content: "Find your favorite books in quiet library corners.",
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
        />
        <img
          src={RBU_BANNER_MOBILE_IMAGE}
          alt="RBU_banner"
          className="block md:hidden h-full"
        />
        <MarqueeSlider titlesList={marqueeTitles} />
      </div>
      <div className="h-full w-full flex flex-col">
        {/* Ranking Cards */}
        <div className="w-full h-full md:px-50 px-10 md:mt-30 bg-[#CAD5E2] py-10">
          <div className="flex items-center justify-center mb-10  ">
            <p className="text-center text-3xl font-bold max-w-2xl">
              Proudly Distinguished by Our Prestigious Rankings and
              Accreditations
            </p>
          </div>
          <div className="md:flex-row grid grid-cols-2 justify-center items-center  md:flex-wrap gap-5 ">
            <RankingCard />
            <RankingCard />
            <RankingCard />
            <RankingCard />
            <RankingCard />
            <RankingCard />
          </div>
        </div>
        {/* Carousel */}
        <div className="w-full h-full px-50 md:mt-30 ">
          <div className="flex items-center justify-center mb-10 flex-col gap-1">
            <p className="font-bold text-3xl max-w-5xl text-center">
              Immerse yourself in a Global Educational Experience with peers
              from 65 countries
            </p>
            <p className="opacity-70 text-xl text-center max-w-3xl">
              Uniting students worldwide, our platform fosters a vibrant network
              with global learning opportunities and optimal learning
              experiences.
            </p>
          </div>
          <div className="rounded-3xl">
            <Carousel carouselImages={cardDetails} />
          </div>
        </div>
        {/* Courses We offer */}
        <div className="w-full h-full mt-10 mb-20 flex flex-1 flex-col">
          <div className="bg-slate-300 rounded-b-[15rem] p-5 flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-[#2B2B2B]">
              Courses We offer
            </p>
            <p className=" text-[#6b6b6b] mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </p>

            <div className=" max-w-6xl h-full mt-20 mb-40 mx-auto py-10">
              <Carousel carouselImages={facilities} isCard={true} />
            </div>
            <CustomBtn />
          </div>
        </div>
      </div>
      <div className="flex p-5">
        <div className="flex-1 flex items-center justify-center flex-col">
          <p className="text-3xl font-bold">Events</p>
          <p className="text-center mt-3 mb-10 max-w-lg  text-[#616161]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            doloribus ipsum nulla adipisci velit facilis optio ratione illum
            impedit sit eligendi est quod, repellat qui inventore accusamus
            expedita! Natus, in.
          </p>
          {/* Displaying Events */}
          <div className="flex flex-col gap-10 max-w-5xl w-full h-full">
            {/* EventCard */}
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
      {/* Facilities */}
      <div className="w-full h-full mt-10 mb-20 flex flex-col flex-1">
        <div className="bg-slate-300  p-5 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-[#2B2B2B]">Our Facilities</p>
          <p className=" text-[#6b6b6b] mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
          <div className=" max-w-6xl w-full h-full mt-20 mb-40 ">
            <Carousel
              carouselImages={cardDetails}
              isCard={true}
              // type={"facilities"}
            />
          </div>
          <CustomBtn />
        </div>
      </div>
      {/* Review Section */}
      <div className="w-full h-full mt-10 md:mb-20  flex flex-1 flex-col">
        <div className="  p-5 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-[#2B2B2B]">
            What our student says
          </p>
          <p className=" text-[#6b6b6b] mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
          <div className="md:grid flex flex-col grid-cols-2 gap-10 max-w-6xl w-full h-full mt-20 md:mb-40  mx-auto py-10">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
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
