import {
    User, Settings, Shield, Clock,
    Stethoscope, LaptopMinimalCheck, ShieldCheck, Ambulance,
    Check
} from 'lucide-react';


const IconBox = ({ Icon, fromColor, toColor, size = 28 }) => (
    <div
        style={{ backgroundImage: `linear-gradient(145deg, ${fromColor} 0%, ${toColor} 100%)` }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md mb-4 shrink-0 md:w-16 md:h-16">
        <Icon size={size} strokeWidth={2.5} className="drop-shadow-md" />
    </div>
);

export const ProfessionalismIcon = () => (
    <IconBox Icon={User} fromColor="#3B82F6" toColor="#2563EB" />
);

export const FlexibilityIcon = () => (
    <IconBox Icon={Settings} fromColor="#A855F7" toColor="#9333EA" />
);

export const ResponsibilityIcon = () => (
    <IconBox Icon={Shield} fromColor="#22C55E" toColor="#16A34A" />
);

export const ResponsivenessIcon = () => (
    <IconBox Icon={Clock} fromColor="#F97316" toColor="#EA580C" />
);

export const PrimaryCareIcon = () => <IconBox Icon={Stethoscope} fromColor="#3B82F6" toColor="#2563EB" />;
export const TelemedicineIcon = () => <IconBox Icon={LaptopMinimalCheck} fromColor="#A855F7" toColor="#9333EA" />;
export const SpecializedCareIcon = () => <IconBox Icon={ShieldCheck} fromColor="#22C55E" toColor="#16A34A" />;
export const EmergencyIcon = () => <IconBox Icon={Ambulance} fromColor="#F97316" toColor="#EA580C" />;

export const GreenCheck = () => (
    <div className="bg-[#DCFCE7] p-1.5 rounded-full flex items-center justify-center shrink-0 shadow-sm">
        <Check size={14} className="text-[#16A34A] stroke-[3px]" />
    </div>
);