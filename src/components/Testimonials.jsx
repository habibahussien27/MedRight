import { Star } from 'lucide-react'
import React from 'react'
import img1 from '../assets/img (1).png'
import img2 from '../assets/img (2).png'
import img3 from '../assets/img (3).png'

const reviewsData = [
    {
        id: 1,
        rating: 5,
        text: "'MedRight transformed my healthcare experience. The telemedicine platform is incredibly user-friendly, and the doctors are always available when I need them.'",
        name: "Sarah Johnson",
        role: "Marketing Manager",
        image: img1
    },
    {
        id: 2,
        rating: 5,
        text: "'The emergency response team saved my life. Their professionalism and quick action during my heart attack were exceptional. I can't thank them enough.'",
        name: "Michael Chen",
        role: "Business Owner",
        image: img3
    },
    {
        id: 3,
        rating: 5,
        text: "'As a busy parent, the mobile app has been a game-changer. I can book appointments for my family and access medical records instantly.'",
        name: "Emily Rodriguez",
        role: "Teacher",
        image:img2
    }
];



export const Testimonials = () => {
    return (
    <section className='flex flex-col justify-center items-center m-8 md:m-16'>
            <span className='text-[#2563EB] text-base md:text-lg font-semibold'>Testimonials</span>
        <h3 className='text-2xl md:text-5xl font-black'>What Our Patients Say</h3>
        <p className='text-[#4B5563] text-base md:text-xl py-8 md:p-16 text-center'>Real stories from real patients who have experienced the MedRight difference.</p>

            <div className='flex flex-col md:flex-row items-center justify-center gap-8 '>
                {reviewsData.map(person =>(
                    <Review key={person.id}
                        text={person.text}
                        image={person.image}
                        name={person.name}
                        jop={person.role} />
                ))}

        </div>
    </section>
    )
}

export default Testimonials

function Review({text,image,name,jop}) {
    return(
        <div className='bg-[#F9FAFB] w-full md:w-1/3 lg:w-1/5  rounded-2xl p-8 md:px- space-y-4 leading-relaxed text-sm'>
            <div className='flex'>
            {[...Array(5)].map((_,i) => (
                <Star key={i} fill='#FACC15' color='#FACC15' size={16}/>)
            )}
            </div>
        
            <p className='text-[#4B5563]'>{text}</p>
            <div className='flex justify-start items-center gap-2'>
                <div><img src={image} alt="" /></div>
                <div>
                    <h6>{name}</h6>
                    <p className='text-[#4B5563]'>{jop}</p>
                </div>
            </div>
        </div>
    )
}
