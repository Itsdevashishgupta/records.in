import React from 'react';
import photo from '../../../Assets/1.avif';

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
      <div className='flex py-8 justify-center flex-wrap'>
        <div className='bg-white w-full px-10 py-8 rounded-lg flex justify-between'>

          <div className='flex gap-5 justify-center items-center'>
          <img src={userData.photoUrl} alt="User" className='w-20 item-center rounded-full' />
          <div>
          <h1>Devashish Gupta</h1>
          <p>Male, 23Y, 20/05/2000</p>
          </div>
          </div>
        </div>
        <div className='w-1/5'>
        
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
