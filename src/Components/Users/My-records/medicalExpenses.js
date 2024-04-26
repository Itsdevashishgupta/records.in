import React, { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { BiCalendarPlus } from 'react-icons/bi';

const ExpenseTracker = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  
  const datePickerRef = useRef();
  
  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setDatePickerVisible(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setDatePickerVisible(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]]">
      <header className=" text-gray-900 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Medical Expenses Tracker</h1>
          <div className="flex items-center space-x-4">
          <div style={{ position: 'relative' }} ref={datePickerRef}>
  <button 
    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" 
    type="button"
    onClick={() => setDatePickerVisible(true)}
  >
    <BiCalendarPlus className="mr-2 h-4 w-4" />
    Date Filter
  </button>

  {isDatePickerVisible && (
    <div style={{ position: 'absolute', zIndex: 1, right: 0 }}>
      <DateRangePicker
        ranges={dateRange}
        onChange={handleSelect}
      />
    </div>
  )}
</div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border  h-10 px-4 py-2">
              + Add Report
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1  py-8 px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Expense Reports</h2>
              <div className="flex items-center space-x-4">
              
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border  hover:border-gray-900  hover:text-black h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-gray-200 data-[state=selected]:bg-gray-200">
                      <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 [&amp;:has([role=checkbox])]:pr-0">
                        Date
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 [&amp;:has([role=checkbox])]:pr-0">
                        Category
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 [&amp;:has([role=checkbox])]:pr-0">
                        Amount
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 [&amp;:has([role=checkbox])]:pr-0">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-gray-200 data-[state=selected]:bg-gray-200">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-04-15</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Prescription</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">₹50.00</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-900 hover:bg-gray-900 hover:text-white h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" x2="12" y1="2" y2="15"></line>
                          </svg>
                          <span className="sr-only">Share</span>
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-900 hover:bg-gray-900 hover:text-white h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                          <span className="sr-only">Delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-gray-200 data-[state=selected]:bg-gray-200">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-04-10</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Doctor Visit</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">₹75.00</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-900 hover:bg-gray-900 hover:text-white h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" x2="12" y1="2" y2="15"></line>
                          </svg>
                          <span className="sr-only">Share</span>
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-900 hover:bg-gray-900 hover:text-white h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                          <span className="sr-only">Delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-gray-200 data-[state=selected]:bg-gray-200">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-04-05</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Physical Therapy</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">₹100.00</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-900 hover:bg-gray-900 hover:text-white h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" x2="12" y1="2" y2="15"></line>
                          </svg>
                          <span className="sr-only">Share</span>
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-900 hover:bg-gray-900 hover:text-white h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                          <span className="sr-only">Delete</span>
                        </button>
                      </td>
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
};

export default ExpenseTracker;
