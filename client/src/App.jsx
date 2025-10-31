import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Loader from "./components/Loader";
import { ApplyNow } from "./pages/ApplyNow";
const Event = lazy(() => import("./pages/Event"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetails = lazy(() => import("./pages/CourseDetails"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </Suspense>
  );
};

export default App;
