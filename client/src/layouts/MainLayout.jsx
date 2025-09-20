// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar component
       */}
      <NavBar />
      {/* Main page content */}
      <main className="flex-grow ">
        <Outlet />
      </main>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
