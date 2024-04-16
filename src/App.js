import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import Userdashboard from "./Components/Userdashboard";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="register" element={<Register/>} />
          <Route path="sign-in" element={<SignIn/>} />
          <Route path="user-dashboard" element={<Userdashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
