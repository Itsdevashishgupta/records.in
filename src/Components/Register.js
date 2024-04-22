import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import photo from '../Assets/Final Logo My Records.svg'
import '../App.css'
import * as Yup from 'yup';
import Select from 'react-select';
import '../Styles/Register.css'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  dob: Yup.date()
    .required('Date of Birth is required')
    .max(new Date(), 'You cannot enter a date in the future!'),
  gender: Yup.string()
    .required('Gender is required'),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
    .required('Mobile number is required'),
  email: Yup.string()
    .email('Invalid email address'),
  address: Yup.string(),
  bloodGroup: Yup.string()
  .required('Blood Group is required'),
 
  city: Yup.string(),
  state: Yup.string(),
  pinCode: Yup.string()
    .matches(/^[0-9]{6}$/, 'Must be exactly 6 digits'),
  
});

const Register = () => {
  const bloodGroupOptions = [
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
    <div className="flex justify-center items-cente flex-wrap">
      <div className="w-3/5">
        <img className="mx-auto h-[90vh]" src={photo} alt="Logo"/>
      </div>
      <div className="w-2/5">
      <Formik
  initialValues={{
    name: '',
    dob: '',
    gender: '',
    mobileNumber: '',
    bloodGroup: '',
    email: '',
    address: '',
    locality: '',
    city: '',
    state: '',
    pinCode: '',
    occupation: '',
  }}
  validationSchema={validationSchema}
  onSubmit={values => {
    console.log(values);
  }}
>
          {({ errors, touched }) => (
    <Form className=" p-4  w-[80%] " style={{ fontFamily: 'Rubik, sans-serif' }}>
    <h2 className=" text-center font-semibold text-4xl my-7">Register</h2>
      <label className="block">
        <span className="text-gray-700">Name:</span>
        <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="name" placeholder="Enter your name" required />
        <ErrorMessage className='text-red-500' name="name" component="div" />
      </label>
      <label className="block">
        <span className="text-gray-700">Date of Birth:</span>
        <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="date" name="dob" required />
        <ErrorMessage className=' text-red-500' name="dob" component="div" />
      </label>
    <label className="block">
  <span className="text-gray-700">Gender:</span>
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
        <span className="text-gray-700">Mobile Number:</span>
        <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="mobileNumber" placeholder="Enter your mobile number" required />
        <ErrorMessage className=' text-red-500' name="mobileNumber" component="div" />
      </label>
      <label className="block">
  <span className="text-gray-700">Blood Group:</span>
  <Field name="bloodGroup">
    {({ field, form }) => (
      <Select
        className="mt-1 block w-full  rounded-md shadow-sm hover:border-[#f99a1c] focus:border-[#f99a1c] focus:ring focus:ring-[#f99a1c] focus:ring-opacity-50"
        options={bloodGroupOptions}
        name={field.name}
        value={bloodGroupOptions ? bloodGroupOptions.find(option => option.value === field.value) : ''}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
        placeholder="Select your blood group"
      />
    )}
  </Field>
  <ErrorMessage className=' text-red-500' name="bloodGroup" component="div" />
</label>
      <label className="block">
  <span className="text-gray-700">Email:</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="email" name="email" placeholder="Enter your email" />
 
</label>
<label className="block">
  <span className="text-gray-700">Address:</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="address" placeholder="Enter your address" required />
</label>
<label className="block">
  <span className="text-gray-700">Locality:</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="locality" placeholder="Enter your locality"  />
  <ErrorMessage className=' text-red-500' name="locality" component="div" />
</label>
<label className="block">
  <span className="text-gray-700">City:</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="city" placeholder="Enter your city" required />
  <ErrorMessage className=' text-red-500' name="city" component="div" />
</label>
<label className="block">
  <span className="text-gray-700">State:</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="state" placeholder="Enter your state" required />
  <ErrorMessage className=' text-red-500' name="state" component="div" />
</label>
<label className="block">
  <span className="text-gray-700">Pin Code:</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="pinCode" placeholder="Enter your pin code" required />
  <ErrorMessage className=' text-red-500' name="pinCode" component="div" />
</label>
<label className="block">
  <span className="text-gray-700">Occupation:</span>
  <Field className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="occupation" placeholder="Enter your occupation"/>
  <ErrorMessage className=' text-red-500' name="occupation" component="div" />
</label>
      
      <button className="mt-4 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold" type="submit">Register</button>
    </Form>
  )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;