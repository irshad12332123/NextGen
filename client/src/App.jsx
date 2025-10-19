import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Event from "./pages/Event";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/events" element={<Event />} /> */}
    </Routes>
  );
};

export default App;
