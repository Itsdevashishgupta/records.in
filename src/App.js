import React from "react";
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

function Content() {
  const location = useLocation();
  const userPaths = ["/user-dashboard"];
  return (
    <>
    {!userPaths.includes(location.pathname) && <Navbar/>}
    {userPaths.includes(location.pathname) && <UserNavbar/>}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/about" element={<Info/>} />
      <Route path="/features" element={<Info/>} />

      <Route path="/appointment" element={<Appointment />} />
      <Route path="*" element={<NotFound />} />
      <Route path="register" element={<Register/>} />
      <Route path="sign-in" element={<SignIn/>} />
      <Route path="user-dashboard" element={<Userdashboard/>} />
      <Route path="/blogs" element={<Blogs/>} />
    </Routes>
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