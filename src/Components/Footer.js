import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import photo from '../Assets/Final Logo My Records.svg'
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
             <img src={photo} alt="" className="w-72" />
            </p>
           
          </div>

          <SubscribeNewsletter />
        </div>

       

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li className="flex items-center">
            <IoMdMail />
              <a href="contact@my-records.in" className="ml-3">
              contact@my-records.in
              </a>
            </li>
            <li className=" flex items-center">
            <FaPhone />
              <a href="tel:+022 5454 5252" className="ml-3">8468010824</a>
            </li>
           
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© SHISYA SOFT TECH INDIA PVT LTD. All rights reserved.</p>

        <ul className="ft-social-links">
        <li>
            <a
              href="#"
              title="Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp/>
            </a> 
          </li>
          <li>
            <a
              href="https://www.instagram.com/myrecords.in/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram/>
            
            </a>
          </li>

          <li>
            <a
              href="https://facebook.com/my-records.in"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FaFacebook/>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/myrecordsin"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter/>
            </a> 
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Footer;
