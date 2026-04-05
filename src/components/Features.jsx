import React from 'react'
import {
    ProfessionalismIcon,
    FlexibilityIcon,
    ResponsibilityIcon,
    ResponsivenessIcon
} from './Icons';



const featuresData = [
    {
        id: 1,
        title: "Professionalism",
        description: "Highest standards of medical care with certified professionals and proven methodologies.",
        Icon: ProfessionalismIcon
    },
    {
        id: 2,
        title: "Flexibility", 
        description: "Adaptable solutions that fit your unique healthcare needs and scheduling requirements.",
        Icon: FlexibilityIcon
    },
    {
        id: 3,
        title: "Responsibility",
        description: "Committed to patient safety and ethical practices in all our medical services.",
        Icon: ResponsibilityIcon
    },
    {
        id: 4,
        title: "Responsiveness",
        description: "Quick response times and 24/7 availability for urgent medical concerns.",
        Icon: ResponsivenessIcon
    }
];



const Features = () => {
    return (
        <section className='py-20 px-8 max-w-7xl mx-auto'>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {featuresData.map((feature) => (
                    <div key={feature.id} className='flex flex-col items-center text-center group'>

                        <feature.Icon />
                        <h3 className='text-xl text-[#111827] font-bold mt-4'>{feature.title}</h3>
                        <p className='text-[#4B5563] text-sm mt-2 leading-relaxed'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}




// const Features = () => {
//     return (
//         <section className='flex justify-center items-center py-24 px-8 gap-12 max-w-7xl mx-auto'>
//             {featuresData.map((feature) => (
//                 <Feature key={feature.id} {...feature} />
//             ))}
//         </section>
//     )
// }

// function Feature({ title, description, Icon }) {
//     return (
//         <div className='flex-1 flex flex-col items-center text-center gap-4'>
            
//             <Icon />
//             <h3 className='text-xl text-[#111827] font-bold'>{title}</h3>
//             <p className='text-[#4B5563] text-sm leading-relaxed'>{description}</p>
//         </div>
//     )
// }

export default Features