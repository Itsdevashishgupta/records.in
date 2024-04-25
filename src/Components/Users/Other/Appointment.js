import React, { useState } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai';
import { FiCalendar, FiCheckCircle, FiEye, FiXCircle } from 'react-icons/fi';

const AppointmentBooking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'John Doe',
      date: 'April 2',
      time: '2:00 PM',
      status: 'Confirmed',
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: 'April 10',
      time: '10:00 AM',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      date: 'April 15',
      time: '3:30 PM',
      status: 'Confirmed',
    },
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log('Form submitted:', { name, email, date, time });
    const newAppointment = {
      id: appointments.length + 1, // Generate unique ID
      name,
      email,
      date,
      time,
      status: 'Pending', // Initial status
    };
    setAppointments([...appointments, newAppointment]);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setDate('');
    setTime('');
  };

  const handleAppointmentAction = (action, appointmentId) => {
    // Handle appointment actions (e.g., view details, cancel)
    if (action === 'view') {
      // Implement logic to view appointment details
      console.log('Viewing appointment:', appointmentId);
    } else if (action === 'cancel') {
      const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
      setAppointments(updatedAppointments);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]">
    
      <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid gap-4 sm:grid-cols-2 grid-col-1">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Book Appointment</h3>
            </div>
            <div className="p-6">
              <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="date"
                      >
                        Date
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="date"
                        placeholder="Select a date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="time"
                      >
                        Time
                      </label>
                      <button
                        type="button"
                        role="combobox"
                        aria-controls="radix-:r4c:"
                        aria-expanded="false"
                        aria-autocomplete="none"
                        dir="ltr"
                        data-state="closed"
                        data-placeholder=""
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="time"
                      >
                        <span style={{ pointerEvents: 'none' }} className=''>{time || 'Select a time'}</span>
                        <AiOutlineClockCircle className="h-4 w-4 opacity-50" aria-hidden="true" />
                      </button>
                      {/* Time selection logic (e.g., dropdown, modal) */}
                      <select
                                                aria-hidden="true"
                        className="hidden absolute top-0 left-0 w-full h-auto z-50 bg-white shadow-md rounded-md py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-primary"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      >
                        <option value="">Select a time</option>
                        {/* Dynamically populate time options based on availability */}
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        {/* Add more time options as needed */}
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium bg-accent  shadow-sm mt-5 bg-[#f99a1c] hover:border-[#f99a1c] hover:bg-white hover:text-[#f99a1c] text-white border hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-foreground disabled:opacity-50"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Your Appointments</h3>
            </div>
            <div className="p-6">
              {appointments.length === 0 ? (
                <p className="text-sm text-gray-500">You don't have any appointments yet.</p>
              ) : (
                <ul className="space-y-2">
                  {appointments.map((appointment) => (
                    <li key={appointment.id} className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <FiCalendar className="text-blue-500 h-4 w-4" />
                        <div className="text-sm whitespace-nowrap">
                          {appointment.date} - {appointment.time}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{appointment.name}</span>
                        {appointment.status === 'Confirmed' ? (
                          <FiCheckCircle className="text-green-500 h-4 w-4" />
                        ) : (
                          <FiEye className="text-gray-500 h-4 w-4" />
                        )}
                        <button
                          type="button"
                          onClick={() => handleAppointmentAction('cancel', appointment.id)}
                          className="ml-2 text-red-500 hover:opacity-75 focus:outline-none"
                        >
                          <FiXCircle className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentBooking;


