import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className='bg-[#111827] text-white p-8 md:p-20'>
            <div className=' grid grid-rows-4 justify-center items-center'>
            <div className="flex items-center gap-3">
                <img src={logo} alt="logo" className="w-8" />
                <h1 className='font-bold text-xl text-white'>MedRight</h1>
            </div>
            <p className=' text-[#9CA3AF]'>Transforming healthcare through
                innovation, compassion, and
                excellence. Your health is our
                priority.</p>
        </div>
        </div>
    )
}

export default Footer