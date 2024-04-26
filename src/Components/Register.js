import React, { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import photo from '../Assets/Final Logo My Records.svg'
import '../App.css'
import * as Yup from 'yup';
import Select from 'react-select';
import '../Styles/Register.css'
import { useNavigate } from 'react-router-dom';
import image from '../Assets/Trackers.jpg'
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from './Context/authcontext';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  // dob: Yup.date()
  //   .required('Date of Birth is required')
  //   .max(new Date(), 'You cannot enter a date in the future!'),
  gender: Yup.string()
    .required('Gender is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
    .required('Mobile number is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .matches(/(?=.*[0-9])/, 'Password must contain a number')
    .matches(/[^A-Za-z0-9]/, 'Password must contain a special character'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email: Yup.string()
    .email('Invalid email address'),
  address: Yup.string(),
  blood_group: Yup.string()
  .required('Blood Group is required'),
 
  city: Yup.string(),
  state: Yup.string(),
  pincode: Yup.string()
    .matches(/^[0-9]{6}$/, 'Must be exactly 6 digits'),
  
});

const Register = () => {
  const navigate=useNavigate()
  const { setPhone, setPassword } = useContext(UserContext);

  const blood_groupOptions = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
  ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div className="bg-gray-100 flex w-full" style={{fontFamily:'"Wix Madefor Display", sans-serif"'}}>
    <header className="bg-blue-500 h-[100vh] text-white text-center py-4 w-1/2 sticky top-0 "
     style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    </header>
    <div className="flex justify-center w-1/2">
    <Formik
 initialValues={{
    name: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    blood_group: "",
    pincode: "",
    occupation: "",
    password: "",
    confirmPassword: ""
}}
  validationSchema={validationSchema}
  onSubmit={async (values, { setSubmitting }) => {
    setPhone(values.phone);
      setPassword(values.password);
  
const response = await fetch('https://my-record-back.test.psi.initz.run/api/v1/users/sendOtp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(values)
});
   console.log(response)
   const res=await response.json()
    if (!response.ok) {
    
      toast.error(res.error.message);
    }
    else{
    navigate('/verify');
    }
  
}}
>

          {({ errors, touched }) => (
    <Form className=" p-4 w-[90%] " >
    <h2 className=" text-center font-semibold text-4xl my-7">Register</h2>
    <div className=' flex flex-col gap-5'>
    <div className=' grid grid-cols-2 gap-4'>
      <label className="block">
        <span className="text-gray-700">Name</span>
        <Field 
    className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
    type="text" 
    name="name" 
    required 
  />        <ErrorMessage className='text-red-500' name="name" component="div" />
      </label>
      <label className="block">
        <span className="text-gray-700">Date of Birth</span>
        <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="date" name="dob" required />
        <ErrorMessage className=' text-red-500' name="dob" component="div" />
      </label>
      </div>
      <div className=' grid grid-cols-2 gap-4'>
    <label className="block">
  <span className="text-gray-700">Gender</span>
  <Field name="gender">
    {({ field, form }) => (
      <Select
        className="mt-1 block w-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        options={genderOptions}
        name={field.name}
        value={genderOptions ? genderOptions.find(option => option.value === field.value) : ''}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
        placeholder="Select your gender"
      />
    )}
  </Field>
  <ErrorMessage className=' text-red-500' name="gender" component="div" />
</label>
  <label className="block">
  <span className="text-gray-700">Blood Group</span>
  <Field name="blood_group">
    {({ field, form }) => (
      <Select
        className="mt-1 block w-full  rounded-md shadow-sm hover:border-[#f99a1c] focus:border-[#f99a1c] focus:ring focus:ring-[#f99a1c] focus:ring-opacity-50"
        options={blood_groupOptions}
        name={field.name}
        value={blood_groupOptions ? blood_groupOptions.find(option => option.value === field.value) : ''}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
        placeholder="Select your blood group"
      />
    )}
  </Field>
  <ErrorMessage className=' text-red-500' name="blood_group" component="div" />
</label>
</div>
       <label className="block">
        <span className="text-gray-700">Mobile Number</span>
        <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="phone" placeholder="Enter your mobile number" required />
        <ErrorMessage className=' text-red-500' name="phone" component="div" />
      </label>
      <label className="block">
        <span className="text-gray-700">Password</span>
        <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="password" name="password" placeholder="Enter your Password" required />
        <ErrorMessage className=' text-red-500' name="password" component="div" />
      </label>
      <label className="block">
        <span className="text-gray-700">Confirm Password</span>
        <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="password" name="confirmPassword" placeholder="Enter your Password" required />
        <ErrorMessage className=' text-red-500' name="confirmPassword" component="div" />
      </label>
    
      <label className="block">
  <span className="text-gray-700">Email (Optional)</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="email" name="email" placeholder="Enter your email" />
 
</label>
<label className="block">
  <span className="text-gray-700">Address</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="address" placeholder="Enter your address" required />
</label>

<label className="block">
  <span className="text-gray-700">Pin Code</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="pincode" placeholder="Enter your pin code" required />
  <ErrorMessage className=' text-red-500' name="pincode" component="div" />
</label>
<label className="block">
  <span className="text-gray-700">Occupation (Optional)</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="occupation" placeholder="Enter your occupation"/>
 
</label>
      
      <button className="mt-4 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-[#f99a1c] hover:border-[#f99a1c] hover:bg-white hover:text-[#f99a1c] text-white font-bold" type="submit">Register</button>
      </div>
    </Form>
  )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;