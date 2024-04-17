import React from 'react'
import phot from '../Assets/abha.webp'
import { MdAccountCircle } from 'react-icons/md'
const Abha = () => {
  return (
    <div style={{ fontFamily: 'Rubik, sans-serif' }} className='py-8'>
    <div className=' flex flex-col justify-center items-center'>
    <h1 className=' text-center font-extrabold text-4xl'>Transform Your Healthcare Experience,</h1>
    <h1 className=' text-center font-extrabold text-4xl py-3'>Create Your ABHA ID Today!</h1>
    <p className=' text-xl w-[70%] text-center py-10 '>The Indian healthcare system is going digital. Join us in our mission to bridge the gap between you and the healthcare that you truly deserve.</p>
    </div>
    <div className=' bg-white flex justify-center items-center flex-row mx-auto gap-28'>
     <div className='w-2/5'>
        <img src={phot} alt="" className=''/>
     </div>
     <div className=' w-2/5'>
        <p className=' text-lg'>In line with the Government of India’s Ayushman Bharat Digital Mission, Health-e is an ABDM approved PHR app that enables you to easily create your ABHA or Health ID.
When you create your ABHA and link it to all your medical records on Health-e, you become part of an integrated digital health ecosystem 
– an ecosystem that empowers you and your doctor to receive and provide the best healthcare backed
 by accurate and complete medical information.</p>

 <h1 className='py-4 text-xl font-bold'>Download Health-e to get your ABHA ID today! </h1>
 <button className='flex justify-center items-center gap-3 bg-[#f99a1c] px-6 py-3 rounded-full text-white hover:border-[#f99a1c] hover:border hover:bg-white hover:text-[#f99a1c]'><MdAccountCircle/><span>Create ABHA ID</span></button>
     </div>
    </div>
    </div>
  )
}

export default Abha