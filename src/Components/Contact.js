import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";
import photo from '../Assets/health_records-removebg-preview.png'
import Footer from "./Footer";

function Contact() {
  let rMessage, rName, rLocation;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
    rMessage = reviewMessage.message;
  };

  handleReviewsUpdation();

  return (
    <div className=" w-full">
    <div className="review-section " id="Contacts">
      
      <div>
        <img src={photo} alt="" />
      </div>
     
      <div className="relative py-3 sm:max-w-xl sm:mx-auto" style={{ fontFamily: '"Wix Madefor Display", sans-serif' }} >
        <div className="relative px-4 py-10  mx-8 md:mx-0  ">
          <div className="max-w-2xl mx-auto w-[28rem]">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h3 className="ba-title"><span>Contact Us</span></h3>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 font-['Rubik', sans-serif]">
                <div className="flex flex-col">
                  <label className="leading-loose">Full Name</label>
                  <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Full Name"/>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Mobile Number</label>
                  <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Mobile Number"/>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Email</label>
                  <input type="email" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Email"/>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">How Can We Help You?</label>
                  <textarea className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="How Can We Help You?"></textarea>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                  <button className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-[#f99a1c] hover:bg-white border border-[#f99a1c] hover:text-[#f99a1c] hover:shadow-lg">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     </div>
     <Footer/>
     </div>
    
  );
}

export default Contact;
