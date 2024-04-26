import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import Footer from "./Footer";

function About() {
  return (
    <div className=" flex flex-col">
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
            With the rising health issues and migration of people towards digital platforms we came up with designing a platform which will solve health data management & storage problem for the users and will help in maintaining records and files in digital form for them and there loved once.

            Also, with this we are focused to help them in adopting a healthy lifestyle by tracking their health journey through data, by the way of providing them unique and scientific tools to deliver accurate data.

            By this platform we are also enabling doctors to access all the health data of patient and getting a better understanding through accessing there family health data.
        </p>

        <SolutionStep
          title="Mission"
            description="At the intersection of health care and technology, our mission is to pioneer innovative solutions that revolutionize patient expression, enable better clinical outcomes, and drive progress towards healthier future for everyone.  "
        />

        <SolutionStep
          title="Vision"
            description="Empowering individuals to take control of their health journey through intuitive, user-friendly health-tech solutions that brings transparency to all the end users of information. "
        />
        
        <SolutionStep
          title="Goal"
            description="Our goal is to record and arrange all the medical data of our users digitally in a way which will help them and health care professional to get better understanding of patients health and history to derive better clinical outcomes"
        />

       
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;
