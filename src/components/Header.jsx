import React from 'react'
import logo from '../assets/logo.png'; 

const Header = () => {
    return (
        <nav className='flex justify-around items-center gap-16 md:px-12 py-2  bg-white sticky top-0 z-50'>
            <div className="flex items-center gap-3">
                <img src={logo} alt="logo" className="w-8" />
                <h1 className='font-bold text-xl text-[#111827]'>MedRight</h1>
            </div>

            <div className='hidden md:flex items-center gap-8 text-[#4B5563] '>
                <div>Services</div>
                <div>About</div>
                <div>Certification</div>
                <div>Testimonials</div>
                <button className='bg-[#2563EB] text-white rounded-lg py-2 px-6 '>
                    Get started
                </button>
            </div>

            <div className="md:hidden text-[#111827]">
                <button>☰</button>
            </div>
        </nav>
    )
}



// const Header = () => {
//     return (
//         <nav className='flex justify-around p-4 shadow-sm'>
//             <div className="flex  items-center gap-3 " >
//                 <img src={logo} alt="MedRight logo"/>
//                 <h1 className='font-bold text-xl text-["#111827]'>MedRight</h1>
//             </div>
//             <div className='flex justify-between text-center w-1/4 items-center text-[#4B5563]'>
//                 <div>Services</div>
//                 <div>About</div>
//                 <div>Certification</div>
//                 <div>Testimonials</div>
//                 <button className='bg-[#2563EB] text-white rounded-lg py-2 px-4 '>Get started</button>
//             </div>
            
//         </nav>)
// }

 export default Header