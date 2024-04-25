import React from 'react';
import { FiHeart, FiThermometer, FiDroplet, FiActivity, FiAirplay, FiBarChart2 } from 'react-icons/fi';

const BasicHealthTracker = () => {
  const data = [
    { title: 'Heart Rate', value: '72', unit: 'bpm', color: 'red', Icon: FiHeart },
    { title: 'Temperature', value: '98.6', unit: '°F', color: 'orange', Icon: FiThermometer },
    { title: 'Blood Sugar', value: '95', unit: 'mg/dL', color: 'blue', Icon: FiDroplet },
    { title: 'Blood Pressure', value: '120/80', unit: 'mmHg', color: 'purple', Icon: FiActivity },
    { title: 'Oxygen Saturation', value: '98', unit: '%', color: 'green', Icon: FiAirplay },
    { title: 'Step Count', value: '7,234', unit: 'steps', color: 'yellow', Icon: FiBarChart2 },
  ];

  return (
    <div className='bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]'>
    <div className='mt-10 ml-10 text-2xl font-bold'>
    <h3>Basic Health Tracker </h3>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen  px-4 md:px-6">
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-lg bg-white" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
              <item.Icon className={`w-8 h-8 text-${item.color}-500`} />
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">{item.title}</h3>
            </div>
            <div className="p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold">{item.value}</div>
              <span className="text-gray-500 dark:text-gray-400">{item.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default BasicHealthTracker;