import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          My-Records.in
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to My-Records.in! We're here to help you manage your health online. Our aim is to make healthcare easy and personalized just for you. When you use our website, you agree to follow our rules in the Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        We take your privacy seriously. Our Privacy Policy explains how we gather, utilize, and safeguard your personal and medical data. We prioritize secure data management, ensuring that your information remains confidential and protected at all times.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        By accessing My-Records.in, you are agreeing to our Terms of Service. These terms outline the rules for using our platform, engaging with healthcare professionals, and the obligations of both users and providers. Understanding and abiding by these terms is crucial for ensuring a seamless experience for everyone involved.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        On our platform, you can chat with experienced doctors for medical advice. While these online consultations are convenient, they're not a substitute for seeing a doctor in person. It's important to give accurate details for the best care.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        At My-Records.in, we're committed to putting you in control of your health. Our user-friendly app empowers you to manage your medical records with ease, focusing on privacy and security for peace of mind. We envision a world where transparent health tech solutions enable seamless navigation of health journeys. Our mission is to lead innovation, enhance patient experiences, and contribute to a healthier future for everyone. We're dedicated to reducing paper records in the healthcare industry, supporting environmental sustainability.
        </p>
      </div>

      <div className="legal-footer">
        <p>© MY-RECORDS.IN. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
