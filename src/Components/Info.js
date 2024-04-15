import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth,faBaby,faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { IoWoman } from "react-icons/io5";
import { MdElderlyWoman, MdHealthAndSafety } from "react-icons/md";
import { TiCloudStorage } from "react-icons/ti";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Newborn Baby Immunization"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faBaby}
        />
       
         <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       <IoWoman/>
      </span>
      <p className="info-card-title">Women health management</p>
      <p className="info-card-description"></p>
    </div>

    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       <MdElderlyWoman/>
      </span>
      <p className="info-card-title">Senior Citizens health Management</p>
      <p className="info-card-description"></p>
    </div>

    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       <TiCloudStorage/>
      </span>
      <p className="info-card-title"> Secure data storage</p>
      <p className="info-card-description"></p>
    </div>

    <InformationCard
          title="Appointment Management"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faCalendarCheck}
        />

        <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       <MdHealthAndSafety/>
      </span>
      <p className="info-card-title"> Health Insurance Policy </p>
      <p className="info-card-description"></p>
    </div>
      </div>
    </div>
  );
}

export default Info;
