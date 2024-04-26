import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";
import photo from '../Assets/health_records-removebg-preview.png'
import Footer from "./Footer";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

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
     
      <div className="relative py-3 sm:max-w-xl sm:mx-auto lg:w-[30%] w-[70%] " style={{ fontFamily: '"Wix Madefor Display", sans-serif' }} >
        <div className="relative px-4 py-10  mx-8 md:mx-0  ">
        <Formik
  initialValues={{
    fullName: '',
    phone: '',
    email: '',
    message: '',
  }}
  onSubmit={async (values) => {
    try {
    const response = await axios.post('https://my-record-back.test.psi.initz.run/api/v1/users/send-contact', values);
    if (response.status === 200) {
      toast.success('Form submitted successfully');
    } else {
      toast.error('Something went wrong');
    }
  } catch (error) {
    toast.error('Something went wrong');
  }
  }}
>
  <Form className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 font-['Rubik', sans-serif]">
    <div className="flex flex-col">
      <label className="leading-loose">Full Name</label>
      <Field
        type="text"
        name="fullName"
        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
        placeholder="Full Name"
      />
    </div>
    <div className="flex flex-col">
      <label className="leading-loose">Mobile Number</label>
      <Field
        type="text"
        name="phone"
        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
        placeholder="Mobile Number"
      />
    </div>
    <div className="flex flex-col">
      <label className="leading-loose">Email</label>
      <Field
        type="email"
        name="email"
        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
        placeholder="Email"
      />
    </div>
    <div className="flex flex-col">
      <label className="leading-loose">How Can We Help You?</label>
      <Field
        as="textarea"
        name="message"
        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
        placeholder="How Can We Help You?"
      />
    </div>
    <div className="pt-4 flex items-center space-x-4">
      <button
        type="submit"
        className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-[#f99a1c] hover:bg-white border border-[#f99a1c] hover:text-[#f99a1c] hover:shadow-lg"
      >
        Send
      </button>
    </div>
  </Form>
</Formik>
        </div>
      </div>
     
     </div>
     <Footer/>
     </div>
    
  );
}

export default Contact;
