import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment, updateAppointment } from '../features/appointment/appointmentSlice';
import { useNavigate } from 'react-router-dom';
import { changeState } from '../features/appointment/toUpdateAppointmentSlice';

function ScheduleAppointment() {
    const data = useSelector((state) => state.updateState)
    const [appointmentDetail, setAppointmentDetail] = useState(data)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleAppointment = (e) => {
        e.preventDefault();
        console.log(appointmentDetail)
        dispatch(
            data.id !== null
                ? updateAppointment(appointmentDetail)
                : addAppointment(appointmentDetail)
        )
        // console.log(appointmentDetail)
        dispatch(changeState({}))
        navigate('/appointments')
    }

    return (
        <div className="flex items-center justify-center p-12 lg:pt-32">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <form onSubmit={handleAppointment}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="first name" className="mb-3 block text-base font-medium text-[#07074D]">
                                    First Name
                                </label>
                                <input type="text" name="fname" id="fname" value={appointmentDetail.fname} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, fname: e.target.value })}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="last name" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Last Name
                                </label>
                                <input type="text" name="lname" id="lname" value={appointmentDetail.lname} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, lname: e.target.value })}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                            Phone Number
                        </label>
                        <input type="text" name="phone" id="phone" placeholder="Enter your phone number" value={appointmentDetail.phoneNo} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, phoneNo: e.target.value })}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Date
                                </label>
                                <input type="date" name="date" id="date" value={appointmentDetail.date} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, date: e.target.value })}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                    From
                                </label>
                                <input type="time" name="timeFrom" id="timeFrom" value={appointmentDetail.MeetTimeFrom} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, MeetTimeFrom: e.target.value })}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                    To
                                </label>
                                <input type="time" name="timeTo" id="timeTo" value={appointmentDetail.MeetTimeTo} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, MeetTimeTo: e.target.value })}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 pt-3">
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            Address Details
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input type="text" name="area" id="area" placeholder="Enter area" value={appointmentDetail.area} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, area: e.target.value })}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input type="text" name="city" id="city" placeholder="Enter city" value={appointmentDetail.city} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, city: e.target.value })}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input type="text" name="state" id="state" placeholder="Enter state" value={appointmentDetail.state} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, state: e.target.value })}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input type="text" name="post-code" id="post-code" placeholder="Post Code" value={appointmentDetail.pinCode} onChange={(e) => setAppointmentDetail({ ...appointmentDetail, pinCode: e.target.value })}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button type='submit'
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Schedule Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ScheduleAppointment
