import React, { useState } from 'react'
import DetailCard from '../components/DetailCard'
import Appointment from '../components/Appointment'
import { useSelector } from 'react-redux'

function AllAppointments() {
    const appointmentDetail = useSelector((state) => state.Appointments)
    const [chosenAppointment, setChosenAppointment] = useState(appointmentDetail[0])

    return (
        <div className='w-full flex flex-col items-start gap-8 px-2 pt-8 lg:p-6 lg:pt-32'>
            <div className='text-3xl font-bold px-3'>Appointments</div>
            {
                (Array.isArray(appointmentDetail) && appointmentDetail.length > 0) ?
                    <div className='flex items-start flex-col lg:flex-row w-full gap-8'>
                        <div className='lg:basis-2/3 w-full'>
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
                        <div className={"lg:bais-1/3 w-full lg:w-auto p-4 lg:p-0 mx-auto"}><DetailCard appointmentDetail={chosenAppointment} /></div>
                    </div>
                    :
                    <div className='flex w-full items-center justify-center'> No Appointments!</div>
            }
        </div>
    )
}

export default AllAppointments
