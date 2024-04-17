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

    const calculateHealthScore = () => {
      const healthScore = 70;
      return healthScore;
    };

    const categorizeHealthScore = (score) => {
    if (score >= 70) {
      return 'Good';
    } else if (score >= 40) {
      return 'Average';
    } else {
      return 'Bad';
    }
  };
  const healthScore = calculateHealthScore();
  const healthStatus = categorizeHealthScore(healthScore);
  
  const insuranceDetails = {
    companyName: 'United India Insurance',
    policyNo: '1234567890',
    expiresOn: '12/12/2024',
  }

  return (
    <div className='bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] h-[auto]' style={{ fontFamily: 'Rubik, sans-serif' }}>
      <div className='flex py-8 justify-center flex-wrap'>
        <div className='bg-white w-3/5 px-10 py-8 rounded-lg flex justify-between'>
          <div>
            <h1 className='font-extrabold text-2xl mb-2'>Hello, {userData.name}</h1>
            <div style={{ fontFamily: 'Rubik, sans-serif' }}>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Name:          {userData.name}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Age:              {userData.age}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Gender:        {userData.gender}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Blood Group:  {userData.bloodGroup}</pre>
            </div> <br></br> <hr></hr> <br></br>

            <h2 className='font-semibold'>Family Doctor Details </h2> <br></br>
            <div style={{ fontFamily: 'Rubik, sans-serif' }}>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Name:             {doctorData.name}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Gender:          {doctorData.gender}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Title:                {doctorData.title}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Speciality:      {doctorData.speciality}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Expirence:     {doctorData.expirence} years</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Address:         {doctorData.address}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Contact No:   {doctorData.contactNo}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Email:              {doctorData.email}</pre>
            </div> <br></br> <hr></hr> <br></br>
            
            <h2 className='font-semibold'> Health Score </h2> <br></br>
            <div style={{ fontFamily: 'Rubik, sans-serif' }}>
            <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Score:    {healthScore}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Status:  {healthStatus}</pre>  
            </div> <br></br> <hr></hr> <br></br>

            <h2 className='font-semibold'>Medical Insurance Details</h2> <br></br>
            <div style={{fontFamily: 'Rubik, sans-serif'}}>
            <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Company Name:     {insuranceDetails.companyName}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Policy Number:       {insuranceDetails.policyNo}</pre>
              <pre style={{ fontFamily: 'Rubik, sans-serif' }}>Expires On:              {insuranceDetails.expiresOn}</pre>

            </div>
            
          </div>

          <div className=''>
          <img src={userData.photoUrl} alt="User" className='w-20 item-center rounded-full' />
          </div>
        </div>
        <div className='w-1/5'>
        
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
