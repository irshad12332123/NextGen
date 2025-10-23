import ImageCard from "../components/cards/ImageCard";
import AboutCard from "../components/cards/AboutCard";
import { partners } from "../../types/Image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import DrawingOval from "@/components/animated-components/OvalDraw";

const About = () => {
  const circularMotionRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
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
  const aboutCards = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi99Tm5tPRiJddK9_pmo8l00Qi9KX6nFPwPNjGHPnb9CNElHDxMJE8BXSWlX1kiHnyClYTTnyN_iJoumnLjeB_kVysi6dnLp6647GC2AhsdwT-VzsmzIGZW5UeuaRlGon4QVoJ4cqDStIC2GLowI9VGDAofNlE-5SAgl4wKzVl3bh_gxtCFEIoLTMqmGn9r34uiNUEottDqSVGvxqyRGGoe7RXm8SYaLpAEDgM7bG6lWt8XYJK5uhyv8LAnZFJOVpWrHxKxmShnd0",
      title: "Our History",
      content:
        "Founded in 1950, NextGen University has a storied past of innovation and academic leadership. From our humble beginnings, we've grown into a world-renowned institution.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVqJm9rCnjeFHZDuiBH62dkp-thMxOY8UFmRn_PrXTIDMCs-clbUFSLJ6IFRZGzSIvkNW76Yc02dgCzD4US54UForfXBrIcQ3TX2zJ-D8It5IKIjMQAJMA2a2jScXRhvWnRXiI58k568j_b3q0RaR7Cd2U6P8KgItrUJLpYI-5AihB4-ieeOqpzm93_LOf_9rPi-3q3XbfUMkqBoi_QZi69RE-8rARC9jh303hjzWIZNbfEc2TSh7zuXpnUj1KlBiv4Qo8g-16XMM",
      title: "Our Mission",
      content:
        "To provide a transformative educational experience that fosters intellectual curiosity, critical thinking, and a commitment to lifelong learning for global leadership.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW7YwU3yppS8ecOjBhrn6t7JcRBI7xkUz3ZZ51cB9Mx_ijmReUbO29NQxfMZanSTWVyzdWyVfBtVnv06D7_xmQJQWASR9LdQc0kQuG-3_412lsdtkNOHc4o9zMM8DHm9WWo1kQX79gqsVn_d0OWn0TiLW-mJXnoCBH2kVQz8js6pcNR9cXnGshQGt9ZlzRqmxCGKZHjmy6jKtjJ9hE4fcHChJvruSItVOn3Zitax_r7I-3iDPcIaJujIi9UJrGXRJ8Q46L50PoN6w",
      title: "Our Values",
      content:
        "Integrity, excellence, diversity, and community are our core values. We foster an inclusive environment where every student can thrive and contribute.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeYMFt_a5_W5AN76hJ0TKkpLfovF5JXWOihL4GXrECPashtlG3vLL5OfltANU9FtW-SFQiyF0rRdzqBr9xktjnT1GvBHJ_9NO7Jeep9mZ1nS0nAu4tBm4ngRQmPBfmPwKv_dnEwN8SEu8HFXEI44YGxc22QhNbvLXYLCBySDgjvIoxvy5tm9MQ8-5BGDRyUXrjPHVnceaosX813onp5DpN61h-xz2TrgEPh0dtqdCiIYEQYuU_VNtY6gFteynpDdQS77V6JZaoTL8",
      title: "Academic Excellence",
      content:
        "Consistently ranked among the top universities globally for our rigorous academic programs, distinguished faculty, and cutting-edge research.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOCKGeJNQ0akV44Jri-U-_JuuBM_fedkplCRlYjkDacei3LmmGo1VXMIMZPWoAP42Egy5bVj3w5eg6DClHKhFeWmM0Z9I-Ivr-cWDthe0s8IpWDrd8Ka6z7kjAvorrv3Io4vSdmjM01qziE9axBju3YG6_Rehp8FvQua9An5bWDvI7fLOXrA60mA3ZpRD2T00g9aanfv5iBnHvzf4PYf9jSzJDNsM3F3puaDyz1VGcB_53amKi40RzWiWR0P0YGniTYOXrI1XBShA",
      title: "Campus Life",
      content:
        "Experience a vibrant campus with a wide range of extracurricular activities, clubs, and organizations in a supportive and engaging environment.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBcgWoZkqs_NIgZB1QQUmlxRB_1u1E9FMnHLhXWZDPgGIdF1fdnemFvnGA0lazx8M1hwvsLhceqOpxAMUCUbhMLJFrUd5P_5xbmr_d_oCx_N92YDsPLE2qiXz46Dy3L1RD8-83EWyQCJTt-mKqMrcoc2ZCiEvKLTKTxyeNO7Do7VTk1sG0GLYtJJTW7sJy7wvNXJnl2rJZRfNG0tBm19yaUWzpVeNS0kD0jEv4KoeNQZrP2D3n6QqXlbvhZWkMypaOW1mcpH6sRq8",
      title: "Our Faculty",
      content:
        "Our faculty comprises leading experts and scholars dedicated to mentoring students and fostering a culture of intellectual curiosity.",
    },
  ];

  return (
    <div className="bg-raisin-black min-h-screen w-full">
      {/* <ImageCard buttonRequired={false} title="About" /> */}
      <div
        className=" relative flex py-50 flex-col justify-center items-center gap-3"
        style={{ fontFamily: "IceBerg" }}
      >
        <p className="lg:text-9xl md:text-6xl text-4xl text-seasalt ">
          Who We <span className="italic text-wheat">Are</span>
          <span className="text-5xl italic">?</span>
        </p>
        <DrawingOval strokeWidth={1} color="#80BFE4ff" />
        <p className="text-sm text-muted w-[80%] md:w-[70%]  text-center">
          Discover our rich, history, mission, and values that shape our
          comitment to acaddemic excelence and student success.
        </p>
      </div>
      <div className="lg:px-50 md:px-15 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:my-10 mb-5">
          {aboutCards.map((card, i) => (
            <AboutCard
              key={i + 1}
              img={card.img}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
      <div className=" bg-[#2B363A]  text-white w-full py-10 flex flex-col gap-5 justify-center items-center">
        <p className="bg-[#4d5051] rounded-md px-5 py-2 ">Why choose Us?</p>
        <p className="lg:text-4xl md:text-3xl text-xl text-center font-bold">
          A perfect blend of academics, innovation, and career success
        </p>
        <div className="flex justify-center flex-wrap items-center gap-x-7 text-sm max-w-6xl gap-y-4 ">
          {benefitsList.map((text) => (
            <p className="text-sm lg:text-xl">✅ {text}</p>
          ))}
        </div>
      </div>
      <div className="md:my-15 my-5 lg:px-50 md:px-15 px-5">
        <p className="lg:text-4xl md:text-3xl text-xl font-bold ">
          Our Partners
        </p>
        <p className="md:text-xl text-sm md:mt-5">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 bg-gradient-to-r from-[#0f172a] via-[#1e293b] via-[#38bdf8] to-[#14b8a6] w-full h-full p-5 md:p-10 rounded-2xl mt-5 md:mt-15">
            {partners.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-3 md:p-5"
              >
                <img
                  src={img}
                  alt={`Partner ${i}`}
                  className="h-10 md:h-16 object-contain"
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
