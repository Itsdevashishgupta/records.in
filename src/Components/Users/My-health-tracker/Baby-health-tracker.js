import React from 'react';

function Baby_health_tracker() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gray-100 dark:bg-gray-800 py-4 px-6 flex items-center justify-between">
                {/* Logo and Title */}
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">Baby Tracker</h1>
                </div>
                {/* User Avatar */}
                <div className="flex items-center gap-4">
                    {/* Button or link for additional functionality */}
                    <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
                        {/* Your user avatar icon */}
                        {/* Example: <img src="user-avatar.png" alt="User Avatar" className="h-8 w-8 rounded-full" /> */}
                    </button>
                    {/* Placeholder image for user avatar */}
                    <img
                        alt="User Avatar"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                        }}
                        width="40"
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {/* Cards for Growth Metrics, Milestones, Calendar, Notes, and Photos */}
                {/* Example Card */}
                <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Growth Metrics Card */}
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
                        {/* Card Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Growth Metrics</h2>
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
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
                        {/* Card Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Milestones</h2>
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
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
                        {/* Card Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Calendar</h2>
                            {/* Calendar */}
                            {/* Example: */}
                            <CalendarComponent />
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

// Calendar Component
function CalendarComponent() {
    // Your calendar component implementation here
    return (
        <div className="text-center">
            {/* Placeholder for calendar component */}
            <p>Calendar Placeholder</p>
        </div>
    );
}

export default Baby_health_tracker;
