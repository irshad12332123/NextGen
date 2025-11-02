import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
import NavBar from "./pages/NavBar.jsx";
import Footer from "./pages/Footer.jsx";
import { BrowserRouter, useLocation } from "react-router-dom";
import Announcements from "./components/Announcements.jsx";

const Layout = () => {
  const location = useLocation();

  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <NavBar />}
      <App />
      {!hideLayout && <Footer />}
      {!hideLayout && <Announcements />}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
);
