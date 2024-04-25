import React, { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { BiCalendarPlus } from 'react-icons/bi';

const PatientRecords = () => {
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
    <div className="flex flex-col h-screen">
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
           
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
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
              className="w-4 h-4 mr-2"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add Report
          </button>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
                    Patient
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
                    Scan Type
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
                    Date
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
                    Status
                  </th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px] text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                        <img className="aspect-square h-full w-full" alt="John Doe" src="/placeholder-user.jpg" />
                      </span>
                      John Doe
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">X-Ray</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">April 15, 2023</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Completed
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                      type="button"
                      id="radix-:r22:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
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
                        className="w-4 h-4"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                      <span className="sr-only">Actions</span>
                    </button>
                  </td>
                </tr>
                {/* Other rows */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PatientRecords;
