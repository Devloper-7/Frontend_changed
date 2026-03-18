import React from 'react';

const IconTimeline = () => {
    return (
        <svg width="1" height="1997" viewBox="0 0 1 1997" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="-2.18557e-08" x2="0.500087" y2="1997" stroke="url(#paint0_linear_whn)" />
            <defs>
                <linearGradient id="paint0_linear_whn" x1="-1.5" y1="1.02016e-07" x2="-1.50024" y2="1997" gradientUnits="userSpaceOnUse">
                    <stop offset="0.00301811" stopColor="white" stopOpacity="0" />
                    <stop offset="0.0513366" stopColor="#DAE6DC" />
                    <stop offset="0.231173" stopColor="white" stopOpacity="0" />
                    <stop offset="0.242069" stopColor="#DAE6DC" />
                    <stop offset="0.435016" stopColor="white" stopOpacity="0" />
                    <stop offset="0.449633" stopColor="#DAE6DC" />
                    <stop offset="0.631659" stopColor="white" stopOpacity="0" />
                    <stop offset="0.646562" stopColor="#DAE6DC" />
                    <stop offset="0.837099" stopColor="white" stopOpacity="0" />
                    <stop offset="0.850253" stopColor="#DAE6DC" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const steps = [
    {
        id: "01",
        label: "Step 01",
        title: "Confirmation Email",
        description:
            "You will receive a detailed confirmation email with your invoice and order details within the next few minutes.",
    },
    {
        id: "02",
        label: "Step 02",
        title: "Vendor Confirmation",
        description:
            "For marketplace orders: The vendor will confirm your order within 24–48 hours and provide delivery/collection details.",
    },
    {
        id: "03",
        label: "Step 03",
        title: "Service Initiation",
        description:
            "For consulting services: Our team will contact you within 2 business days to schedule your initial consultation.",
    },
    {
        id: "04",
        label: "Step 04",
        title: "Track Your Order",
        description:
            "You can track your order status and view all documentation in your account dashboard.",
    },
];

export default function WhatHappensNext() {
    return (
        <section className="rounded-[20px] bg-[#053F31] text-white py-16 px-[20px] md:py-[50px] md:px-[214px] relative overflow-hidden font-outfit mt-10 md:mt-14">

            {/* Desktop-only Gradient Overlay */}
            <div className="hidden md:block absolute inset-0 bg-biomket-gradient pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Title Section */}
                <div className="text-center mb-16 md:mb-[85px] px-2">
                    <h2 className="text-[32px] md:text-[45px] leading-tight font-medium font-lexend mb-4">
                        What Happens Next?
                    </h2>
                </div>


                {/* MOBILE ----------------------------------------------------------- */}

                <div className="md:hidden relative pl-2">

                    {/* Continuous Vertical Line */}
                    <div className="absolute left-[8px] top-[-10px] w-[1px]">
                        <IconTimeline />
                    </div>

                    <div className="space-y-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex gap-6">

                                {/* Timeline Dot */}
                                <div className="flex-shrink-0 relative left-[-5px] z-10 mt-[26px]">
                                    <div className="w-[11px] h-[11px] rounded-full border-[2px] border-white bg-[#103E33]"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Number & Badge Container */}
                                    <div className="relative h-[65px] flex items-center mb-[38px]">

                                        {/* Large Watermark Number */}
                                        <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/5 font-lexend leading-none select-none">
                                            {step.id}
                                        </span>

                                        {/* Step Badge */}
                                        <span className="relative ml-[85px] bg-[#DAE6DC] text-[#053F31] text-[18px] font-bold px-4 py-1.5 rounded-[5px] tracking-wide z-10">
                                            {step.label}
                                        </span>
                                    </div>

                                    {/* Text Content */}
                                    <div className="mt-1">
                                        <h3 className="text-[22px] font-bold mb-3 leading-snug">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/80 font-light text-[15px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* DESKTOP ----------------------------------------------------------------------- */}

                <div className="hidden md:block relative">
                    {/* Desktop Vertical Line */}
                    <div className="absolute left-[320px] top-0 bottom-0 w-[1px] bg-white/10">
                        <IconTimeline />
                    </div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row items-start">
                                {/* Desktop Left Side */}
                                <div className="relative flex-shrink-0 w-[260px]">
                                    <div className="flex flex-col items-end">
                                        <span className="absolute text-[145px] font-bold leading-none text-white/5 -top-5 -left-1 select-none">
                                            {step.id}
                                        </span>
                                        <span className="relative z-10 bg-[#DAE6DC] -left-10 text-[#053F31] text-[18px] font-medium px-[15px] py-[6px] rounded-[10px] top-8">
                                            {step.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Desktop Center Dot */}
                                <div className="flex-shrink-0 w-5 h-5 rounded-full border-3 border-white bg-[#053F31] relative z-20 top-10 mx-[50px]"></div>

                                {/* Desktop Content */}
                                <div className="flex-1 pt-[20px] text-left min-w-[540px]">
                                    <h3 className="text-white text-[25px] font-semibold mb-[20px]">
                                        {step.title}
                                    </h3>
                                    <p className="text-white font-light leading-relaxed text-[20px] mb-4">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
