import { Outlet, useLocation } from "react-router-dom";
import NavBar from "@/pages/NavBar";
import Footer from "@/pages/Footer";
import Announcements from "@/components/Announcements";

const MainLayout = () => {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <NavBar />}
      <Outlet />
      {!hideLayout && <Footer />}
      {!hideLayout && <Announcements />}
    </>
  );
};

export default MainLayout;
