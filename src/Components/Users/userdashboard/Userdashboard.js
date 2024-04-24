import React from 'react';
import photo from '../../../Assets/1.avif';
import bmiMeter from '../../../Assets/BMI-Calculator.webp' 

const Userdashboard = () => {
  const userData = {
    name: "Devashish",
    age: 25,
    gender: "Male",
    bloodGroup: "O+",
    photoUrl: photo
  };
  const doctorData = {
    name: 'R.K Singh',
    gender: 'Male',
    title: 'MD',
    speciality: 'Cardiology',
    expirence: 12,
    contactNo: '98XXXXXX10',
    email: 'rk.singh@gmail.com',
    address: 'D-20 Lajpat Nagar, New Delhi',
    };

   

   
  
    
  
  let healthStatus
  
  const healthScore = 80;

  if (healthScore>= 70) {
    healthStatus = 'Good'
  } else if (healthScore >= 40 && healthScore <70) {
    healthStatus = 'Average';
  } else {
    healthStatus = 'Bad';
  }
  
  const insuranceDetails = {
    companyName: 'United India Insurance',
    policyNo: '1234567890',
    expiresOn: '12/12/2024',
  }

  return (
    <div className='bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] h-[auto] p-10' style={{ fontFamily: 'Rubik, sans-serif' }}>
      <div className='flex py-8 justify-center flex-wrap gap-12'>
        <div className=' w-6/12 gap-8 rounded-lg flex flex-col justify-between'>
        
         <div className='flex gap-12 bg-white px-10 py-8'>
         <div className=' flex flex-col gap-6'>
          <div className='flex gap-5 justify-center items-center'>
          <img src={userData.photoUrl} alt="User" className='w-20 item-center rounded-full' />
          <div>
          <h1>Devashish Gupta</h1>
          <p>Male, 23Y, 20/07/2000</p>
          </div>
          </div>
          <div className=' flex gap-5'>
          <div>
              <h1 className=' text-gray-400'>Height</h1>
              <p>5ft 5in</p>
            </div>
          <div>
              <h1 className=' text-gray-400'>Weight</h1>
              <p>142 lbs</p>
            </div>
          </div>
          <div className=' flex gap-5'>
          <div >
              <h1 className=' text-gray-400'>Blood Group</h1>
              <p>B+</p>
            </div>
          <div >
              <h1 className=' text-gray-400'>Occupation</h1>
              <p>-----</p>
            </div>
          </div>
          </div>
          <div className=' flex flex-col gap-3' >
          <div>
            <h1 className=' text-gray-400'>Address</h1>
            <p>123 Main StreetCitytown,</p>
            <p> State Country</p>
            </div>
            <div>
              <h1 className=' text-gray-400'>Contact</h1>
              <p>9999999999</p>
            </div>
            <div>
              <h1 className=' text-gray-400'>Email</h1>
              <p>demo@gmail.com</p>
            </div>
          </div>
          </div>
          <div className='bg-white px-10 py-8 mb-4 '>
  <h1 className='font-semibold text-lg underline underline-offset'>Family Doctor Details</h1>
  <div>
  <p><span class="font-bold">Name:</span> Dr. John Smith</p>
  <p><span class="font-bold">Age:</span> 45</p>
  <p><span class="font-bold">Experience:</span> 20 years</p>
  <p><span class="font-bold">Post:</span> Senior Consultant</p>
</div>



</div>
          <div className='bg-white px-10 py-8 mb-4 '>
  <h1 className='font-semibold text-lg underline underline-offset mb-4'>Medical Insurance Details</h1>
  <ul class="list-disc">
  <li><span class="font-bold">Insurance Company:</span> XYZ Health Insurance</li>
  <li><span class="font-bold">Policy Number:</span> 123456789</li>
  <li><span class="font-bold">Validity:</span> January 1, 2024 - December 31, 2024</li>
  <li><span class="font-bold">Coverage:</span> Medical, Dental, Vision</li>
  <li><span class="font-bold">Co-payment:</span> $20 for doctor visits</li>
  <li><span class="font-bold">Contact Number:</span> 1-800-XYZ-INSURE</li>
</ul>
</div>
        </div>
        <div className='w-5/12 h-1/2 bg-white justify-center flex'>
          <img src={bmiMeter} alt="" className='w-[70%]'/>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
