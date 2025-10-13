import React, { useState } from "react";
import ImageCard from "../../components/cards/ImageCard";
function AboutCard({ rowReverse = false }) {
  const [count, setCount] = useState(1);
  const images = {
    1: "https://imgs.search.brave.com/Y9vo7yQtaPwbPBbFV-AQL2uSM4twtSFd6C-VbFh0qNo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIy/NjgxMzE3NC9waG90/by9wb3J0cmFpdC1v/Zi1hLWhhcHB5LWNv/bGxlZ2Utc3R1ZGVu/dC1zbWlsaW5nLW91/dGRvb3JzLndlYnA_/YT0xJmI9MSZzPTYx/Mng2MTImdz0wJms9/MjAmYz1OdnA3YzdM/NzVSXzRJUHpxNjA3/eER6UHBiVGFJZ1dR/Q2c1S0ZNRXVEZ05J/PQ",
    2: "https://imgs.search.brave.com/sdyilcO5lFvh5j4rFHD1CP4IXJ51Z4ueAm7hcUXOjY4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ncm91/cC1jb2xsZWdlLXN0/dWRlbnRzLWNlbGVi/cmF0aW5nLW91dGRv/b3JzLWV4YW0tam95/ZnVsLWdyb3VwLWNv/bGxlZ2Utc3R1ZGVu/dHMtZGlzY3Vzc2lu/Zy1jZWxlYnJhdGlu/Zy1vdXRkb29ycy0z/NzA1NDgzOTIuanBn",
    3: "https://imgs.search.brave.com/JYaWzudv4QYiObjaylqLwcJNRAqRXbZ0JdVLy7WPJls/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNjE0/NzM2OS9wZXhlbHMt/cGhvdG8tNjE0NzM2/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  };

  const imageCountIncrementer = async (count) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCount((prevCount) => (prevCount % 3) + 1);
  };

  return (
    <div className="my-20 max-w-7xl mx-auto bg-[#CAD5E2] p-5">
      <div
        className={`flex flex-col md:flex-row gap-10 ${
          rowReverse && "md:flex-row-reverse"
        }`}
      >
        <div className="md:w-1/2 text-lg leading-7 text-justify">
          <p className="mb-5">
            Welcome to our online learning platform, where we are dedicated to
            providing high-quality education to learners around the world. Our
            mission is to empower individuals with the knowledge and skills they
            need to succeed in their personal and professional lives.
          </p>
          <p className="mb-5">
            We believe that education is a lifelong journey, and we are
            committed to making learning accessible, engaging, and effective for
            everyone.
          </p>
          <p className="mb-5">
            Our team of experienced educators and industry experts work
            tirelessly to create comprehensive and up-to-date courses that cover
            a wide range of subjects, from technology and business to arts and
            humanities.
          </p>
          <div className="flex flex-row  md:flex-col bg-[#b0c4db] min-h-40 p-5 gap-5">
            <img
              src={images[count]}
              alt="about-image"
              className="object-contain max-h-full hover:scale-105 transition-all"
              onLoad={() => imageCountIncrementer(count)}
            />
            <h5 className="font-bold">Smart India Hackathon </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam praesentium, dolor vitae voluptatem provident qui autem
              beatae soluta quaerat ut in, quas rerum. Dolores, deleniti vero
              deserunt sunt nesciunt delectus.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-10 ">
          <ImageCard />
          <ImageCard buttonRequired={false} />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
