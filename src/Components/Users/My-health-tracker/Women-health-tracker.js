import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { MdPregnantWoman } from 'react-icons/md';
import { RiMenstrualCycleLine, RiPregnantLine, RiHealthBookLine, RiAnotherIcon, RiYetAnotherIcon } from 'react-icons/ri';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">

      <main className="flex-1 bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]  p-8">
      <div className='mb-10 text-2xl font-bold'>
    <h3>Women Health Tracker </h3>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menstrual Cycle Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BiCalendar className="h-6 w-6 text-pink-500" />
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Menstrual Cycle</h3>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
                {/* Add icon for the button if needed */}
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Next Period</p>
                  <p className="font-medium">May 15, 2023</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Cycle Length</p>
                  <p className="font-medium">28 days</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Last Period</p>
                  <p className="font-medium">April 17, 2023</p>
                </div>
              </div>
            </div>
          </div>
          {/* Pregnancy Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MdPregnantWoman className="h-6 w-6 text-green-500" />
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Pregnancy</h3>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
                {/* Add icon for the button if needed */}
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Due Date</p>
                  <p className="font-medium">December 25, 2023</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Weeks Pregnant</p>
                  <p className="font-medium">16 weeks</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Last Appointment</p>
                  <p className="font-medium">April 20, 2023</p>
                </div>
              </div>
            </div>
          </div>
          {/* Wellness Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RiHealthBookLine className="h-6 w-6 text-blue-500" />
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Wellness</h3>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
                {/* Add icon for the button if needed */}
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Sleep</p>
                  <p className="font-medium">7h 15m</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Steps</p>
                  <p className="font-medium">8,234</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 ">Water Intake</p>
                  <p className="font-medium">2.1 L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;