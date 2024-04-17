import React from 'react'
import photo from '../Assets/Final Logo My Records-1.png'
const Userdashboard = () => {
  return (
    <div className='bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] h-[90vh]'  style={{ fontFamily: 'Rubik, sans-serif' }}>
      <div className='flex py-8 justify-center flex-wrap'>
        <div className='bg-white w-3/5 px-10 py-8 rounded-lg flex justify-between'>
        <div>
          <h1 className=' font-extrabold text-2xl mb-2'>Hello, Devashish </h1>
          <p>Take a Look At Your Activities and </p>
          <p>Improve Your Activity.</p>
          </div>
          <div className=''>
            <img src={photo} alt="" className='w-20' />
          </div>
        </div>
        <div className='w-1/5'></div>
      </div>
    </div>
  )
}

export default Userdashboard