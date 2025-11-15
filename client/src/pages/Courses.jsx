import FeatureCard from "../components/cards/FeatureCard";
import { GiFlatPlatform } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BsCircleSquare } from "react-icons/bs";
import CustomCard from "../components/cards/CustomCard";
import { useEffect, useState } from "react";
import { useApiContext } from "@/providers/ApiContext";
import { useCoursesApi } from "@/hooks/useCoursesApi";
import Loader from "@/components/Loader";

const Courses = () => {
  const [engineeringCourses, setEngineeringCourses] = useState([]);
  const { fetchData, loading, setLoading } = useApiContext();
  const { getCourseBySlug, getAllCourses } = useCoursesApi(fetchData);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      const response = await getAllCourses();
      if (response?.success) {
        setEngineeringCourses(response?.data);
      }
    }
    fetchCourse();
  }, []);

  useEffect(() => {
    setFilteredCourses(engineeringCourses);
  }, [engineeringCourses]);

  function cleanText(str) {
    return str
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  }

  const [filteredCourses, setFilteredCourses] = useState(engineeringCourses);

  const [activeFilter, setActiveFilter] = useState("All");

  const filterCourses = (search) => {
    if (search === "All") return engineeringCourses;

    const searchTerm = cleanText(search.toLowerCase());

    return engineeringCourses.filter((course) =>
      cleanText(course.name.toLowerCase()).includes(searchTerm)
    );
  };

  const handleSearch = (courseName) => {
    setActiveFilter(courseName);
    setFilteredCourses(filterCourses(courseName));
  };

  const cards = [
    {
      icon: GiFlatPlatform,
      title: "Powerful platform",
      content:
        "The platform provides a powerful way to access educational material. It allows users to participate in interactive activities and take tests.",
    },
    {
      icon: GrUserExpert,
      title: "Expert teachers",
      content:
        "These teachers can provide guidance and support to the user as they learn, helping them to stay motivated and engaged.",
    },
    {
      icon: SiGooglemarketingplatform,
      title: "50+ Categories",
      content:
        "It offers more than 50 categories so that the user can find the materials he needs to achieve his learning objectives.",
    },
    {
      icon: BsCircleSquare,
      title: "100+ courses",
      content:
        "Offering more than 100 courses covering a wide range of topics, you can explore different fields and areas of study.",
    },
  ];

  const courseFilterOp = ["All", "B.Tech", "B.C.A"];

  return (
    <div className="min-h-screen w-full bg-raisin-black">
      <div className="md:px-15 xl:px-25 2xl:px-40 px-5 md:py-20 py-10">
        <div className="mt-50 text-center flex flex-col justify-center items-center">
          <p className="md:text-3xl text-xl  text-seasalt ">
            Why choose{" "}
            <span
              className="lg:text-5xl  text-5xl md:text-8xl text-wheat"
              style={{ fontFamily: "Hurricane" }}
            >
              Next Gen{" "}
            </span>
            ?
          </p>
          <p className="max-w-2xl md:text-[1rem] text-muted text-sm mt-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            iure voluptatibus saepe quia! Alias unde voluptatum ad laboriosam
            quo, beatae velit iste officia tempora, praesentium laborum esse
            quam tempore laudantium!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="relative mt-15 xl:p-8 p-3 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 rounded-md">
          {cards.map((card, i) => (
            <FeatureCard
              key={i}
              Icon={card.icon}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>

      {/* Filter Options */}
      <div className="">
        {loading ? (
          <Loader />
        ) : (
          <div className="md:px-15 2xl:px-50 px-5 w-full">
            <div className="flex gap-5 mt-5">
              {engineeringCourses?.length > 0 &&
                courseFilterOp.map((filter, i) => (
                  <p
                    key={i}
                    onClick={() => handleSearch(filter)}
                    className={`md:px-4 md:py-2 px-3 py-2 text-sm md:text-[1rem] font-bold text-seasalt rounded-full cursor-pointer transition-all duration-300 ${
                      activeFilter === filter ? "bg-celestial-blue" : ""
                    }`}
                  >
                    {filter}
                  </p>
                ))}
            </div>
            {/* Filtered Courses */}

            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-5 md:py-10 md:px-10 px-5 gap-5">
              {engineeringCourses?.length > 0 &&
                filteredCourses.map((course, i) => (
                  <CustomCard
                    cardDetails={course}
                    key={i}
                    link={`/courses/${course.id}`}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
