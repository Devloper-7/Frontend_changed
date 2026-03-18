'use client';

import React, { useState, useEffect } from 'react';
import {
    User,
    Mail,
    Phone,
    Building,
    MapPin,
    Camera,
    Edit2,
    Check,
    X,
    ChevronDown,
    LogOut,
    Save
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// --- 1. TYPES ---
interface UserData {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
    accountType: string;
    // Company Details
    vatNumber: string;
    website: string;
    yearEstablished: string;
    // Address
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    // Capabilities
    wasteCodes: string;
    certifications: string;
    bio: string;
}

// --- 2. REUSABLE INPUT COMPONENT (Matches your design) ---
interface ProfileFieldProps {
    label: string;
    icon?: React.ReactNode;
    isEditing: boolean;
    children: React.ReactNode;
    className?: string;
}

const ProfileField = ({ label, icon, isEditing, children, className = "mb-[21px]" }: ProfileFieldProps) => (
    <div className={className}>
        <label className="block text-[18px] md:text-[20px] font-medium text-gray-900 mb-[9px]">
            {label} {isEditing && <span className="text-[#FF0000]">*</span>}
        </label>

        <div className="relative group">
            {children}

            {/* ICON (Right aligned) */}
            <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300 ${isEditing ? 'text-[#053F31]' : 'text-gray-400'}`}>
                {icon}
            </div>

            {/* --- YOUR SIGNATURE GREEN ACCENT LINE --- */}
            {/* It remains visible but gets slightly brighter/wider when editing to indicate focus */}
            <div className={`absolute bottom-0 left-[30px] h-[3px] bg-[#053F31] z-10 transition-all duration-300 ${isEditing ? 'w-[80px] brightness-110' : 'w-[60px]'}`}></div>
        </div>
    </div>
);

// --- 3. MAIN COMPONENT ---
import Sidebar from "./Sidebar";
export default function ProfilePage() {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        router.push("/signin");
    };

    // Initial Mock Data
    const [formData, setFormData] = useState<UserData>({
        fullName: "DMP",
        email: "dmp@temp.com",
        phone: "+1 (555) 012-3456",
        company: "Hexagon Infosoft Ltd",
        jobTitle: "Manager",
        accountType: "waste-producer",
        vatNumber: "",
        website: "",
        yearEstablished: "",
        street: "",
        city: "Ahmedabad",
        state: "Gujarat",
        zipCode: "",
        country: "India",
        wasteCodes: "",
        certifications: "",
        bio: "Passionate about circular economy and organic waste valorization."
    });

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setFormData(previous => ({
                    ...previous,
                    fullName: user.fullName || previous.fullName,
                    email: user.email || previous.email,
                    phone: user.phone || previous.phone,
                    company: user.company || previous.company,
                    jobTitle: user.jobTitle || previous.jobTitle,
                    accountType: user.accountType || previous.accountType,
                    vatNumber: user.vatNumber || previous.vatNumber,
                    website: user.website || previous.website,
                    yearEstablished: user.yearEstablished || previous.yearEstablished,
                    street: user.street || previous.street,
                    city: user.city || previous.city,
                    state: user.state || previous.state,
                    zipCode: user.zipCode || previous.zipCode,
                    country: user.country || previous.country,
                    wasteCodes: user.wasteCodes || previous.wasteCodes,
                    certifications: user.certifications || previous.certifications,
                    bio: user.bio || previous.bio,
                }));
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        } else {
            router.push("/signin");
        }
    }, [router]);

    // Handle Input Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    // Toggle Edit/Save
    const handleSave = () => {
        setIsLoading(true);
        // Simulate API Call
        setTimeout(() => {
            setIsLoading(false);
            setIsEditing(false);
            console.log("Updated Profile:", formData);
        }, 1000);
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Optional: Reset form data to original state here
    };

    // Common Input Styles
    const inputClass = `w-full border rounded-lg px-4 py-3 appearance-none focus:outline-none font-light text-[18px] transition-colors duration-200
    ${isEditing
            ? 'bg-white border-gray-300 focus:border-[#053F31] text-gray-900 shadow-sm'
            : 'bg-transparent border-transparent text-gray-600 pl-15px cursor-default'
        }`;

    return (
        <div className="min-h-screen flex flex-row">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 transition-all duration-300">
                <section className="mx-[20px] md:mx-[40px] font-outfit selection:bg-[#053F31] selection:text-white pb-[70px] md:pb-[130px]">

                    {/* ── Hero Header ── */}
                    {/* ── Hero Header (Hidden on Mobile, Visible on Desktop) ── */}
                    <div className="hidden md:block bg-gradient-to-r from-[#053F31] to-[#0a5c4a] relative overflow-hidden rounded-b-[30px] shadow-lg">
                        <div className="max-w-[800px] mx-auto text-center pt-[60px] pb-[100px] px-[20px]">
                            <h2 className="font-lexend text-white font-extralight mb-[15px] leading-tight text-3xl md:text-4xl">
                                My <span className="font-medium">Profile</span>
                            </h2>
                            <p className="font-outfit font-light text-[#DAE6DC] tracking-wide text-lg">
                                Manage your account details and preferences
                            </p>
                        </div>
                    </div>

                    {/* ── Profile Card ── */}
                    <div className="max-w-[900px] mx-auto  mt-[20px] md:-mt-[60px] relative z-10">
                        <div className="bg-[#F7FAF8] border rounded-tl-[20px] md:rounded-tl-[0px] border-gray-200 rounded-tr-[20px]  rounded-b-[20px] p-[25px] sm:p-[40px] shadow-xl">

                            {/* Header Row: Avatar & Buttons */}
                            <div className="flex flex-col md:flex-row justify-between items-center mb-[40px] gap-6">

                                {/* Avatar Section */}
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <div className="relative group">
                                        <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                                            <img
                                                src="https://i.pravatar.cc/300?img=12"
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Camera Overlay */}
                                        <button
                                            disabled={!isEditing}
                                            className={`absolute bottom-0 right-0 p-2 rounded-full text-white shadow-lg transition-all duration-300
                    ${isEditing
                                                    ? 'bg-[#053F31] hover:bg-[#1B4D3E] translate-y-0 opacity-100 cursor-pointer'
                                                    : 'bg-gray-400 translate-y-2 opacity-0 cursor-default'
                                                }`}
                                        >
                                            <Camera size={18} />
                                        </button>
                                    </div>

                                    <div className="text-center sm:text-left">
                                        <h3 className="text-2xl font-lexend font-medium text-[#053F31]">{formData.fullName}</h3>
                                        <p className="text-gray-500 font-light capitalize">{formData.accountType ? formData.accountType.replace("-", " ") : "Member"}</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    {isEditing ? (
                                        <>
                                            <button
                                                onClick={handleCancel}
                                                className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition flex items-center gap-2"
                                            >
                                                <X size={18} /> Cancel
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                disabled={isLoading}
                                                className="bg-[#1B4D3E] text-white px-6 py-2 rounded-full hover:bg-emerald-900 transition flex items-center gap-2 shadow-md"
                                            >
                                                {isLoading ? "Saving..." : <><Check size={18} /> Save Changes</>}
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={handleLogout}
                                                className="px-5 py-2 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition flex items-center gap-2"
                                            >
                                                <LogOut size={16} /> Logout
                                            </button>
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="bg-white border border-[#053F31] text-[#053F31] px-6 py-2 rounded-full hover:bg-[#DAE6DC] transition flex items-center gap-2 font-medium"
                                            >
                                                <Edit2 size={16} /> Edit Details
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            <hr className="border-gray-200 mb-8" />

                            {/* Form Fields */}
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[10px]">
                                    <ProfileField label="Full Name" icon={<User size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    <ProfileField label="Job Title" icon={<User size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    <ProfileField label="Email" icon={<Mail size={18} />} isEditing={isEditing}>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={!isEditing} // Usually email is not editable, or requires verify
                                            className={`${inputClass} ${isEditing ? 'opacity-70 cursor-not-allowed bg-gray-100' : ''}`}
                                        />
                                    </ProfileField>

                                    <ProfileField label="Phone" icon={<Phone size={18} />} isEditing={isEditing}>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    {/* ── Section: Company Details ── */}
                                    <div className="col-span-1 md:col-span-2 pt-4 pb-2">
                                        <h4 className="text-xl font-lexend text-[#053F31] border-b border-gray-200 pb-2">Company Details</h4>
                                    </div>

                                    <ProfileField label="Company" icon={<Building size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    <ProfileField label="Account Type" icon={<ChevronDown size={18} />} isEditing={isEditing}>
                                        <select
                                            name="accountType"
                                            value={formData.accountType}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        >
                                            <option value="">Select Account Type</option>
                                            <option value="waste-producer">Waste Producer</option>
                                            <option value="valorizer">Valorizer (Recycler)</option>
                                            <option value="transporter">Transporter</option>
                                            <option value="consultant">Consultant</option>
                                        </select>
                                    </ProfileField>

                                    <ProfileField label="VAT / Tax ID" icon={<Building size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="vatNumber"
                                            value={formData.vatNumber}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    <ProfileField label="Website" icon={<Building size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    {/* ── Section: Address Details ── */}
                                    <div className="col-span-1 md:col-span-2 pt-4 pb-2">
                                        <h4 className="text-xl font-lexend text-[#053F31] border-b border-gray-200 pb-2">Location & Address</h4>
                                    </div>

                                    <ProfileField label="Street Address" icon={<MapPin size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="street"
                                            value={formData.street}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    <ProfileField label="City" icon={<MapPin size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    <ProfileField label="State / Province" icon={<MapPin size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    <ProfileField label="Zip / Postal Code" icon={<MapPin size={18} />} isEditing={isEditing}>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        />
                                    </ProfileField>

                                    <ProfileField label="Country" icon={<ChevronDown size={18} />} isEditing={isEditing}>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={inputClass}
                                        >
                                            <option value="">Select Country</option>
                                            <option value="spain">Spain</option>
                                            <option value="germany">Germany</option>
                                            <option value="france">France</option>
                                            <option value="india">India</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </ProfileField>

                                    {/* ── Section: Operational Capabilities ── */}
                                    <div className="col-span-1 md:col-span-2 pt-4 pb-2">
                                        <h4 className="text-xl font-lexend text-[#053F31] border-b border-gray-200 pb-2">Operational Capabilities</h4>
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <ProfileField label="Waste Codes (EWC)" icon={<Check size={18} />} isEditing={isEditing}>
                                            <input
                                                type="text"
                                                name="wasteCodes"
                                                placeholder="e.g. 02 01 06, 15 01 01"
                                                value={formData.wasteCodes}
                                                onChange={handleChange}
                                                disabled={!isEditing}
                                                className={inputClass}
                                            />
                                        </ProfileField>
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <ProfileField label="Certifications" icon={<Check size={18} />} isEditing={isEditing}>
                                            <input
                                                type="text"
                                                name="certifications"
                                                placeholder="e.g. ISO 14001, Organic Certified"
                                                value={formData.certifications}
                                                onChange={handleChange}
                                                disabled={!isEditing}
                                                className={inputClass}
                                            />
                                        </ProfileField>
                                    </div>
                                </div>

                                {/* Bio - Full Width */}
                                <div className="mt-[20px]">
                                    <label className="block text-[20px] font-medium text-gray-900 mb-[9px]">
                                        Bio {isEditing && <span className="text-[#FF0000]">*</span>}
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            name="bio"
                                            rows={4}
                                            value={formData.bio}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={`${inputClass} resize-none h-auto`}
                                        />
                                        <div className={`absolute bottom-2 left-[30px] h-[3px] bg-[#053F31] z-10 transition-all duration-300 ${isEditing ? 'w-[80px]' : 'w-[60px]'}`}></div>
                                    </div>
                                </div>
                                {isEditing && (
                                    <>
                                        <button
                                            onClick={handleSave}
                                            disabled={isLoading}
                                            className="bg-[#1B4D3E] text-white px-6 py-2 rounded-full hover:bg-emerald-900 transition flex items-center gap-2 shadow-md"
                                        >
                                            {isLoading ? "Saving..." : <><Check size={18} /> Save Changes</>}
                                        </button>
                                    </>
                                )}

                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}