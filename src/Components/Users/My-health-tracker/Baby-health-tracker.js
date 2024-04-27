import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Baby_health_tracker() {
    const [date, setDate] = useState(new Date());
    const notesData = [
        {
            title: 'Feeding Schedule',
            content: 'Breastfed for 30 minutes at 8am and 6pm.',
            date: 'April 25, 2024',
        },
        {
            title: 'Diaper Change',
            content: 'Changed diaper at 10am and 4pm.',
            date: 'April 24, 2024',
        },
    ];
    const [vaccinations, setVaccinations] = useState([
        { name: 'Vaccination 1', date: '2024-04-10', status: 'upcoming' },
        { name: 'Vaccination 2', date: '2024-03-15', status: 'completed' },
        { name: 'Vaccination 3', date: '2024-05-20', status: 'upcoming' },
    ]);

    // Function to add vaccination data
    const addVaccination = (name, date) => {
        const newVaccination = { name, date, status: 'upcoming' };
        setVaccinations([...vaccinations, newVaccination]);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]]">
            {/* Header */}
            <h1 className="text-2xl font-bold ml-10 mt-10">Baby Health Tracker</h1>

            {/* Main Content */}
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6  ">
                {/* Cards for Growth Metrics, Milestones, Calendar, Notes, and Photos */}
                {/* Example Card */}
                <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Growth Metrics Card */}
                    <div className="bg-white  rounded-lg shadow-lg">
                        {/* Card Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800  mb-4">Growth Metrics</h2>
                            {/* Growth metrics data */}
                            {/* Example: */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Weight */}
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-bold">24 lbs</div>
                                    <p className="text-gray-500 dark:text-gray-400">Weight</p>
                                </div>
                                {/* Height */}
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-bold">30 in</div>
                                    <p className="text-gray-500 dark:text-gray-400">Height</p>
                                </div>
                                {/* Age */}
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-bold">12 mo</div>
                                    <p className="text-gray-500 dark:text-gray-400">Age</p>
                                </div>
                                {/* Percentile */}
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-bold">75%</div>
                                    <p className="text-gray-500 dark:text-gray-400">Percentile</p>
                                </div>
                                {/* Add more fields as needed */}
                            </div>
                        </div>
                    </div>

                    {/* Milestones Card */}
                    <div className="bg-white  rounded-lg shadow-lg">
                        {/* Card Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800  mb-4">Milestones</h2>
                            {/* Milestones data */}
                            {/* Example: */}
                            <div className="grid grid-cols-1 gap-4">
                                {/* Smiling */}
                                <div className="flex items-center gap-4">
                                    <SmileIcon className="h-8 w-8 text-primary" />
                                    <div>
                                        <p className="font-medium">Smiling</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">2 months</p>
                                    </div>
                                </div>
                                {/* Babbling */}
                                <div className="flex items-center gap-4">
                                    <RabbitIcon className="h-8 w-8 text-primary" />
                                    <div>
                                        <p className="font-medium">Babbling</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">4 months</p>
                                    </div>
                                </div>
                                {/* Crawling */}
                                <div className="flex items-center gap-4">
                                    <ScrollIcon className="h-8 w-8 text-primary" />
                                    <div>
                                        <p className="font-medium">Crawling</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">8 months</p>
                                    </div>
                                </div>
                                {/* Add more milestones as needed */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calendar Card */}
                <div className="col-span-1 lg:col-span-1 grid grid-cols-1 gap-6">
                    <div className="bg-white  rounded-lg shadow-lg">
                        {/* Card Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800  mb-4">Calendar</h2>
                            {/* Container for the calendar */}
                            <div className="">
                                {/* React Calendar component */}
                                <Calendar
                                    onChange={setDate} // Function to handle date changes
                                    value={date} // Value to be displayed in the calendar
                                    className="text-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notes Container */}
                <div className="col-span-1 lg:col-span-1 grid grid-cols-1 gap-6">
                    <div className="bg-white  rounded-lg shadow-lg">
                        {/* Card Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800  mb-4">Notes</h2>
                            {/* Add Notes Button */}
                            <button className="bg-[#f99a1c] text-white px-4 py-2 rounded-lg mb-4">Add Note</button>
                            {/* Display Notes */}
                            <div className="grid grid-cols-1 gap-4">
                                {/* Map through notesData and display notes */}
                                {notesData.map((note, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        {/* User Avatar */}
                                        <img
                                            alt="User Avatar"
                                            className="rounded-full"
                                            height="40"
                                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                            style={{
                                                aspectRatio: "40/40",
                                                objectFit: "cover",
                                            }}
                                            width="40"
                                        />
                                        {/* Note Content */}
                                        <div>
                                            <p className="font-medium">{note.title}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">{note.content}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{note.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 grid grid-cols-1 gap-6">
                    <div className="bg-white  rounded-lg shadow-lg">
                        {/* Card Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800  mb-4">Vaccinations</h2>
                            {/* Add Vaccination Button */}
                            <button className="bg-[#f99a1c] text-white px-4 py-2 rounded-lg mb-4" onClick={() => addVaccination('New Vaccination', '2024-06-30')}>Add Vaccination</button>
                            {/* Display Vaccination Data */}
                            <div className="grid grid-cols-1 gap-4">
                                {/* Map through vaccinations and display */}
                                {vaccinations.map((vaccination, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        {/* Vaccination Data */}
                                        <div>
                                            <p className="font-medium">{vaccination.name}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">{vaccination.date}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{vaccination.status === 'upcoming' ? 'Upcoming' : 'Past'}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Icon Components
function SmileIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
    );
}

function RabbitIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
            <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3" />
            <path d="M7.61 12.53a3 3 0 1 0-1.6 4.3" />
            <path d="M13 16a3 3 0 0 1 2.24 5" />
            <path d="M18 12h.01" />
        </svg>
    );
}

function ScrollIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
            <path d="M19 17V5a2 2 0 0 0-2-2H4" />
        </svg>
    );
}


export default Baby_health_tracker;
