import React from 'react'
import mobile from '../assets/mobile.png'
import appleLogo from '../assets/appleLogo.png'
import playLogo from '../assets/playLogo.png'

import { CalendarCheck, Video, FilePlus, Pill } from 'lucide-react'

function MobileApp() {
    return (
        <section className='p-8 md:p-20 flex flex-col md:flex-row items-center justify-center gap-16 bg-[#F9FAFB]' >
            <div className='w-full md:w-full lg:w-1/3 space-y-8 m-4'>
                <div>
                    <span className='text-[#2563EB] text-xs md:text-lg'>MedRight Mobile App</span>
                    <h3 className='text-3xl font-black md:text-5xl'>Healthcare in Your
                        <br /><span className='text-[#2563EB]'>Pocket</span></h3>
                    <p className='text-[#4B5563] md:text-xl text-base my-4 leading-relaxed'>Access comprehensive healthcare services anytime,
                        anywhere with our intuitive mobile application. Manage
                        appointments, view medical records, and connect with
                        healthcare providers instantly.
                    </p>
                

                <ul className='space-y-2 text-base md:text-lg'>
                    <li className='flex justify-start items-center gap-2 md:gap-4 text-[#111827]'>
                        <div className='w-6 h-6 md:w-8 md:h-8 bg-[#DBEAFE] rounded-full flex items-center justify-center text-center '><CalendarCheck fill='#2563EB' color='#DBEAFE'className='w-5 h-5 md:w-6 md:h-6 text'/></div>
                        Book and manage appointments</li>
                        <li className='flex justify-start items-center gap-2 md:gap-4 text-[#111827]'>
                        <div className='w-6 h-6 md:w-8 md:h-8 bg-[#DBEAFE] rounded-full flex items-center justify-center text-center '><FilePlus fill='#2563EB' color='#DBEAFE'className='w-5 h-5 md:w-6 md:h-6 text' /></div>
                        Access medical records and test results</li>
                        <li className='flex justify-start items-center gap-2 md:gap-4 text-[#111827]'>
                        <div className='w-6 h-6 md:w-8 md:h-8 bg-[#DBEAFE] rounded-full flex items-center justify-center text-center '><Video fill='#2563EB' color='#DBEAFE'className='w-5 h-5 md:w-6 md:h-6 text' /></div>
                        Access medical records and test results</li>
                        <li className='flex justify-start items-center gap-2 md:gap-4 text-[#111827]'>
                        <div className='w-6 h-6 md:w-8 md:h-8 bg-[#DBEAFE] rounded-full flex items-center justify-center text-center '><Pill fill='#2563EB' color='#DBEAFE'className='w-5 h-5 md:w-6 md:h-6 text' /></div>
                        Medication reminders and refills</li>
                </ul>
                </div> 
                <div className='flex flex-col md:flex-row gap-4'>

                    <button className='flex items-center justify-center gap-2 bg-[#000000] px-6 py-3 rounded-xl text-white font-semibold shadow-lg '>
                        <img src={appleLogo} alt="appleLogo"  />
                        <span>Download for iOS</span>
                    </button>

                    <button className='flex items-center justify-center gap-2 bg-[#16A34A] px-6 py-3 rounded-xl text-white font-semibold shadow-lg '>
                        <img src={playLogo} alt="playLogo" />
                        <span>Download for Android</span>
                    </button>
                </div>
            </div>
            <div className='w-full lg:w-1/3'>
                <img src={mobile} alt="mobile" className='rounded-2xl w-full'/>
            </div>
        </section>
    )
}

export default MobileApp 