import React from 'react';

function SeniorCitizenHealthTracker() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]]">
      {/* Header */}
      <h1 className="text-2xl font-bold ml-10 mt-10">Senior Citizen Health Tracker</h1>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Heart Rate Card */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Heart Rate</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold">72 bpm</div>
                  <p className="text-gray-500 dark:text-gray-400">Normal range: 60-100 bpm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blood Pressure Card */}
        <div className="col-span-1 lg:col-span-1 grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Blood Pressure</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold">120/80 mmHg</div>
                  <p className="text-gray-500 dark:text-gray-400">Normal range: 120/80 - 129/84 mmHg</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medication Reminders Card */}
        <div className="col-span-1 lg:col-span-1 grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Medication Reminders</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold">2</div>
                  <div>
                    <p className="font-medium">Medications due today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Activity Card */}
        <div className="col-span-1 lg:col-span-1 grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Daily Activity</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold">7,542</div>
                  <p className="text-gray-500 dark:text-gray-400">Steps taken</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold">45 min</div>
                  <p className="text-gray-500 dark:text-gray-400">Exercise time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments Card */}
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Upcoming Appointments</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Provider</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">April 25, 2024</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Smith</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Routine checkup</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 5, 2024</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2:30 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Johnson</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Flu shot</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">June 15, 2024</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9:00 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Lee</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Physical therapy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SeniorCitizenHealthTracker;
