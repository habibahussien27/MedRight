import React from 'react'
import about from '../assets/about.png'
import { GreenCheck } from './Icons';

const About = () => {
    const aboutFeatures = [
        "ISO 9001:2015 Certified Quality Management",
        "24/7 Emergency Medical Support",
        "Advanced Telemedicine Platform"
    ];

    return (
        <div className='bg-linear-to-br from-[#F9FAFB] to-[#EFF6FF] py-16 md:py-24 px-6'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20'>

                
                <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                    <span className='text-[#2563EB] font-semibold text-sm md:text-lg '>
                        About MedRight
                    </span>

                    <h1 className='text-[#111827] text-3xl md:text-5xl font-black mt-2 '>
                        Revolutionizing Healthcare <span className='text-[#2563EB]'>Experience</span>
                    </h1>

                    <p className='text-[#4B5563] text-base md:text-xl my-8 leading-relaxed '>
                        We're transforming the way healthcare is delivered by combining cutting-edge technology
                        with compassionate care. Our team of certified medical professionals is dedicated to
                        providing accessible, high-quality healthcare solutions.
                    </p>

                    <div className='flex flex-col gap-4 w-full'>
                        {aboutFeatures.map((text, index) => (
                            <CheckItem key={index} text={text} />
                        ))}
                    </div>
                </div>

                <div className='w-full md:w-1/2'>
                    <img
                        src={about}
                        alt="About MedRight"
                        className='w-full h-auto rounded-xl'
                    />
                </div>
            </div>
        </div >
    )
}

const CheckItem = ({ text }) => (
    <div className="flex items-start gap-3">

        <div className="mt-1">
            <GreenCheck />
        </div>
        <span className="text-[#111827] text-sm md:text-lg ">
            {text}
        </span>
    </div>
);

export default About;