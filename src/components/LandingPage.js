import React from 'react';
import Gym from '../assests/image/gym.avif'
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <section id="Home" className="px-8 pt-4">
            <div className="w-full p-2 flex flex-col md:flex-row gap-12 items-center justify-center">
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Fitness Trainer App</h1>
                    <p className="text-lg text-justify tracking-wide">
                        Efficiently manage your appointments with ease. Your journey to fitness starts here!
                    </p>
                    <blockquote className="text-xl italic">
                        "Invest in your health. It pays the best interest."
                    </blockquote>
                    <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                        <span onClick={() => navigate('/appointments')} className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500 cursor-pointer">Check Appointments</span>
                        <span onClick={() => navigate('/add')} className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400 cursor-pointer">Add appointment</span>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img className='w-full' src={Gym} alt="Gym" />
                </div>
            </div>

        </section>

    );
};

export default LandingPage;
