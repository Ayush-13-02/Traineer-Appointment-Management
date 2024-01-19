import React from 'react'

function DetailCard({ appointmentDetail }) {
    return (
        <div className="rounded-lg shadow-xl w-full max-w-fit bg-gray-900 text-white" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            <div className="border-b border-gray-800 px-8 py-3">
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
            </div>
            <div className="px-8 py-6">
                <p>
                    <em className="text-blue-400">const</em>
                    <span className="text-green-400 px-2">AppointmentDetail</span>
                    <span className="text-pink-500">=</span>
                    <em className="text-blue-400 px-2">{"function()"}</em><span>{"{"}</span>
                </p>
                <p>&nbsp;&nbsp;<span className="text-pink-500">{"return"}</span> <span>{"{"}</span> </p>
                <table>
                    <tbody>
                        <tr>
                            <td className="w-48 align-top text-sm sm:text-base">&nbsp;&nbsp;&nbsp;&nbsp;Name</td>
                            <td className="align-top font-bold px-2">:</td>
                            <td className='align-top px-2 text-yellow-300 w-full text-sm sm:text-base'>'{appointmentDetail?.fname} {appointmentDetail?.lname}',</td>
                        </tr>
                        <tr>
                            <td className="w-48 align-top text-sm sm:text-base">&nbsp;&nbsp;&nbsp;&nbsp;Phone</td>
                            <td className="align-top font-bold px-2">:</td>
                            <td className='align-top px-2 text-yellow-300 w-full text-sm sm:text-base'>'{appointmentDetail?.phoneNo}',</td>
                        </tr>
                        <tr>
                            <td className="w-48 align-top text-sm sm:text-base">&nbsp;&nbsp;&nbsp;&nbsp;Date</td>
                            <td className="align-top font-bold px-2">:</td>
                            <td className='align-top px-2 text-yellow-300 w-full text-sm sm:text-base'>'{appointmentDetail?.date}',</td>
                        </tr>
                        <tr>
                            <td className="w-48 align-top text-sm sm:text-base">&nbsp;&nbsp;&nbsp;&nbsp;Duration</td>
                            <td className="align-top font-bold px-2">:</td>
                            <td className='align-top px-2 text-yellow-300  w-full text-sm sm:text-base'>'{appointmentDetail?.MeetTimeFrom} - {appointmentDetail?.MeetTimeTo}',</td>
                        </tr>
                        <tr>
                            <td className="w-48 align-top text-sm sm:text-base">&nbsp;&nbsp;&nbsp;&nbsp;Address</td>
                            <td className="align-top font-bold px-2">:</td>
                            <td className='align-top px-2 text-yellow-300 w-full text-sm sm:text-base'>'{appointmentDetail?.area},{appointmentDetail?.city},{appointmentDetail?.state},{appointmentDetail?.pinCode}'</td>
                        </tr>
                    </tbody>
                </table>
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>{"}"}</p>
            </div>
        </div>
    )
}

export default DetailCard
