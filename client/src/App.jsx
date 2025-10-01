import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Courses from "./pages/Courses";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/* Wrapping all the children layouts */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
