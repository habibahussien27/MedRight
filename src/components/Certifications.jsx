import React from 'react'
import { Star } from 'lucide-react'

const Certifications = () => {
  return (
    <section className='w-full mx-auto bg-[#2563EB] text-white text-center p-8 flex flex-col gap-8 md:p-16'>

      <div className='flex justify-center items-center gap-2 md:gap-4'>
        <div className='bg-[#6f9cf1] w-12 h-12 rounded-full flex items-center justify-center md:w-16  md:h-16'><Star size={26} fill="currentColor" /></div>

        <div className='flex flex-col items-start text-left gap-2 opacity-90'>
          <h3 className='text-xl font-black md:text-4xl'>ISO 9001:2015 Certified</h3>
          <span className='text-sm md:text-lg'>Quality Management System</span>
        </div>

      </div>

      <p className='text-base md:text-lg max-w-2xl mx-auto opacity-90 leading-loose '>Our commitment to excellence is validated by ISO 9001:2015 certification,
        ensuring that every aspect of our medical services meets the highest
        international standards for quality management and patient care.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className='grid grid-cols-3 gap-4 md:gap-24'>
          <div>
            <h3 className='text-xl font-black md:text-4xl mb-2'>99.9%</h3>
            <p className='text-sm md:text-base opacity-90'>Patient Satisfaction</p>
          </div>

          <div>
            <h3 className='text-xl font-black md:text-4xl mb-2'>24/7</h3>
            <p className='text-sm md:text-base opacity-90'>Medical Support</p>
          </div>

          <div>
            <h3 className='text-xl font-black md:text-4xl mb-2'>500+</h3>
            <p className='text-sm md:text-base opacity-90'>Medical Professionals</p>
          </div>
        </div>
      
      </div>
    </section>
  )
}
export default Certifications
