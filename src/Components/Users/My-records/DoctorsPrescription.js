import React, { useEffect, useRef, useState } from 'react';
import { BiSearch, BiCalendarPlus, BiPlus, BiShare, BiTrash } from 'react-icons/bi'; // Import icons as needed
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

const PrescriptionRecords = () => {
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
    <main className="container mx-auto px-4 py-8 md:px-6 lg:py-12 bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]] h-full">
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">My Prescription Records</h1>
          <p className="text-gray-500 ">View and manage your prescription history.</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Search input */}
          <div className="relative flex-1">
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 " />
            <input
              className="flex h-10 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md border border-gray-200 bg-white px-10 py-2 text-sm shadow-sm transition-colors focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900  dark:text-gray-50 "
              placeholder="Search prescriptions..."
              type="search"
            />
          </div>
          {/* Buttons */}
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
    <div style={{ position: 'absolute', zIndex: 1 }}>
      <DateRangePicker
        ranges={dateRange}
        onChange={handleSelect}
      />
    </div>
  )}
</div>
          {/* Add Prescription */}
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" type="button">
            <BiPlus className="mr-2 h-4 w-4" />
            +Add Prescription
          </button>
          {/* Share */}
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" type="button">
            <BiShare className="mr-2 h-4 w-4" />
            Share
          </button>
          {/* Delete */}
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" type="button">
            <BiTrash className="mr-2 h-4 w-4" />
            Delete
          </button>
        </div>
        {/* Prescription records table */}
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm bg-white">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Medication</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Dosage</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Date Prescribed</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Prescribing Doctor</th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                {/* Prescription records data */}
                {/* Replace image src with actual image paths */}
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Amoxicillin</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">500mg</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-04-15</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div className="flex items-center gap-3">
                      <img src="/placeholder.svg" alt="Doctor Avatar" width="40" height="40" className="h-10 w-10 rounded-full object-cover" style={{ aspectRatio: '40 / 40', objectFit: 'cover' }} />
                      <div>
                        <p className="font-medium">Dr. John Doe</p>
                        <p className="text-sm text-gray-500 ">johndoe@example.com</p>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* Repeat for other prescription records */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrescriptionRecords;
