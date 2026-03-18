"use client";

import React, { useEffect, useRef, useState } from 'react';

const IconTimeline = () => {
    return (
        <svg width="1" height="1997" viewBox="0 0 1 1997" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="-2.18557e-08" x2="0.500087" y2="1997" stroke="url(#paint0_linear_1094_63302)" />
            <defs>
                <linearGradient id="paint0_linear_1094_63302" x1="-1.5" y1="1.02016e-07" x2="-1.50024" y2="1997" gradientUnits="userSpaceOnUse">
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
    )
}
const steps = [
    {
        id: "01",
        week: "Week 00-01",
        title: "Initial Contact & Discovery",
        description: "We begin with understanding your business, current waste management practices, and specific challenges. Free initial consultation with no obligations."
    },
    {
        id: "02",
        week: "Week 00-02",
        title: "Comprehensive Diagnosis",
        description: "Our team conducts detailed on-site audits, waste characterization, and analysis of all waste streams. Complete documentation and regulatory compliance review."
    },
    {
        id: "03",
        week: "Week 03-04",
        title: "Customized Proposal",
        description: "Based on our findings, we develop a tailored waste management plan with clear objectives, timelines, investment requirements, and expected ROI."
    },
    {
        id: "04",
        week: "Week 05-08",
        title: "Implementation & Training",
        description: "We work alongside your team to implement the new waste management processes, provide necessary training, and establish monitoring systems."
    },
    {
        id: "05",
        week: "Week 09-01",
        title: "Initial Contact & Discovery",
        description: "We begin with understanding your business, current waste management practices, and specific challenges. Free initial consultation with no obligations."
    }
];

const ProvenProcess = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                setInView(!!entry.isIntersecting);
            },
            { threshold: 0.15, rootMargin: "0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`rounded-[20px] bg-[#053F31] text-white py-16 px-[20px] md:py-[50px] md:px-[214px] relative overflow-hidden font-outfit mb-[70px] sm:mb-[130px] ${inView ? "proven-process-in" : ""}`}
        >
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes proven-step-in {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .proven-process-step {
                    opacity: 0;
                }
                .proven-process-in .proven-process-step {
                    animation: proven-step-in 0.55s ease-out forwards;
                }
            `}} />

            {/* Desktop-only Gradient Overlay */}
            <div className="hidden md:block absolute inset-0 bg-biomket-gradient pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Title Section */}
                <div className="text-center mb-16 md:mb-[85px] px-2">
                    <h2 className="text-[32px] md:text-5xl leading-tight font-light font-lexend mb-4">
                        Our <span className="font-bold">Proven Process</span>
                    </h2>
                    <p className="text-white/80 font-light text-base md:text-lg">
                        5-step methodology to transform your waste management
                    </p>
                </div>


                {/* MOBILE  -----------------------------------------------------------   */}

                <div className="md:hidden relative pl-2">

                    {/* Continuous Vertical Line */}
                    <div className="absolute left-[8px]  top-[-10px] w-[1px]">
                        <IconTimeline />
                    </div>

                    <div className="space-y-10">
                        {steps.map((step, index) => (
                            <div key={index} className="proven-process-step relative flex gap-6" style={{ animationDelay: `${index * 0.12}s` }}>

                                {/* Timeline Dot */}
                                <div className="flex-shrink-0 relative left-[-5px] z-10 mt-[26px]">
                                    <div className="w-[11px] h-[11px] rounded-full border-[2px] border-white bg-[#103E33]"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Number & Badge Container */}
                                    {/* Height set to contain the large absolute number */}
                                    <div className="relative h-[65px] flex items-center mb-[38px]">

                                        {/* Large Watermark Number */}
                                        <span className="absolute  -left-2 top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/5 font-lexend leading-none select-none">
                                            {step.id}
                                        </span>

                                        {/* Week Badge */}
                                        <span className="relative ml-[85px] bg-[#DAE6DC] text-[#053F31] text-[18px] font-bold px-4 py-1.5 rounded-[5px] tracking-wide z-10">
                                            {step.week}
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


                {/* DESKTOP     -----------------------------------------------------------------------    */}

                <div className="hidden md:block relative ">
                    {/* Desktop Vertical Line */}
                    <div className="absolute left-[320px] top-0 bottom-0 w-[1px] bg-white/10">
                        <IconTimeline />
                    </div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="proven-process-step flex flex-row items-start" style={{ animationDelay: `${index * 0.12}s` }}>
                                {/* Desktop Left Side */}
                                <div className="relative flex-shrink-0 w-[260px]">
                                    <div className="flex flex-col items-end">
                                        <span className="absolute text-[145px] font-bold leading-none text-white/5 -top-5 -left-1 select-none">
                                            {step.id}
                                        </span>
                                        <span className="relative z-10 bg-[#DAE6DC] text-[#053F31] text-[18px] font-medium px-[15px] py-[6px] rounded-[10px] top-8">
                                            {step.week}
                                        </span>
                                    </div>
                                </div>

                                {/* Desktop Center Dot */}
                                <div className="flex-shrink-0 w-5 h-5 rounded-full border-3 border-white bg-[#053F31] relative z-20 top-10 mx-[50px]"></div>

                                {/* Desktop Content */}
                                <div className="flex-1 pt-[20px] text-left  min-w-[540px]">
                                    <h3 className="text-white text-[25px] font-bold mb-[20px]">
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
};

export default ProvenProcess;