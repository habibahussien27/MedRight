import React from 'react'

const Partners = () => {
    return (
        <div className='bg-[#F9FAFB] flex flex-col justify-center items-center gap-2 text-center p-8 md:p-16'>
            <h3 className='text-[#111827] font-bold text-lg md:text-2xl'>Trusted by Leading Organizations</h3>
            <p className='text-[#4B5563]'>Healthcare partners who trust MedRight for their employee wellness programs</p>
            <div className='text-[#9CA3AF] leading-relaxed text-lg md:text-2xl opacity-50 font-black grid grid-cols-2 gap-4 md:gap-16 pt-8 md:grid-cols-6'>
                <span>TechCorp</span>
                <span>HealthPlus</span>
                <span>MediGroup</span>
                <span>WellnessCo</span>
                <span>CareFirst</span>
                <span>LifeHealth</span>
        </div>
        </div>
    )
}

export default Partners