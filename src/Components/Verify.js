import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../Styles/verify.css';
import { useNavigate } from 'react-router-dom';
import image from '../Assets/Trackers.jpg';
import { toast } from 'react-toastify';
import axios from 'axios';
import { UserContext } from './Context/authcontext';
import cookie from 'js-cookie';

const Verify = () => {
  const navigate = useNavigate();
  const { phone, password } = useContext(UserContext);
  const signinvalues={phone:phone,password:password}
  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .required('Required')
        .matches(/^[0-9]{6}$/, 'OTP must be exactly 6 digits'),
    }),
    onSubmit: async(values) => {
     const response=await axios.post('https://my-record-back.test.psi.initz.run/api/v1/users/login',signinvalues)
     console.log(response);
     if(response.status===200){
      console.log(response.data.data.accessToken);
      cookie.set('token',response.data.data.accessToken,{expires:7})
      cookie.set('userID',response.data.data.user,{expires:7})
        toast.success('Sign In Successfully!')
        navigate('/questionnaire');
     }
    },
  });

  return (
    <div className="bg-gray-100 h-[90vh]   flex flex-col lg:flex-row w-full" style={{ fontFamily: '"Wix Madefor Display", sans-serif' }}>
      <header className="bg-blue-500 text-white text-center py-4 hidden lg:block w-1/2 sticky top-"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </header>
      <div className="container mx-auto mt-8 flex flex-col justify-center items-center w-1/2">
        <h2 className="text-4xl font-semibold mb-4">Validate OTP</h2>
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        <div className='mb-4'>
          <label htmlFor="otp" className="block mb-2">Please enter the OTP (one-time password) to verify your account. A Code has been sent to *******179</label>
          <input
            type="text"
            id="otp"
            {...formik.getFieldProps('otp')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter OTP"
          />
          {formik.touched.otp && formik.errors.otp ? (
            <div className='text-red-500'>{formik.errors.otp}</div>
          ) : null}
          </div>
          <button type="submit" className=" text-white px-4 py-2 rounded-md w-full bg-[#f99a1c] hover:bg-white border hover:text-[#f99a1c] hover:border border-[#f99a1c]">Verify</button>
          <p className="mt-2">Not received your code? <button className="text-blue-500">Resend code</button></p>
        </form>
      </div>
    </div>
  );
};

export default Verify;