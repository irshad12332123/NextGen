import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
import NavBar from "./pages/NavBar.jsx";
import Footer from "./pages/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import Announcements from "./components/Announcements.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
      <Announcements />
    </BrowserRouter>
  </StrictMode>
);
