import { createBrowserRouter } from "react-router-dom";

// Layouts
import AdminLayout from "@/layouts/AdminLayout";
import MainLayout from "@/layouts/MainLayout";

// Routes
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute.jsx";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import { ApplyNow } from "@/pages/ApplyNow";
import ContactUs from "@/pages/ContactUs";
import Courses from "@/pages/Courses";
import CourseDetails from "@/pages/CourseDetails";
import Event from "@/pages/Event";
import { AdminLogin } from "@/pages/AdminLogin";
import { AdminRegister } from "@/pages/AdminRegister";
import EventAdmin from "@/pages/EventAdmin";
import CreateEvent from "@/components/admin/CreateEvent";
import UpdateEvent from "@/components/admin/UpdateEvent";
import CourseAdmin from "@/pages/CourseAdmin";
import CreateCourse from "@/components/admin/courses/create.course/CreateCourse";

export const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "apply", element: <ApplyNow /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:courseId", element: <CourseDetails /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "events", element: <Event /> },
    ],
  },

  // Auth routes
  {
    path: "/admin-login",
    element: (
      <PublicRoute>
        <AdminLogin />
      </PublicRoute>
    ),
  },
  {
    path: "/admin-register",
    element: (
      <PublicRoute>
        <AdminRegister />
      </PublicRoute>
    ),
  },

  // Protected admin routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "admin-event", element: <EventAdmin /> },
      { path: "admin-event/create", element: <CreateEvent /> },
      { path: "admin-event/update/:id", element: <UpdateEvent /> },
      { path: "admin-course", element: <CourseAdmin /> },
      { path: "admin-course/create", element: <CreateCourse /> },
    ],
  },
]);
