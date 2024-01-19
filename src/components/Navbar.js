import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assests/image/logo.png'
function Navbar() {
    const navigate = useNavigate();
    const [openHamburger,setOpenHamburger] = useState(false);
    return (
        <nav className="bg-white z-50 lg:fixed top-0 w-full border-gray-200 border">
            <div className="w-full sm:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span onClick={()=>navigate('/')} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">GymSyncHub</span>
                </span>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="hidden sm:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" onClick={() => navigate("/add")}>Add Appointment</button>
                    <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={()=>setOpenHamburger(!openHamburger)}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={"items-center justify-between w-full md:w-auto md:order-1 "+(openHamburger?'flex':'hidden md:flex')}>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <span onClick={() => navigate('/')} className="block py-2 px-3 md:p-0 text-gray-600 font-semibold rounded md:bg-transparent cursor-pointer" aria-current="page">Home</span>
                        </li>
                        <li>
                            <span onClick={() => navigate('/calender')} className="block py-2 px-3 md:p-0 text-gray-600 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 cursor-pointer">Calender</span>
                        </li>
                        <li>
                            <span onClick={() => navigate('/appointments')} className="block py-2 px-3 md:p-0 text-gray-600 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 cursor-pointer">Appointments</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
