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

function Content() {
  const location = useLocation();
  const userPaths = ["/user-dashboard"];
  const windowSize = useWindowSize(); // use the custom hook
  const [isSidenavOpen, setIsSidenavOpen] = useState(windowSize >= 768);

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
      {!userPaths.includes(location.pathname) && <Navbar />}
      <div className={`flex flex-auto min-w-0 ${isSidenavOpen ? '' : ''}`}>
        {userPaths.includes(location.pathname) && isSidenavOpen && <Sidenav onClose={toggleSidenav} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/about" element={<Info/>} />
          <Route path="/features" element={<Info/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="register" element={<Register/>} />
          <Route path="sign-in" element={<SignIn/>} />
          <Route path="/blogs" element={<Blogs/>} />
          {userPaths.includes(location.pathname) && (
            <Route path="/user-dashboard" element={
              <div className="flex flex-col w-full">
                <UserNavbar  onExpandClick={toggleSidenav} isSidenavOpen={isSidenavOpen}/>
                <Userdashboard/>
              </div>
            } />
          )}
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