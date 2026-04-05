import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <div className="relative bg-linear-to-br from-[#EFF6FF] via-white to-[#f5effc] overflow-hidden py-16 md:py-24 px-6">

            <div className="absolute size-40 md:size-90 rounded-full bg-radial-[at_25%_25%] from-[#60A5FA33] to-[#C084FC33] to-75% top-10 left-10 z-0" ></div>
            <div className="absolute size-40 md:size-80 rounded-full bg-radial-[at_25%_25%] from-[#C084FC33] to-[#F472B633] to-75% bottom-10 right-10 z-0" ></div>

            <div className='max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24'>

                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">

                    <h1 className='text-[#111827] text-4xl md:text-7xl font-black '>
                        Medical Excellence,<br />
                        <span className='text-[#2563EB]'>Delivered Right</span>
                    </h1>

                    <p className='text-[#4B5563] text-lg md:text-xl my-6 md:my-8 max-w-md'>
                        Transform your healthcare experience with our comprehensive medical solutions. Professional, flexible, and always responsive to your needs.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <button className='bg-[#2563EB] px-8 py-3 rounded-xl text-white text-lg font-semibold shadow-lg'>
                            Start Your Journey
                        </button>
                        <button className='border-2 border-[#D1D5DB] text-[#4B5563] px-8 py-3 rounded-xl text-lg font-semibold bg-white'>
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <img src={hero} alt="Hero" className="w-full h-auto drop-shadow-xl" />
                </div>
            </div>
        </div>
    )
}
export default Hero


// const Hero = () => {
//     return (
//         <div className="relative bg-linear-to-br from-[#EFF6FF] via-white to-[#f5effc] overflow-hidden py-20">
//             <div className="absolute size-90 rounded-full bg-radial-[at_25%_25%] from-[#60A5FA33] to-[#C084FC33] to-75% top-20 left-20 z-0" ></div>
//             <div className="absolute size-80 rounded-full bg-radial-[at_25%_25%] from-[#C084FC33] to-[#F472B633] to-75% bottom-10 right-10 z-0" ></div>

//             <div className='relative z-10 flex justify-center items-center gap-48'>
//                 <div className=" content w-1/4 h-auto ">
//                     <h1 className='text-[#111827"] text-6xl font-black'>Medical Excellence,<br /><span className='text-[#2563EB]'>Delivered Right</span></h1>


//                     <p className='text-[#4B5563] text-xl my-8'>Transform your healthcare experience with our
//                         comprehensive medical solutions. Professional, flexible, and
//                         always responsive to your needs.</p>
//                     <div className="btn flex gap-4">
//                         <button className='bg-[#2563EB] px-8 py-3 rounded-xl text-white text-lg font-semibold'>Start Your Journey</button>
//                         <button className='border-2 border-[#D1D5DB] text-[#4B5563] px-8 py-3 rounded-xl text-lg font-semibold'>Learn More</button>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={hero} alt="Hero Image" />
//                 </div>
//             </div>
//         </div>
//     )
// }


