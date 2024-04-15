import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";
import SolutionStep from "./SolutionStep";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
       
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
