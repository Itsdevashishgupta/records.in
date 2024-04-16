import React from 'react';
import { Formik, Field, Form } from 'formik';
import photo from '../Assets/Final Logo My Records.svg'

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <img className="mx-auto" src={photo} alt="Logo" />
      </div>
      <div className="w-1/2">
        <Formik
          initialValues={{
            name: '',
            dob: '',
            gender: '',
            mobileNumber: '',
            email: '',
            address: '',
            area: '',
            pinCode: '',
            occupation: '',
          }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Name:</span>
                <Field className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="name" required />
              </label>
              <label className="block">
  <span className="text-gray-700">Gender:</span>
  <Field as="select" name="gender" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
    <option value="">Select...</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </Field>
</label>
<label className="block">
  <span className="text-gray-700">Mobile Number:</span>
  <Field type="text" name="mobileNumber" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
</label>
<label className="block">
  <span className="text-gray-700">Email:</span>
  <Field type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</label>
<label className="block">
  <span className="text-gray-700">Address:</span>
  <Field type="text" name="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
</label>
<label className="block">
  <span className="text-gray-700">Area:</span>
  <Field type="text" name="area" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
</label>
<label className="block">
  <span className="text-gray-700">Pin code:</span>
  <Field type="text" name="pinCode" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
</label>
<label className="block">
  <span className="text-gray-700">Occupation:</span>
  <Field type="text" name="occupation" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</label>
              <button className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Register</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;