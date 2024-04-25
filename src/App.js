import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import Userdashboard from "./Components/Users/userdashboard/Userdashboard";
import UserNavbar from "./Components/Users/userdashboard/UserNavbar";
import Info from "./Components/Features";
import Blogs from "./Components/BlogsAndVideos";
import Features from "./Components/Features";
import Sidenav from "./Components/Sidenav";
import useWindowSize from "./Hoooks/UseWindow";
import { ToastContainer } from "react-toastify";
import DoctorsPrescription from "./Components/Users/My-records/DoctorsPrescription";
import LabReports from "./Components/Users/My-records/Lab-Reports";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Verify from "./Components/Verify";
import Questionnaire from "./Components/Users/Questionnaire";
import XRay from "./Components/Users/My-records/X-ray";
import Medical from "./Components/Users/My-records/medicalExpenses";
import Basic_health_tracker from "./Components/Users/My-health-tracker/Basic-health-tracker";
import Women_health_tracker from "./Components/Users/My-health-tracker/Women-health-tracker";
import Senior_citizen_health_tracker from "./Components/Users/My-health-tracker/Senior-citizen-health-tracker";
import Baby_health_tracker from "./Components/Users/My-health-tracker/Baby-health-tracker";

function Content() {
  const location = useLocation();
  const userPaths = [
    "/user-dashboard", 
    "/doctor-prescription",
     "/lab-reports", "/x-ray",
      "/medical-expenses",
       "/basic-health-tracker", 
      "/women-health-tracker",
      "/senior-citizen-health-tracker",
      "/baby-health-tracker"
    ];
  const windowSize = useWindowSize(); 
  const [isSidenavOpen, setIsSidenavOpen] = useState(windowSize >= 768);
  const userRoutes = [
    { path: "/user-dashboard", component: <Userdashboard /> },
    { path: "/doctor-prescription", component: <DoctorsPrescription /> },
    { path: "/lab-reports", component: <LabReports /> },
    { path: "/x-ray", component: <XRay/> },
    { path: "/medical-expenses", component: <Medical /> },
    { path: "/basic-health-tracker", component: <Basic_health_tracker />},
    { path: "/women-health-tracker", component: <Women_health_tracker />},
    { path:"/senior-citizen-health-tracker", component: <Senior_citizen_health_tracker />},
    { path:"/baby-health-tracker", component:<Baby_health_tracker />}

   
  ];
  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  useEffect(() => {
    if (windowSize >= 768) {
      setIsSidenavOpen(true);
    } else {
      setIsSidenavOpen(false);
    }
  }, [windowSize]);
  return (
    <>
      <ToastContainer />
      {!userPaths.includes(location.pathname) && <Navbar />}
      <div className={`flex flex-auto min-w-0 ${isSidenavOpen ? '' : ''}`}>
        {userPaths.includes(location.pathname) && isSidenavOpen && <Sidenav onClose={toggleSidenav} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Policies" element={<Legal />} />
          <Route path="/about" element={<About/>} />
          <Route path="/features" element={<Info/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="register" element={<Register/>} />
          <Route path="sign-in" element={<SignIn/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/questionnaire" element={<Questionnaire/>} />
          
          <Route path="/blogs" element={<Blogs/>} />
          {userPaths.includes(location.pathname) && userRoutes.map(route => (
          <Route path={route.path} element={
            <div className="flex flex-col w-full">
              <UserNavbar onExpandClick={toggleSidenav} isSidenavOpen={isSidenavOpen}/>
              {route.component}
            </div>
          } />
            ))}
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router >
        <Content />
      </Router>
    </div>
  );
}

export default App;