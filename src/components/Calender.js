import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function Calender({ chosenMonth, year }) {

    const days = new Date(year, chosenMonth, 0).getDate();
    const day = new Date(year, chosenMonth - 1, 1).getDay();
    // console.log(days, day);
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col w-80 items-center justify-center shadow-md'>
                <div className='w-full flex items-center justify-between p-2'>
                    <IoIosArrowBack />
                    <span className='px-2'>{new Date(year, chosenMonth, 0).toLocaleString('default', { month: 'long' })}</span>
                    <IoIosArrowForward />
                </div>
                <div className='grid grid-cols-7 text-sm place-items-center w-full'>
                    <button type="button" className="p-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full">S</span>
                    </button>
                    <button type="button" className="p-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full">M</span>
                    </button>
                    <button type="button" className="p-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full">T</span>
                    </button>
                    <button type="button" className="p-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full">W</span>
                    </button>
                    <button type="button" className="p-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full">T</span>
                    </button>
                    <button type="button" className="p-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full">F</span>
                    </button>
                    <button type="button" className="p-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full">S</span>
                    </button>
                </div>

                <div className='grid grid-cols-7 gap-0 place-items-center w-full overflow-hidden'>
                    {
                        Array.apply(null, Array(days + day)).map((item, i) => {
                            return (
                                i >= day ? <div>
                                    <button type="button" className="p-2 border"><time datetime="2021-12-27" className="flex items-center justify-center w-7 h-7">{i - day + 1}</time></button>
                                    {i % 7 === 0 ? <br></br> : <></>}
                                </div> : <div></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Calender
