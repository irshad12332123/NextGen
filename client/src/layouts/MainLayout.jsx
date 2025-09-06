// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom"; // placeholder for child pages
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar component
       */}
      <NavBar />

      {/* Main page content */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>

      <Footer />
      {/* Footer component here */}
    </div>
  );
}
