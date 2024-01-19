import React, { useEffect, useState } from 'react'
import Appointment from '../components/Appointment'
import { useSelector } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AppointmentCalender() {
    const appointmentDetail = useSelector((state) => state.Appointments);
    const [date, setDate] = useState(new Date());
    const [viewDropDown, setViewDropDown] = useState(false)
    const [month, day, year] = date.toLocaleDateString().split('/')
    const [view, setView] = useState("Day")
    let dateFormat = year + "-" + (parseInt(month / 10) > 0 ? month : ("0" + month)) + "-" + day;
    let dumpData = [];
    const [data, setData] = useState([])

    const handleData = () => {
        dumpData = []
        appointmentDetail.forEach(detail => {
            if (view === "Day") {
                if (detail.date === dateFormat) { dumpData.push(detail) }
            }
            else if (view === "Month") {
                if (detail.date.substring(0, 7) === dateFormat.substring(0, 7)) dumpData.push(detail);
            } else {
                if (detail.date.substring(0, 4) === dateFormat.substring(0, 4)) dumpData.push(detail);
            }
        });
    }
    useEffect(() => {
        handleData()
        setData(dumpData)
    }, [date, view])
    return (
        <div className="sm:max-w-screen w-full p-4 sm:p-12 lg:pt-32 flex flex-col">
            <div className='text-4xl font-bold pb-6'>Calender</div>
            <div className='w-full'>
                <div className='flex items-center justify-between shadow border px-3 sm:px-10 py-5 bg-gray-50 rounded-t'>
                    <div className='flex flex-col'>
                        <span className=' mb-2 font-semibold'>
                            {new Date(year, month, 0).toLocaleString('default', { month: 'long' })}
                            <span className='pl-1'>{day}</span>, {year}
                        </span>
                        <span className='text-gray-500'>{date.toLocaleDateString("default", { weekday: 'long' })}</span>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center gap-4'>
                        <div className="relative max-w-sm ">
                            <div className="absolute z-50 inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <DatePicker className='bg-white border border-gray-300 text-gray-900 text-sm shadow rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5' selected={date} onChange={(date) =>
                                setDate(date)} />
                        </div>
                        <div className='flex relative items-center px-4 py-2 rounded-md border shadow gap-2 bg-white'>
                            <span>{view} View</span>
                            <IoIosArrowDown className='text-gray-500' onClick={() => setViewDropDown(!viewDropDown)} />
                            <div className={"absolute flex flex-col shadow rounded bg-white top-12 " + (viewDropDown ? '' : 'hidden')}>
                                <span className='text-sm p-2 border-b cursor-pointer hover:bg-blue-700 hover:text-white' onClick={() => { setView("Day"); setViewDropDown(false) }}>Day View</span>
                                <span className='text-sm p-2 border-b cursor-pointer hover:bg-blue-700 hover:text-white' onClick={() => { setView("Month"); setViewDropDown(false) }}>Month View</span>
                                <span className='text-sm p-2 border-b cursor-pointer hover:bg-blue-700 hover:text-white' onClick={() => { setView("Year"); setViewDropDown(false) }}>Year View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full shadow border rounded-b flex items-start gap-8 p-6'>
                <div className='flex items-start w-full gap-8'>
                    <div className='flex-auto'>
                        {
                            (Array.isArray(data) && data.length > 0) ? data.map((detail, idx) => {
                                return (
                                    <Appointment key={idx} appointmentDetail={detail} />
                                )
                            }) : <div className='flex w-full items-center justify-center py-12 text-xl font-medium'> No Appointments in specific period. Please chose other view or date</div>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AppointmentCalender
