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
          <div className="relative inline-block text-left">
  <div>
    <button type="button" onClick={openNav} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
      Privacy & Security Policy
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>

  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="/privacy-policy" onClick={openNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Privacy Policy</a>
      <a href="/security-policy" onClick={openNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Security Policy</a>
      <a href="/terms-of-use" onClick={openNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Terms of Use</a>
    </div>
  </div>
</div>

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
