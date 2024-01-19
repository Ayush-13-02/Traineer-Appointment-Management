import React, { useState } from 'react'
import DetailCard from '../components/DetailCard'
import Appointment from '../components/Appointment'
import { useSelector } from 'react-redux'

function AllAppointments() {
    const appointmentDetail = useSelector((state) => state.Appointments)
    const [chosenAppointment, setChosenAppointment] = useState(appointmentDetail[0])


    return (
        <div className='w-full flex flex-col items-start gap-8 p-6 pt-32'>
            <div className='text-3xl font-bold p-6'>Appointments</div>
            {
                (Array.isArray(appointmentDetail) && appointmentDetail.length > 0) ?
                    <div className='flex items-start w-full gap-8'>
                        <div className='basis-3/5'>
                            {
                                appointmentDetail.map((detail) => {
                                    return (
                                        <div className='w-full cursor-pointer' onClick={() => setChosenAppointment(detail)}>
                                            <Appointment key={detail.id} appointmentDetail={detail} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='basis-2/5'><DetailCard appointmentDetail={chosenAppointment} /></div>
                    </div>
                    :
                    <div className='flex w-full items-center justify-center'> No Appointments!</div>
            }
        </div>
    )
}

export default AllAppointments
