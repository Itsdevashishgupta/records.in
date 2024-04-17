import React from "react";
import { useNavigate  } from "react-router-dom";
import "../Styles/BlogsAndVideos.css";
import SolutionStep from "./SolutionStep";
import video from '../Assets/राष्ट्रीय डिजिटल स्वास्थ्य मिशन भारत में स्वास्थ्य सेवाओं के डिजिटलीकरण की नयी क्रांन्ति  NDHM.mp4'

function BookAppointment() {

  return (
    <div className="ba-section" id="blogs">
     <div className=" flex justify-center">
  <video width="450" height="240" controls className=" rounded-xl">
    <source src={video} type="video/mp4" className=" rounded-lg"  />
    Your browser does not support the video tag.
  </video>
</div>

      <div className="ba-text-content">
        <h3 className="ba-title ">
          <span>Blogs And Videos</span>
        </h3>
       

        <SolutionStep
          title="Devashish Gupta"
          description="Empowering individuals to take control of their health journey through intuitive,
           user friendly health tech solutions that prioritize transparency, education and empowerment.  "
        />
        <SolutionStep
          title="Arvind Maurya "
          description="Empowering individuals to take control of their health journey through intuitive,
           user friendly health tech solutions that prioritize transparency, education and empowerment.  "
        />
      </div>
    </div>
  );
}

export default BookAppointment;
