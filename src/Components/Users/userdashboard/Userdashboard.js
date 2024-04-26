import React, { useEffect, useState } from 'react';
import { FaFileContract, FaUser, FaUserMd } from 'react-icons/fa';
import Bmi from '../../../Assets/BMI-Calculator.webp'
import health from '../../../Assets/healthScore.png'
import axios from 'axios';
import cookie from 'js-cookie';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const token = cookie.get('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-record-back.test.psi.initz.run/api/v1/users/getuser-data/6626496fc190e2f9736734db', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    
    fetchData();
  }, []);


  return (
    <div className="p-8 bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold">Hello, Devashish Gupta</h1>
        <p className="text-gray-500">Age: 24 | Height: 6'0" | Weight: 180 lbs</p>
      </div>
      <h2 className="text-xl font-bold">Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
  <div className="bg-white rounded-md shadow-md p-6">
    <h2 className="text-xl font-bold flex items-center text-blue-600"><FaUser className="mr-2 text-blue-600"/> Personal Details</h2>
    <div className="mt-4 space-y-2">
      <p><span className="font-semibold">Name:</span> Devashish Gupta</p>
      <p><span className="font-semibold">Gender, Age, DOB:</span> Male, 24Y, 20/07/2000</p>
      <p><span className="font-semibold">Height:</span> 5ft 5in</p>
      <p><span className="font-semibold">Weight:</span> 142 lbs</p>
      <p><span className="font-semibold">Blood Group:</span> B+</p>
      <p><span className="font-semibold">Occupation:</span> -----</p>
      <p><span className="font-semibold">Address:</span> 123 Main StreetCitytown, State Country</p>
      <p><span className="font-semibold">Contact:</span> 9999999999</p>
      <p><span className="font-semibold">Email:</span> demo@gmail.com</p>
    </div>
  </div>
  <div className="bg-white rounded shadow-md p-6">
    <h2 className="text-xl font-bold flex items-center text-green-600"><FaUserMd className="mr-2 text-green-600"/> Family Doctor Details</h2>
    <div className="mt-4 space-y-2">
      <p><span className="font-semibold">Name:</span> Dr Shashank Trivedi</p>
      <p><span className="font-semibold">Age:</span> 45</p>
      <p><span className="font-semibold">Experience:</span> 20 years</p>
      <p><span className="font-semibold">Post:</span> Senior Consultant</p>
    </div>
  </div>
  <div className="bg-white rounded shadow-md p-6">
    <h2 className="text-xl font-bold flex items-center text-red-600"><FaFileContract className="mr-2 text-red-600"/> Medical Insurance Details</h2>
    <div className="mt-4 space-y-2">
      <p><span className="font-semibold">Insurance Company:</span> XYZ Health Insurance</p>
      <p><span className="font-semibold">Policy Number:</span> 123456789</p>
      <p><span className="font-semibold">Validity:</span> January 1, 2024 - December 31, 2024</p>
      <p><span className="font-semibold">Coverage:</span> Medical, Dental, Vision</p>
      <p><span className="font-semibold">Co-payment:</span> ₹20 for doctor visits</p>
      <p><span className="font-semibold">Contact Number:</span> 1-800-XYZ-INSURE</p>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
        <div className="bg-white rounded shadow-md p-6  text-center ">
        <img src={Bmi} alt="" />
       <h2 className='text-xl font-semibold mt-4'>BMI Score</h2>
            </div>
            <div className="bg-white rounded shadow-md p-6 text-center flex flex-col justify-between">
            <img src={health} alt="" />
            <h2 className='text-xl font-semibold mt-4'>Health Score</h2>
            </div>
            
          
        
        
       
      </div>
          <h2 className="text-xl font-bold">Health Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded shadow-md p-6">
        
        <div className="flex flex-col gap-3">
              <h3 className='text-xl font-semibold'>Lose 20 lbs</h3>
              <p>Target weight: 160 lbs</p>
              <div className="h-2 w-full bg-gray-200 rounded">
                <div className="h-full bg-blue-500 rounded" style={{width: '50%'}}></div>
              </div>
            </div>
            </div>
            <div className="bg-white rounded shadow-md p-6">
            <div className="flex flex-col gap-3">
              <h3 className='text-xl font-semibold'>Run a 2K</h3>
              <p>Target distance: 5K</p>
              <div className="h-2 w-full bg-gray-200 rounded">
                <div className="h-full bg-green-500 rounded" style={{width: '40%'}}></div>
              </div>
            </div>
            </div>
            <div className="bg-white rounded shadow-md p-6">
            <div className="flex flex-col gap-3">
              <h3 className='text-xl font-semibold'>Improve Sleep</h3>
              <p>Target hours: 8</p>
              <div className="h-2 w-full bg-gray-200 rounded">
                <div className="h-full bg-yellow-500 rounded" style={{width: '75%'}}></div>
              </div>
            </div>
            </div>
          
        
        
       
      </div>
    </div>
  );
};

export default ProfilePage;
