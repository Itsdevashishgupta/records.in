import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import photo from "../Assets/Final Logo My Records-1.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate=useNavigate()

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src={photo} alt="" className="w-20 h-20" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="/features" className="navbar-links">
            Features
          </a>
        </li>
        <li>
          <a href="/about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="/blogs" className="navbar-links">
            Blogs
          </a>
        </li>
        <li>
          <a href="/contact" className="navbar-links">
            Contact Us
          </a>
        </li>
        <li className="dropdown">
    <a href="#" className="navbar-links dropdown-toggle">
      Privacy & Security Policy
    </a>
    <ul className="dropdown-menu">
      <li>
        <a href="/Policies" className="dropdown-item">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="/security-policy" className="dropdown-item">
          Security Policy
        </a>
      </li>
      <li>
        <a href="/terms-of-use" className="dropdown-item">
          Terms of Use
        </a>
      </li>
    </ul>
  </li>
      </ul>
<div className="flex gap-2">
      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={()=>navigate('/sign-in')}
        
      >
         Sign In
      </button>
      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={()=>navigate('/register')}
        
      >
         Sign Up
      </button>
     
</div>
      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="/features">
              Features
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/blogs">
              Blogs
            </a>
          </li>
        
          <li>
            <a onClick={openNav} href="/contact">
              Contact
            </a>
          </li>
          <li className="dropdown">
    <a onClick={openNav} href="#" className="dropdown-toggle">
      Privacy & Security Policy
    </a>
    <ul className="dropdown-menu">
      <li>
        <a onClick={openNav} href="/privacy-policy" className="dropdown-item">
          Privacy Policy
        </a>
      </li>
      <li>
        <a onClick={openNav} href="/security-policy" className="dropdown-item">
          Security Policy
        </a>
      </li>
      <li>
        <a onClick={openNav} href="/terms-of-use" className="dropdown-item">
          Terms of Use
        </a>
      </li>
    </ul>
  </li>

  <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={()=>navigate('/sign-in')}
        
      >
         Sign In
      </button>
      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={()=>navigate('/register')}
        
      >
         Sign Up
      </button>
        </ul>
    
     

      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
