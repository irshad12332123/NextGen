import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Loader from "./components/Loader";
import { ApplyNow } from "./pages/ApplyNow";
import ProtectedRoute from "./routes/ProtectedRoute";
import EventAdmin from "./pages/EventAdmin";
import CreateEvent from "./components/admin-events/CreateEvent";
import UpdateEvent from "./components/admin-events/UpdateEvent";
import { ApiProvider } from "./providers/ApiContext";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminRegister } from "./pages/AdminRegister";

const Event = lazy(() => import("./pages/Event"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetails = lazy(() => import("./pages/CourseDetails"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ApiProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<ApplyNow />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events" element={<Event />} />

          <Route
            path="/admin-register"
            element={
              // <ProtectedRoute>
              <AdminRegister />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin-login"
            element={
              // <ProtectedRoute>
              <AdminLogin />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin-event"
            element={
              <ProtectedRoute>
                <EventAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-create-event"
            element={
              <ProtectedRoute>
                <CreateEvent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-update-event/:id"
            element={
              <ProtectedRoute>
                <UpdateEvent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ApiProvider>
    </Suspense>
  );
};

export default App;
