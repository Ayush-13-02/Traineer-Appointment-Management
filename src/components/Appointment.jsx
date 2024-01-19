import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import avatar from '../assests/image/avatar.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeState } from '../features/appointment/toUpdateAppointmentSlice';
import { removeAppointment } from '../features/appointment/appointmentSlice';
function Appointment({ appointmentDetail }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [year, month, date] = appointmentDetail?.date?.split('-')
  const monthName = new Date(year, month, 0).toLocaleString('default', { month: 'long' })
  const getOrdinals = (num) => {
    num = num % 10;
    if (num === 1) return "st";
    if (num === 2) return "nd";
    if (num === 3) return "rd";
    return "th";
  }
  const handleEdit = () => {
    dispatch(changeState(appointmentDetail))
    navigate("/add")
  }
  const handleDelete = () => {
    dispatch(removeAppointment({ id: appointmentDetail.id }));
  }

  return (
    <div className='flex gap-8 w-full items-center border-b px-2 sm:px-4 py-4 mx-auto my-2'>
      <div className='w-full flex justify-center gap-4'>
        <div className='w-24 h-24 rounded-full shadow-md overflow-hidden'>
          <img className='w-full h-full bg-cover' src={avatar} alt='avatar' />
        </div>
        <div className='flex w-full flex-col justify-start sm:justify-center'>
          <div className='flex w-full justify-between'>
            <div className='text-sm font-semibold my-3'>{appointmentDetail?.fname} {appointmentDetail?.lname}</div>
            <div className='relative'>
              <button className='font-extrabold' onClick={() => setIsDropDownOpen(!isDropDownOpen)}>...</button>
              <div className={"flex absolute z-10 bg-white right-[1rem] flex-col m-2 rounded border shadow-md " + (isDropDownOpen ? '' : 'hidden')}>
                <span className='pl-3 pr-8 py-2 hover:bg-gray-200 text-sm text-gray-500 cursor-pointer' onClick={handleEdit}>Edit</span>
                <span className='pl-3 pr-8 py-2 hover:bg-gray-200 text-sm text-red-500 cursor-pointer' onClick={handleDelete}>Delete</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-2'>
            <span className='flex gap-2 items-start'>
              <SlCalender />
              <span className='text-sm text-gray-500 border-r'>{monthName} {parseInt(date)}{getOrdinals(date)}, {year} at {appointmentDetail.MeetTimeFrom}</span>
            </span>
            <span className='flex gap-2 items-start md:border-l border-gray-500 md:pl-5'>
              <MdLocationOn className='text-gray-500' size={20} />
              <span className='text-sm text-gray-500 text-justify'>{appointmentDetail?.city} {appointmentDetail?.state}</span>
            </span>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Appointment
