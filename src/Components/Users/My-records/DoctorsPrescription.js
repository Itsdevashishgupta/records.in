import React, { useState } from 'react';
import photo from '../../../Assets/doctorsPrecription.jpg';

const DoctorsPrescription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimeline, setSelectedTimeline] = useState('Weekly');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleFileUpload = (event) => {
    console.log(event.target.files);
  };

  const handleTimelineChange = (event) => {
    setSelectedTimeline(event.target.value);
  };

  return (
    <div className='bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] pt-4 p-10'>
       <div className="flex justify-between mr-8 space-x-4 pb-10 ">
       <h3 className=' text'>Doctors's Prescription</h3>
       <div className='flex justify-between gap-5'>
  <button 
    onClick={() => document.getElementById('fileUpload').click()} 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Add Report
  </button>
  <input 
    type="file" 
    id="fileUpload" 
    onChange={handleFileUpload} 
    style={{display: 'none'}} 
  />
  <div className="inline-block relative w-64">
    <select 
      value={selectedTimeline} 
      onChange={handleTimelineChange} 
      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="Weekly">Weekly</option>
      <option value="Biweekly">Biweekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Date Range">Date Range</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6z"/></svg>
    </div>
  </div>
  </div>
</div>
    <div className=' grid grid-cols-4 gap-5' style={{fontFamily:"Rubik, sans-serif"}}>
      <div className='flex flex-col justify-center items-center border pb-4'>
        <img src={photo} alt="" className='w-full mb-4' onClick={openModal}/>
        <p className=' text-lg font-semibold '>Doctor's Name</p>
        <p className=' text-sm font-semibold'>28-April-2024</p>
      </div>
      <div className='flex flex-col justify-center items-center border pb-4'>
        <img src={photo} alt="" className='w-full mb-4' onClick={openModal}/>
        <p className=' text-lg font-semibold '>Doctor's Name</p>
        <p className=' text-sm font-semibold'>23-April-2024</p>
      </div>
     

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <img src={photo} alt="" className='w-full'/>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DoctorsPrescription;