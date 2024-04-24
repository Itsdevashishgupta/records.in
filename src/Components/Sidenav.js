import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Assets/Final Logo My Records-1.png';
import { FaUser, FaRegListAlt, FaTimes, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import useWindowSize from '../Hoooks/UseWindow';

function Sidenav({ isSidenavOpen,onClose }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();
    const windowSize = useWindowSize();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
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
        <div className={` sticky top-0 h-[100vh] transition-all duration-200 ${isSidenavOpen ? 'w-64' : 'w-96 '} border border-r`}> 
        <img src={Logo} alt="" className='w-40 mx-auto my-4 px-6' />
        <div  className=' overflow-y-auto h-[72vh]'>
        <div className=' relative overflow-hidden w-full h-full'>
        <div className='absolute overflow-scroll mr-[-17px] mb-[-17px] inset-0'>
      <nav className='px-4 pr-6 pb-4' style={{fontFamily:"Rubik, sans-serif"}}>
        <div className={`h-12 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/user-dashboard' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
          <FaUser className='w-6 h-6' />
          <a href='/user-dashboard' className="flex items-center h-full w-full ">
            <span className="ml-2 text-sm ltr:mr-2 rtl:ml-2 ">My-Profile</span>
          </a>
        </div>
        <div className={`h-12 px-2 mb-2 flex justify-between w-full cursor-pointer items-center ${location.pathname.startsWith('/my-records') ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`} onClick={toggleDropdown}>
        <div className=' flex justify-between'>
          <FaRegListAlt className='w-6 h-6 font-normal' />
          <span className="ml-2 text-sm ltr:mr-2 rtl:ml-2 ">My-Records</span>
          </div>
          {isDropdownOpen ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
        </div>
        {isDropdownOpen && (
          <div className="pl-4">
            <Link to="/doctor-prescription" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-records/record1' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
              <span className="ml-2 text-sm ltr:mr-2 rtl:ml-2 ">Doctors' Prescription</span>
            </Link>
            <Link to="/lab-reports" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-records/record2' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
              <span className="ml-2 text-sm ltr:mr-2 rtl:ml-2 ">Lab Reports</span>
            </Link>
            <Link to="/my-records/record2" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-records/record2' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
              <span className="ml-2 text-sm ltr:mr-2 rtl:ml-2 ">X-Ray & MRI Scan</span>
            </Link>
            <Link to="/my-records/record2" className={`h-10 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-records/record2' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
              <span className="ml-2 text-sm ltr:mr-2 rtl:ml-2 ">Medical Expenses</span>
            </Link>
           
          </div>
        )}
        <div className={`h-12 px-2 mb-2 flex w-full cursor-pointer items-center ${location.pathname === '/my-health-tracker' ? 'text-white bg-[#f99a1c]' : 'text-black hover:bg-[#f99a1c] hover:text-white'} rounded-md`}>
          <FaUser className='w-6 h-6' />
          <a href='/user-dashboard' className="flex items-center h-full w-full ">
            <span className="ml-2 text-sm ltr:mr-2 rtl:ml-2 ">My-Health Tracker</span>
          </a>
        </div>
      </nav>
    </div>
        </div>
        </div>
      </div>
    );
  }
export default Sidenav;