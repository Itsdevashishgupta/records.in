import React from 'react';
import { Formik, Form, Field, useField, useFormikContext } from 'formik';
import photo from '../Assets/Final Logo My Records.svg';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import image from '../Assets/Trackers.jpg'
import cookie from 'js-cookie';

const SignInSchema = Yup.object().shape({
  phone: Yup.string()
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
    <div className="bg-gray-100 flex w-full" style={{fontFamily:'"Wix Madefor Display", sans-serif"'}}>
    <header className="bg-blue-500 h-[90vh] text-white text-center py-4 w-1/2 sticky top-0"
     style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    </header>
    <div className="flex justify-center w-1/2 items-center">
    <Formik
      initialValues={{ phone: '8188053879', password: 'Test@123' }}
      validationSchema={SignInSchema}
      onSubmit={async (values, { setSubmitting }) => {
  try {
    const response = await fetch('https://my-record-back.test.psi.initz.run/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
     else{
    const data = await response.json();
    console.log(data);
    cookie.set('token',data.data.accessToken,{expires:7})
    cookie.set('userID',data.data.user,{expires:7})
    navigate('/user-dashboard');
    toast.success("Sign In Successfully!");}
  } catch (error) {
    console.error('Error during sign in:', error);
    toast.error("Sign In Failed!");
  } finally {
    setSubmitting(false);
  }
}}
    >
      {({ errors, touched ,isSubmitting }) => (
        <Form className="p-4 w-[80%] " >
        <h2 className=" text-center font-semibold text-4xl my-7">Sign In</h2>
          <label className="block">
            <span className="text-gray-700">Mobile Number:</span>
            <Field
             type="text"
             name="phone"
             className="mt-1 block w-full p-2 rounded-md border-gray-300 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
             placeholder="Enter your mobile number"/>
            {errors.phone && touched.phone ? (
            <div className=' text-red-500'>{errors.phone}</div>
          ) : null}
          </label>
          <label className="block">
            <span className="text-gray-700">Password:</span>
            <Field type="password" name="password" className="mt-1 block w-full p-2 rounded-md border-gray-300 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter your password" required />
            {errors.password && touched.password ? <div className='text-red-500'>{errors.password}</div> : null}
          </label>
          <button className="mt-4 block cursor-pointer w-full p-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-[#f99a1c] hover:bg-white hover:text-[#f99a1c] hover:border border-[#f99a1c] text-white " type="submit" disabled={isSubmitting}>
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