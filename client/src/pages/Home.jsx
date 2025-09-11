import React from "react";
import RBU_BANNER_IMAGE from "../assets/RBUbanner_home.webp";

import CustomImageContainer from "../components/CustomImageContainer";
import Announcements from "../components/Announcements";

const Home = () => {
  // here we are fetching the capus show off images from the DB -->
  const cardDetails = [
    {
      imgURL:
        "https://www.harvard.edu/wp-content/uploads/2024/01/DSC04732-scaled.jpg?w=2000",
      link: "Explore musueums",
      title: "Museums",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsa veniam facere officiis distinctio, quisquam numquam unde deserunt amet possimus dolores ea quis, ipsam vitae, neque enim similique! Fugiat, esse!",
    },
    {
      imgURL:
        "https://imgs.search.brave.com/kvOIQHnQ53BPgFasg-Wn6L vyNIvzd-NGKTtvIiK0QuU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzgwLzIxLzIz/LzM2MF9GXzI4MDIx/MjMwNV9LZ1pkQ245/WjdXODR5dEV2Y1pW/MGlONmNpTTczY2Nx/bS5qcGc",
      link: "Plantation Drive",
      title: "Tours",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsa veniam facere officiis distinctio, quisquam numquam unde deserunt amet possimus dolores ea quis, ipsam vitae, neque enim similique! Fugiat, esse!",
    },
    {
      imgURL:
        "https://imgs.search.brave.com/Xl4pHYk0ztcB1z5H3Fmi1vKavt8txQ6LyT5kWmXwfKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q3L0thcG9vcl9I/YWxsLF9Vbml2ZXJz/aXR5X2F0X0J1ZmZh/bG8uanBn",
      link: "See winners",
      title: "Sports",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsa veniam facere officiis distinctio, quisquam numquam unde deserunt amet possimus dolores ea quis, ipsam vitae, neque enim similique! Fugiat, esse!",
    },
    {
      imgURL:
        "https://imgs.search.brave.com/d1Y-Yd_hg-hxd0_FeX3vRH2OZ-lo9OopVmZQwIqpB2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/NjcyOTgyOS9waG90/by95b3VuZy1mcmll/bmRzLXRha2luZy1h/LWJyZWFrLWJldHdl/ZW4tY29sbGVnZS1j/bGFzc2VzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1zOEN6/TEV0dVFlZUlvS2x6/MDlJQ2RDV0xWcFo5/dHV3UFdWMjRHZ2VX/enNZPQ",
      link: "Have a glance",
      title: "Student Life ",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsa veniam facere officiis distinctio, quisquam numquam unde deserunt amet possimus dolores ea quis, ipsam vitae, neque enim similique! Fugiat, esse!",
    },
  ];

  return (
    <div className="mt-30">
      <img src={RBU_BANNER_IMAGE} alt="RBU_banner" />
      <div className="mx-50  mt-2">
        <div className="container w-full h-full mt-10">
          <p className="text-3xl font-medium text-[#2B2B2B] py-10 border-b-5">
            Explore the Campus
          </p>
          <div className="grid grid-cols-2 gap-10 w-full h-full mt-20 mb-40">
            {cardDetails.map((cardDetails, idx) => (
              <CustomImageContainer
                imageURL={cardDetails.imgURL}
                key={idx}
                cardTitle={cardDetails.title}
                cardDetails={cardDetails.content}
                cardContent={cardDetails.content}
                cardLink={cardDetails.link}
              />
            ))}
          </div>
        </div>
        <p className="text-3xl font-medium text-[#2B2B2B] py-10 border-b-1">
          Take a look at the events
        </p>
      </div>
      {/* Announcements */}
      {/* <Announcements /> */}
    </div>
  );
};

export default Home;
