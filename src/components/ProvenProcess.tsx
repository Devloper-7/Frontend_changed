'use client';

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
    );
};

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

    // Array exactly as it is in your original file
    const processSteps = [
        {
            number: "1",
            id: "01",
            week: "Week 1",
            weekDesktop: "Week 00-01",
            title: "Initial Contact & Discovery",
            description: "We begin with understanding your business, current waste management practices, and specific challenges. Free initial consultation with no obligations."
        },
        {
            number: "2",
            id: "02",
            week: "Week 2",
            weekDesktop: "Week 00-02",
            title: "Comprehensive Diagnosis",
            description: "Our team conducts detailed on-site audits, waste characterization, and analysis of all waste streams. Complete documentation and regulatory compliance review."
        },
        {
            number: "3",
            id: "03",
            week: "Week 3-4",
            weekDesktop: "Week 03-04",
            title: "Customized Proposal",
            description: "Based on our findings, we develop a tailored waste management plan with clear objectives, timelines, investment requirements, and expected ROI."
        },
        {
            number: "4",
            id: "04",
            week: "Week 5-8",
            weekDesktop: "Week 05-08",
            title: "Implementation & Training",
            description: "We work alongside your team to implement the new waste management processes, provide necessary training, and establish monitoring systems."
        },
        {
            number: "5",
            id: "05",
            week: "Ongoing",
            weekDesktop: "Week 09-01",
            title: "Monitoring & Optimization",
            description: "Continuous tracking of KPIs, regular reporting, and process optimization to ensure long-term sustainability and maximum ROI."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className={`rounded-[20px] bg-[#053F31] text-white py-16 px-[20px] md:pt-[30px] md:pb-[0px] md:px-[0px] min-[1360px]:px-[30px] relative overflow-hidden font-outfit mb-[70px] ${inView ? "proven-process-in" : ""}`}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
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

            <div className="max-w-5xl min-[1360px]:max-w-[1440px] 2xl:max-w-[1800px] mx-auto relative z-10">

                {/* Title Section */}
                <div className="text-center mb-16 md:mb-[30px] min-[1360px]:mb-[40px] px-2">
                    <h2 className="text-[32px] md:text-5xl min-[1360px]:text-[56px] 2xl:text-[64px] leading-tight font-light font-lexend mb-4 min-[1360px]:mb-[5px]">
                        Our <span className="font-bold min-[1360px]:font-medium">Proven Process</span>
                    </h2>
                    <p className="text-white/80 min-[1360px]:text-[#DAE6DC] font-light text-base md:text-lg min-[1360px]:text-[20px]">
                        5-step methodology to transform your waste management
                    </p>
                </div>


                {/* MOBILE (< 768px) -----------------------------------------------------------   */}

                <div className="md:hidden relative pl-2">

                    {/* Continuous Vertical Line */}
                    <div className="absolute left-[8px] top-[-10px] w-[1px]">
                        <IconTimeline />
                    </div>

                    <div className="space-y-10">
                        {processSteps.map((step, index) => (
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
                                        <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/5 font-lexend leading-none select-none">
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


                {/* TABLET (768px - 1365px) ONLY -----------------------------------------------------------------------    */}

                <div className="hidden md:block min-[1360px]:!hidden relative">
                    {/* Desktop Vertical Line */}
                    <div className="absolute left-[320px] top-0 bottom-0 w-[1px] bg-white/10">
                        <IconTimeline />
                    </div>

                    <div className="space-y-16">
                        {processSteps.map((step, index) => (
                            <div key={index} className="proven-process-step flex flex-row items-start" style={{ animationDelay: `${index * 0.12}s` }}>
                                {/* Desktop Left Side */}
                                <div className="relative flex-shrink-0 w-[260px]">
                                    <div className="flex flex-col items-end">
                                        <span className="absolute text-[145px] font-bold leading-none text-white/5 -top-5 -left-1 select-none">
                                            {step.id}
                                        </span>
                                        <span className="relative z-10 bg-[#DAE6DC] text-[#053F31] text-[18px] font-medium px-[15px] py-[6px] rounded-[10px] top-8">
                                            {step.weekDesktop}
                                        </span>
                                    </div>
                                </div>

                                {/* Desktop Center Dot */}
                                <div className="flex-shrink-0 w-5 h-5 rounded-full border-3 border-white bg-[#053F31] relative z-20 top-10 mx-[50px]"></div>

                                {/* Desktop Content */}
                                <div className="flex-1 pt-[20px] text-left min-w-[540px]">
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

                {/* DESKTOP (>= 1360px) - CURVED INFOGRAPHIC LAYOUT ================================================== */}

                <div className="hidden min-[1360px]:block w-full">

                    {/* Curved Infographic Container */}
                    <div className="relative w-full h-[600px] 2xl:h-[650px]">

                        {/* 1. The Perfect Solid S-Curve Line (SVG) */}
                        <svg
                            className="absolute top-0 left-0 w-full h-full z-0 opacity-40"
                            viewBox="0 0 1000 400"
                            preserveAspectRatio="none"
                        >
                            {/* A mathematically perfect continuous Bezier curve passing precisely through the 5 grid centers */}
                            <path
                                d="M 0 100 
                               C 50 100, 50 100, 100 100 
                               C 200 100, 200 300, 300 300 
                               C 400 300, 400 100, 500 100 
                               C 600 100, 600 300, 700 300 
                               C 800 300, 800 100, 900 100 
                               C 950 100, 1000 100, 1000 100"
                                stroke="#ffffff"
                                strokeWidth="2"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>

                        {/* 2. The 5 Content Nodes Grid */}
                        <div className="grid grid-cols-5 w-full h-full absolute top-0 left-0 z-10">
                            {processSteps.map((step, index) => {

                                // Alternating Logic: 0, 2, 4 (Steps 1, 3, 5) are at the TOP of the curve (25% down)
                                // 1, 3 (Steps 2, 4) are at the BOTTOM of the curve (75% down)
                                const isTop = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex justify-center w-full h-full group">

                                        {/* The Dot intersecting the solid line perfectly */}
                                        <div
                                            className="absolute w-[24px] h-[24px] rounded-full bg-[#DAE6DC] border-[5px] border-[#053F31] z-20 shadow-[0_0_0_4px_rgba(218,230,220,0.3)] transition-transform duration-300 group-hover:scale-125 cursor-pointer"
                                            style={{
                                                top: isTop ? '25%' : '75%',
                                                transform: 'translateY(-50%)'
                                            }}
                                        ></div>

                                        {/* The Text Content Card positioned neatly inside the curves */}
                                        <div
                                            className="absolute w-[85%] 2xl:w-[70%] flex flex-col items-center text-center z-10"
                                            style={isTop ? { top: '40%' } : { bottom: '40%' }}
                                        >

                                            {/* Faint Watermark Number placed dynamically behind text */}
                                            <div className="absolute top-[-45px] left-1/2 -translate-x-1/2 text-[110px] font-bold text-white/5 leading-none select-none z-[-1]">
                                                0{step.number}
                                            </div>

                                            {/* Badge */}
                                            <div className="bg-[#DAE6DC] text-[#053F31] text-[12px] font-bold px-4 py-1.5 rounded-[20px] uppercase tracking-wider shadow-md mt-8 mb-2">
                                                {step.week}
                                            </div>

                                            {/* Textual Description */}
                                            <h4 className="text-[20px] 2xl:text-[24px] font-bold text-white mb-2 leading-tight tracking-wide">
                                                {step.title}
                                            </h4>
                                            <p className="text-[#DAE6DC]/90 !text-[16px] leading-relaxed font-light">
                                                {step.description}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProvenProcess;