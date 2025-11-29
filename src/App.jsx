import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUserStore } from "./store/useUserStore";
import { Toaster } from "react-hot-toast";

import Sidebar from "./components/Navbars/Sidebar";
import DashboardNavbar from "./components/Navbars/DashboardNavbar";
import AssessmentNavbar from "./components/Navbars/AssessmentNavbar";
import Navbar from "./components/Navbars/Navbar";

import MentalAssessmentPage from "./pages/MentalAssessmentPage";
import DepressionAssessmentPage from "./pages/DepressionAssessmentPage";
import MoodAnalyzePage from "./pages/MoodAnalyzePage";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Auth from "./components/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import FindPsychiatrist from "./pages/FindPsychiatrist";
import MyPsychiatrist from "./pages/MyPsychiatrist";
import Diary from "./pages/Diary";
import Chatbot from "./pages/Chatbot";
import Feedback from "./pages/Feedback";
import RegisterPsychiatrist from "./pages/RegisterPsychiatrist";
import AdminOverview from "./components/Admin/MainAdmin";
import AdminUsers from "./components/Admin/Users";
import AdminPsychiatrists from "./components/Admin/Psychiatrists";
import AdminAppointments from "./components/Admin/Appointments";
import AdminContent from "./components/Admin/Content";
import AdminFeedback from "./components/Admin/Feedback";
import AdminDonations from "./components/Admin/Donations";
import SupportUs from "./pages/SupportUs";
import AboutUs from "./pages/Aboutus";
import BookAppointment from "./pages/BookAppointment";

const AssessmentRoutes = ({ children }) => (
  <>
    <AssessmentNavbar />
    {children}
  </>
);

const GeneralRoutes = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

const DashboardRoutes = ({ children }) => (
  <>
    <DashboardNavbar />
    {children}
  </>
);

const ProtectedRoute = ({ children }) => {
  const { user } = useUserStore();
  if (!user) return <Navigate to="/auth" replace />;
  return children;
};

const ProtectedRouteAdmin = ({ children }) => {
  const { user } = useUserStore();
  if (!user) return <Navigate to="/auth" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;

  return children;
};

function App() {
  const DashboardRoutesJSON = [
    { path: "/assessment", label: "Assessment" },
    { path: "/appointments", label: "Your Appointments" },
    { path: "/diary", label: "Your Diary" },
    { path: "/mindsybot", label: "Mindsy Bot" },
    { path: "/feedback", label: "Feedback" },
    { path: "/supportus", label: "Support Us" },
    { path: "/logout", label: "Logout" },
  ];

  const AdminRoutesJSON = [
    { path: "/admin/users", label: "Users", component: <AdminUsers /> },
    {
      path: "/admin/psychiatrists",
      label: "Psychiatrists",
      component: <AdminPsychiatrists />,
    },
    {
      path: "/admin/appointments",
      label: "Appointments",
      component: <AdminAppointments />,
    },
    { path: "/admin/content", label: "Content", component: <AdminContent /> },
    {
      path: "/admin/feedback",
      label: "Feedback",
      component: <AdminFeedback />,
    },
    {
      path: "/admin/donations",
      label: "Donations",
      component: <AdminDonations />,
    },
    { path: "/logout", label: "Logout" },
  ];

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route
            path="/"
            element={
              <GeneralRoutes>
                <Home />
              </GeneralRoutes>
            }
          />
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/assessment"
            element={
              <GeneralRoutes>
                <Assessment />
              </GeneralRoutes>
            }
          />

          <Route
            path="/assessment/mentalhealth"
            element={
              <AssessmentRoutes>
                <MentalAssessmentPage />
              </AssessmentRoutes>
            }
          />
          <Route
            path="/assessment/depression"
            element={
              <AssessmentRoutes>
                <DepressionAssessmentPage />
              </AssessmentRoutes>
            }
          />
          <Route
            path="/assessment/moodanalyze"
            element={
              <AssessmentRoutes>
                <MoodAnalyzePage />
              </AssessmentRoutes>
            }
          />

          <Route
            path="/supportus"
            element={
              <GeneralRoutes>
                <SupportUs />
              </GeneralRoutes>
            }
          />

          {/* USER PROTECTED ROUTES */}
          <Route
            path="/mindsybot"
            element={
              <AssessmentRoutes>
                <Chatbot />
              </AssessmentRoutes>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardRoutes>
                  <div className="flex">
                    <Sidebar type="User" menuItems={DashboardRoutesJSON} />
                    <Dashboard />
                  </div>
                </DashboardRoutes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <GeneralRoutes>
                  <FindPsychiatrist />
                </GeneralRoutes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <GeneralRoutes>
                <AboutUs />
              </GeneralRoutes>
            }
          />

          <Route
            path="/my-appointments"
            element={
              <ProtectedRoute>
                <GeneralRoutes>
                  <MyPsychiatrist />
                </GeneralRoutes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/diary"
            element={
              <ProtectedRoute>
                <GeneralRoutes>
                  <Diary />
                </GeneralRoutes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <GeneralRoutes>
                  <Feedback />
                </GeneralRoutes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/register-psychiatrist"
            element={
              <ProtectedRoute>
                <GeneralRoutes>
                  <RegisterPsychiatrist />
                </GeneralRoutes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/book/:id"
            element={
              <ProtectedRoute>
                <GeneralRoutes>
                  <BookAppointment />
                </GeneralRoutes>
              </ProtectedRoute>
            }
          />

          {/* ADMIN PROTECTED ROUTES */}
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRouteAdmin>
                <DashboardRoutes>
                  <div className="flex">
                    <Sidebar type="Admin" menuItems={AdminRoutesJSON} />
                    <AdminOverview />
                  </div>
                </DashboardRoutes>
              </ProtectedRouteAdmin>
            }
          />

          {AdminRoutesJSON.map((item, i) => (
            <Route
              key={i}
              path={item.path}
              element={
                <ProtectedRouteAdmin>
                  <DashboardRoutes>
                    <div className="flex">
                      <Sidebar type="Admin" menuItems={AdminRoutesJSON} />
                      {item.component}
                    </div>
                  </DashboardRoutes>
                </ProtectedRouteAdmin>
              }
            />
          ))}

          {/* 404 */}
          <Route
            path="*"
            element={
              <GeneralRoutes>
                <h1>404</h1>
              </GeneralRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
