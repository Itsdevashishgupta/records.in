import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Assets/Final Logo My Records-1.png';
import { FaUser,FaStress, FaRegListAlt, FaTimes, FaChevronUp, FaChevronDown, FaAppleAlt, FaUsers, FaCalendarCheck, FaFileMedical, FaRegSmileBeam, FaPrescription, FaVial, FaXRay, FaMoneyBillWave } from 'react-icons/fa';
import useWindowSize from '../Hoooks/UseWindow';
import { FaBaby, FaFemale, FaMale, FaOldRepublic } from 'react-icons/fa';

function Sidenav({ isSidenavOpen,onClose }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();
    const windowSize = useWindowSize();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHealthTrackerDropdownOpen, setIsHealthTrackerDropdownOpen] = useState(false);
  
    const toggleHealthTrackerDropdown = () => {
      setIsHealthTrackerDropdownOpen(!isHealthTrackerDropdownOpen);
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    useEffect(() => {
      if (windowSize >= 768) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    }, [windowSize]);
  
    return (
        <div className={` sticky top-0 h-[100vh] bg-white transition-all duration-200 ${isSidenavOpen ? 'w-64' : 'w-96 '} border border-r`}> 
        <Link to={'/'}>        <img src={Logo} alt="" className='w-40 mx-auto my-4 px-6 cursor-pointer' /></Link>

        <div  className=' overflow-y-auto h-[72vh]'>
        <div className=' relative overflow-hidden w-full h-full'>
        <div className='absolute overflow-scroll mr-[-17px] mb-[-17px] inset-0'>
      <nav className='px-4 pr-6 pb-4' style={{fontFamily:"'Wix Madefor Display', sans-serif"}}>
        <div className={`h-12 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/user-dashboard' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
          <FaUser className='w-6 h-6' />
          <a href='/user-dashboard' className="flex items-center h-full w-full ">
            <span className="ml-2  ltr:mr-2 rtl:ml-2 ">My-Profile</span>
          </a>
        </div>
        <div className={`h-12 px-2 mb-2 flex justify-between w-full cursor-pointer items-center ${location.pathname.startsWith('/my-records') ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`} onClick={toggleDropdown}>
        <div className=' flex justify-between'>
          <FaRegListAlt className='w-6 h-6 font-normal' />
          <span className="ml-2 ltr:mr-2 rtl:ml-2 ">My-Records</span>
          </div>
          {isDropdownOpen ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
        </div>
        {isDropdownOpen && (
          <div className="pl-4">
  <Link to="/doctor-prescription" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-records/record1' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
    <FaPrescription />
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Doctors' Prescription</span>
  </Link>
  <Link to="/lab-reports" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-records/record2' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
    <FaVial />
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Lab Reports</span>
  </Link>
  <Link to="/x-ray" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-records/record2' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
    <FaXRay />
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">X-Ray & MRI Scan</span>
  </Link>
  <Link to="/medical-expenses" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-records/record2' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
    <FaMoneyBillWave />
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Medical Expenses</span>
  </Link>
</div>
        )}
        <div className={`h-12 px-2 mb-2 flex justify-between w-full cursor-pointer items-center ${location.pathname.startsWith('/my-health-tracker') ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`} onClick={toggleHealthTrackerDropdown}>
        <div className=' flex justify-between'>
          <FaUser className='w-6 h-6 font-normal' />
          <span className="ml-2 ltr:mr-2 rtl:ml-2 ">My-Health Tracker</span>
          </div>
          {isHealthTrackerDropdownOpen ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
        </div>
        {isHealthTrackerDropdownOpen && (
          <div className="pl-4">
            <Link to="/basic-health-tracker" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-health-tracker/basic' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
              <FaMale />
              <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Basic Health Tracker</span>
            </Link>
            <Link to="/women-health-tracker" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-health-tracker/women' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
              <FaFemale />
              <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Women Health Tracker</span>
            </Link>
            <Link to="/senior-citizen-health-tracker" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-health-tracker/senior' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
              <FaOldRepublic />
              <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Senior Citizen Health Tracker</span>
            </Link>
            <Link to="/baby-health-tracker" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-health-tracker/baby' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
              <FaBaby />
              <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Baby Health Tracker</span>
            </Link>
          </div>  )}
        <div className={`h-12 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/diet-weight-management' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
  <FaAppleAlt className='w-6 h-6' />
  <Link to="/diet-weight-management" className="flex items-center h-full w-full ">
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Diet and Weight Management</span>
  </Link>
</div>

<div className={`h-12 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/stress-management' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
  <FaRegSmileBeam className='w-6 h-6' />
  <Link to="/stress-management" className="flex items-center h-full w-full ">
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Stress Management</span>
  </Link>
</div>

<div className={`h-12 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/family-user-management' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
  <FaUsers className='w-6 h-6' />
  <Link to="/family-user-management" className="flex items-center h-full w-full ">
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Family User Management</span>
  </Link>
</div>

<div className={`h-12 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/appointment-management' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
  <FaCalendarCheck className='w-6 h-6' />
  <Link to="/appointment-management" className="flex items-center h-full w-full ">
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Appointment Management</span>
  </Link>
</div>

<div className={`h-12 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/health-insurance-policy' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
  <FaFileMedical className='w-6 h-6' />
  <Link to="/health-insurance-policy" className="flex items-center h-full w-full ">
    <span className="ml-2  ltr:mr-2 rtl:ml-2 ">Health Insurance Policy</span>
  </Link>
</div>
      </nav>
    </div>
        </div>
        </div>
      </div>
    );
  }
export default Sidenav;