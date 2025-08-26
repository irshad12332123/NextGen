// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom"; // placeholder for child pages

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar component
       */}

      {/* Main page content */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      {/* Footer component here */}
    </div>
  );
}
