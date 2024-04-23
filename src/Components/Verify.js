import React, { useState } from 'react'
import '../Styles/verify.css'
import { useNavigate } from 'react-router-dom';
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
         <header className="bg-blue-500 text-white text-center py-4 w-1/2">
      <h1 className="text-4xl font-bold text-left ml-8 mt-12">File Se Mobile Tak</h1>
      <div className='flex flex-col justify-center items-center h-[70vh]'>
      <p>We care about your account security.</p>
      <p>We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.</p>
      </div>
    </header>
    <div className="container mx-auto mt-8 flex flex-col justify-center items-center w-1/2">
      <h2 className="text-4xl font-semibold mb-4">Validate OTP</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label htmlFor="otp" className="block mb-2">Please enter the OTP (one-time password) to verify your account. A Code has been sent to *******179</label>
        <input type="text" id="otp" value={otp} onChange={handleChange} className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md" placeholder="Enter OTP" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Verify</button>
        <p className="mt-2">Not received your code? <button className="text-blue-500">Resend code</button></p>
      </form>
    </div>
    </div>
  )
}

export default Verify