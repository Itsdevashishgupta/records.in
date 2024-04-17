import React from 'react';
import { Formik, Form, Field, useField, useFormikContext } from 'formik';
import photo from '../Assets/Final Logo My Records.svg';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  mobileNumber: Yup.string()
    .required('Mobile Number is required')
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
});



const SignIn = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center  flex-wrap">
      <div className="w-3/5">
        <img className="mx-auto h-[90vh]" src={photo} alt="Logo" />
      </div>
      <div className="w-2/5">
    <Formik
      initialValues={{ mobileNumber: 1234567890, password: 'password' }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
         navigate('/user-dashboard');
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched ,isSubmitting }) => (
        <Form className="p-4 w-[80%] " style={{ fontFamily: 'Rubik, sans-serif' }}>
        <h2 className=" text-center font-semibold text-4xl my-7">Sign In</h2>
          <label className="block">
            <span className="text-gray-700">Mobile Number:</span>
            <Field
             type="text"
             name="mobileNumber"
             className="mt-1 block w-full p-2 rounded-md border-gray-300 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
             placeholder="Enter your mobile number"/>
            {errors.mobileNumber && touched.mobileNumber ? (
            <div className=' text-red-500'>{errors.mobileNumber}</div>
          ) : null}
          </label>
          <label className="block">
            <span className="text-gray-700">Password:</span>
            <Field type="password" name="password" className="mt-1 block w-full p-2 rounded-md border-gray-300 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter your password" required />
            {errors.password && touched.password ? <div className='text-red-500'>{errors.password}</div> : null}
          </label>
          <button className="mt-4 block w-full p-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-[#f99a1c] hover:bg-white hover:text-[#f99a1c] hover:border border-[#f99a1c] text-white " type="submit" disabled={isSubmitting}>
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