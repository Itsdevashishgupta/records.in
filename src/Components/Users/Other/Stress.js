import React from 'react';

const StressManagementPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Stress Level</h2>
          <div className="bg-gray-300 h-8 w-full rounded-full overflow-hidden">
            <div className=" bg-green-500 h-full w-3/4"></div>
          </div>
          <p className="mt-2">Your current stress level</p>
        </div>
     
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Stress Calendar</h2>
          <div className="border border-gray-300 p-4 rounded">
         
            Calendar
          </div>
        </div>
    
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Stress Tips</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">&#10003;</span> Practice deep breathing exercises
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">&#10003;</span> Take regular breaks and stretch
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">&#10003;</span> Engage in regular physical activity
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">&#10003;</span> Practice mindfulness and meditation
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">&#10003;</span> Get enough sleep and rest
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StressManagementPage;