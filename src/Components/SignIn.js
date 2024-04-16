import React from 'react';
import { Formik, Form, Field } from 'formik';
import photo from '../Assets/Final Logo My Records.svg';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center  flex-wrap">
      <div className="w-3/5">
        <img className="mx-auto h-[90vh]" src={photo} alt="Logo" />
      </div>
      <div className="w-2/5">
    <Formik
      initialValues={{ mobileNumber: '1234567890', password: 'password' }}
      onSubmit={(values, { setSubmitting }) => {
        // Simulate a login request
        setTimeout(() => {
         navigate('/user-dashboard');
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-4 w-[80%] " style={{ fontFamily: 'Rubik, sans-serif' }}>
        <h2 className=" text-center font-semibold text-4xl my-7">Sign In</h2>
          <label className="block">
            <span className="text-gray-700">Mobile Number:</span>
            <Field type="text" name="mobileNumber" className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter your mobile number" required />
          </label>
          <label className="block">
            <span className="text-gray-700">Password:</span>
            <Field type="password" name="password" className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter your password" required />
          </label>
          <button className="mt-4 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold" type="submit" disabled={isSubmitting}>
            Sign In
          </button>
        </Form>
      )}
    </Formik>
    </div>
    </div>
  );
};

export default SignIn;