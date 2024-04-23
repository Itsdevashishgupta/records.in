import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Features";
import About from "../Components/About";
import BookAppointment from "../Components/BlogsAndVideos";
import Reviews from "../Components/Contact";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Abha from "../Components/Abha";

function Home() {
  return (
    <div className="home-section">
      <Hero />
      <Abha/>
   
      <Footer />
    </div>
  );
}

export default Home;
