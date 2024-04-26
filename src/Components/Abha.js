import React from 'react'
import phot from '../Assets/abha.jpeg'
import { MdAccountCircle } from 'react-icons/md'
const Abha = () => {
  return (
    <div  className='py-8'>
    <div className=' flex flex-col justify-center items-center'>
    <h1 className=' text-center font-extrabold text-4xl'>Take your healthcare to the next level !</h1>
    {/* <h1 className=' text-center font-extrabold text-4xl py-3'></h1> */}
    <p className=' text-xl w-[70%] text-center py-10 '>India is going digital! Be part of our mission to bring you the healthcare you deserve. Let's make sure you get the care you need, easily and conveniently, together.</p>
    </div>
    <div className=' bg-white flex justify-center items-center flex-row mx-auto gap-28'>
     <div className='w-2/5'>
        <img src={phot} alt="" className=''/>
     </div>
     <div className=' w-2/5'>
        <p className=' text-lg'>In line with India's Ayushman Bharat Digital Mission, My-Records.in is a government-approved platform for keeping track of your health information. It makes it easy to create your Health ID, called ABHA. With My-Records.in, you can link all your medical records in one place, making it simple for you and your doctor to access them. This means you both have all the information needed to give and receive the best care possible.</p>

 <h1 className='py-4 text-xl font-bold'>Download My-Records.in to get your ABHA ID today! </h1>
 <button className='flex justify-center items-center gap-3 bg-[#f99a1c] px-6 py-3 rounded-full text-white hover:border-[#f99a1c] hover:border hover:bg-white hover:text-[#f99a1c]'><MdAccountCircle/><span>Create ABHA ID</span></button>
     </div>
    </div>
    </div>
  )
}

export default Abha