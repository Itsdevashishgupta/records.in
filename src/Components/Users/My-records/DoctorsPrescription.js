import React, { useState } from 'react';
import { FaSearch, FaPlus, FaShare, FaTrash, FaFilter, FaTimes } from 'react-icons/fa';
import image from '../../../Assets/doctorsPrecription.jpg'

const HealthReportsPage = () => {
  const [filter, setFilter] = useState('weekly');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const handleImageClick = (image) => {
  setSelectedImage(image);
  setIsModalOpen(true);
}

const handleCloseModal = () => {
  setIsModalOpen(false);
}

  const handleFilterChange = (value) => {
    setFilter(value);
    setIsFilterMenuOpen(false); 
  };

  const handleDeleteReport = (reportId) => {
    const updatedReports = reports.filter((report) => report.id !== reportId);
    
  };
  const reports = [
    {
      id: 1,
      title: 'Report 1',
      description: 'This is the description for Report 1.',
      image: `${image}`,
    },
    {
      id: 2,
      title: 'Report 2',
      description: 'This is the description for Report 2.',
      image: `${image}`,
    },
    {
      id: 3,
      title: 'Report 3',
      description: 'This is the description for Report 3.',
      image:`${image}`,
    },
  ]; 

  return (
    <div className="container mx-auto  p-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md flex items-center"
            >
              <FaFilter className="mr-2" />
              Filter
            </button>
            {isFilterMenuOpen && (
              <div className="absolute mt-2 py-2 w-40 bg-white rounded-md shadow-md z-10">
                <button
                  onClick={() => handleFilterChange('weekly')}
                  className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Weekly
                </button>
                <button
                  onClick={() => handleFilterChange('biweekly')}
                  className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Biweekly
                </button>
                <button
                  onClick={() => handleFilterChange('monthly')}
                  className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Monthly
                </button>
                <button
                  onClick={() => handleFilterChange('timerange')}
                  className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Time Range
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-[#f99a1c] hover:bg-white hover:text-[#f99a1c] hover:border border-[#f99a1c] border text-white px-4 py-2 rounded-md flex items-center">
            <FaPlus className="mr-2" />
            Add Report
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <FaShare className="mr-2" />
            Share Report
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
  {reports.map((report) => (
    <div key={report.id} className="bg-gray-100 p-4 rounded-md relative">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{report.title}</h3>
        <button
          onClick={() => handleDeleteReport(report.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
      <img src={report.image} alt={report.title} className="w-full h-48 object-cover mb-2 cursor-pointer" onClick={() => handleImageClick(report.image)} />
      <p>{report.description}</p>
    </div>
  ))}
</div>
{isModalOpen && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-md relative">
      <button onClick={handleCloseModal} className="absolute top-0 right-0 m-2">
        <FaTimes />
      </button>
      <img src={selectedImage} alt="Selected" className="w-full" />
    </div>
  </div>
)}
    </div>
  );
};

export default HealthReportsPage;
