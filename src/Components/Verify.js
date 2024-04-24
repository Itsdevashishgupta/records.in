import React, { useState } from 'react'
import '../Styles/verify.css'
import { useNavigate } from 'react-router-dom';
import image from '../Assets/Trackers.jpg'
const Verify = () => {
    const [otp, setOTP] = useState('');
  const navigate=useNavigate()
    const handleChange = (e) => {
      setOTP(e.target.value);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/questionnaire')
    };
  return (
    <div className="bg-gray-100 h-[90vh] flex w-full" style={{fontFamily:"'Rubik', sans-serif"}}>
         <header className="bg-blue-500 text-white text-center py-4 w-1/2"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    
    </header>
    <div className="container mx-auto mt-8 flex flex-col justify-center items-center w-1/2">
      <h2 className="text-4xl font-semibold mb-4">Validate OTP</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label htmlFor="otp" className="block mb-2">Please enter the OTP (one-time password) to verify your account. A Code has been sent to *******179</label>
        <input type="text" id="otp" value={otp} onChange={handleChange} className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md" placeholder="Enter OTP" />
        <button type="submit" className=" text-white px-4 py-2 rounded-md w-full bg-[#f99a1c] hover:bg-white hover:text-[#f99a1c] hover:border border-[#f99a1c]">Verify</button>
        <p className="mt-2">Not received your code? <button className="text-blue-500">Resend code</button></p>
      </form>
    </div>
    </div>
  )
}

export default Verify