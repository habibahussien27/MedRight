import React from "react";
    import { Stethoscope, LaptopMinimalCheck, ShieldUser,Ambulance, Check } from "lucide-react";

    const ServicesData = [
    {
        id: 1,
        title: "Primary Care",
            description: "Comprehensive primary healthcare services including routine check-ups, preventive care, and health screenings.",
        icon: Stethoscope,
        bgColor: "linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%)",
        iconColor: "#2563EB",
        benefits: ["Annual Physical Exams", "Vaccination Programs", "Health Risk Assessments"]
    },
    {
        id: 2,
        title: "Telemedicine",
        description: "Virtual consultations and remote monitoring services for convenient healthcare access from anywhere.",
        icon: LaptopMinimalCheck,
        bgColor: "linear-gradient(145deg, #FAF5FF 0%, #F3E8FF 100%)",
        iconColor: "#9333EA",
        benefits: ["Video Consultations", "Remote Monitoring", "Digital Prescriptions"]
    },{
        id: 3,
        title: "Specialized Care",
        description: "Expert specialist consultations and advanced treatment options for complex medical conditions.",
        icon: ShieldUser,
        bgColor: "linear-gradient(145deg, #F0FDF4 0%, #DCFCE7 100%)",
        iconColor: "#16A34A",
        benefits: ["Cardiology Services", "Orthopedic Care", "Mental Health Support"]
    },{
        id: 4,
        title: "Emergency Services",
        description: "24/7 emergency medical services with rapid response teams and advanced life support capabilities.",
        icon: Ambulance,
        bgColor: "linear-gradient(145deg, #FFF7ED 0%, #FFEDD5 100%)",
        iconColor: "#EA580C",
        benefits: ["Emergency Response", "Critical Care Transport", "Trauma Treatment"]
    }]

    



export const Services = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <span className="text-[#2563EB] font-semibold text-lg ">Our Services</span>
                <h2 className="text-[#111827] font-black text-3xl md:text-5xl mt-2">Comprehensive Medical Solutions</h2>
                <p className="text-[#4B5563] mt-8 text-base md:text-xl px-16">From preventive care to specialized treatments, we offer a complete range of medical services designed to meet your healthcare needs.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {ServicesData.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ icon: Icon, title, description, benefits, iconColor, bgColor }) {
    return (
        <div style={{ backgroundImage: bgColor }} className="p-8 rounded-2xl flex flex-col gap-6 text-left ">

            <div style={{ backgroundColor: iconColor }} className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Icon size={26} strokeWidth={2.5} />
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-[#111827]">{title}</h3>
                <p className="text-[#4B5563] my-2 leading-relaxed">{description}</p>
            </div>

            <div className="space-y-3 ">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div style={{ backgroundColor: iconColor }} className="p-1 rounded-full text-white shrink-0">
                            <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-[#4B5563]">{benefit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}





//     export const Services = () => {
//         return (
//             <section className="w-full">
//                 <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-20 px-8 gap-2">
//                     <span className="text-[#2563EB] font-semibold text-xl ">Our Services</span>
//                     <h2 className="text-[#111827] font-black text-5xl">Comprehensive Medical Solutions</h2>
//                     <p className="text-[#4B5563] text-xl w-3xl m-8">From preventive care to specialized treatments, we offer a complete range of medical services designed to meet your healthcare needs.</p>
                

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {ServicesData.map((service)=>(<ServiceCard key={service.id} {...service}/>))}
//                 </div>
//                 </div>
//             </section>
//         )
//     }

// function ServiceCard({ icon: Icon , title, description, benefits, iconColor,bgColor }) {
//     return (
//         <div style={{ backgroundImage: bgColor }}
//             className="p-8 rounded-2xl flex flex-col gap-4 text-left border border-white">
            
//             <div style={{ backgroundColor: iconColor }} className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"> 
//                 <Icon size={26} />
//             </div>

            
//             <h3 className="text-2xl font-bold text-[#111827]">{title}</h3>
//             <p className="text-[#4B5563] ">{description}</p>

//             <div className="flex flex-col gap-2 mt-2">
//                 {benefits.map((benefit, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                         <div style={{ backgroundColor: iconColor }} className="p-1 rounded-full text-white">
//                             <Check size={10} strokeWidth={3} />
//                             </div>
//                         <span className=" text-[#4B5563] text-base">{benefit}</span> 
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
