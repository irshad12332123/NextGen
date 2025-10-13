import ImageCard from "../components/cards/ImageCard";
import AboutCard from "../components/cards/AboutCard";
import { partners } from "../../types/Image";
import { useState } from "react";

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [from, setFrom] = useState("0f172a");
  const [to, setTo] = useState("1e293b");
  const [via, setVia] = useState("14b8a6");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const benefitsList = [
    "State-of-the-Art Campus",
    "100+ International Collaborations",
    "Industry-Aligned Curriculum",
    "100% Placement Assistance",
    " World-Class Faculty",
    "100% Placement Assistance",
    "Industry-Aligned Curriculum",
    "State-of-the-Art Campus",
    "100+ International Collaborations",
    "Industry-Aligned Curriculum",
  ];

  return (
    <div>
      <ImageCard buttonRequired={false} title="About" />
      <div className="flex flex-col my-20  ">
        <div className=" px-50">
          <p className="text-3xl font-bold py-5 ">
            About{" "}
            <span className=" text-blue-600 underline underline-offset-15 ">
              Next Gen
            </span>
          </p>
          <p className="text-xl">
            Bahra University, established in 2011 under the Himachal Pradesh
            State Legislature, is a renowned private university located at
            Waknaghat in the Solan district, surrounded by the scenic Shimla
            Hills. Founded by the Rayat-Bahra Group, the university is committed
            to delivering quality higher education, fostering innovation, and
            shaping leaders of tomorrow. Guided by its motto “Learn. Lead.
            Accomplish.”, Bahra University combines academic excellence with
            holistic student development, empowering learners with the
            knowledge, skills, and values needed to succeed in a dynamic global
            environment. The university offers a wide range of programs through
            its specialized schools, including Engineering and Technology,
            Management Studies, Law, Pharmaceutical Sciences, Physiotherapy,
            Hospitality and Tourism, and Basic & Applied Sciences. All courses
            are designed to meet industry demands and are approved by statutory
            bodies such as the University Grants Commission (UGC), the Bar
            Council of India (BCI), and the Pharmacy Council of India (PCI).
            Bahra University is also a proud member of the Association of Indian
            Universities (AIU). Research and innovation are at the core of the
            university’s philosophy. With modern laboratories, advanced
            facilities, and collaborations with leading institutions worldwide,
            students and faculty actively engage in research projects, patents,
            and publications across diverse fields such as technology,
            healthcare, management, law, and applied sciences. The focus is on
            creating solutions that address real-world challenges and contribute
            to social and economic progress.
          </p>
        </div>
      </div>
      <AboutCard rowReverse={true} />
      <div className=" bg-[#2B363A]  text-white w-full py-10 flex flex-col gap-5 justify-center items-center">
        <p className="bg-[#4d5051] rounded-md px-5 py-2 ">Why choose Us?</p>
        <p className="text-4xl font-bold">
          A perfect blend of academics, innovation, and career success
        </p>
        <div className="flex justify-center flex-wrap items-center gap-x-7 text-sm max-w-6xl gap-y-4 ">
          {benefitsList.map((text) => (
            <p className="text-xl">✅ {text}</p>
          ))}
        </div>
      </div>
      <div className="md:my-15 px-50  ">
        <p className="text-4xl font-bold ">Our Partners</p>
        <p className="text-xl mt-5">
          We are proud to collaborate with leading global brands
        </p>

        <div
          className="relative cursor-crosshair"
          onMouseMove={handleMouseMove}
        >
          <div
            className="
           animate-aurora absolute inset-0 pointer-events-none transition-opacity duration-300
            "
            style={{
              background: `
            radial-gradient(300px circle at ${position.x}px ${position.y}px,
              rgba(56,189,248,0.35),
              rgba(168,85,247,0.25),
              rgba(14,165,233,0.15),
              transparent 80%)
          `,
              filter: "blur(20px)",
              opacity: 1,
            }}
          >
            <style>
              {`
          @keyframes aurora {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-aurora {
            animation: aurora 10s ease infinite;
          }
        `}
            </style>
          </div>
          <div className=" grid grid-cols-4 gap-5 bg-gradient-to-r from-[#0f172a] via-[#1e293b] via-[#38bdf8] to-[#14b8a6]   w-full h-full p-15 rounded-2xl mt-15">
            {partners.map((img, i) => (
              <div
                className="py-5 px-6 rounded-2xl bg-white border-1 hover:border-blue-800
  text-gray-200 shadow-lg 
  transition-all duration-300 ease-in-out  "
              >
                <img
                  src={img}
                  alt={`${img} ${i}`}
                  key={i}
                  className="md:h-15 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
