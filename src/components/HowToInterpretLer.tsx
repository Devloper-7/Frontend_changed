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
        label: "STEP - 1",
        title: "Initial Contact & Discovery",
        description: "The first two digits represent the chapters or sources of the residue."
    },
    {
        id: "02",
        label: "STEP - 2",
        title: "Comprehensive Diagnosis",
        description: "Our team conducts detailed on-site audits, waste characterization, and analysis of all waste streams. Complete documentation and regulatory compliance review."
    },
    {
        id: "03",
        label: "STEP - 3",
        title: "Customized Proposal",
        description: "Based on our findings, we develop a tailored waste management plan with clear objectives, timelines, investment requirements, and expected ROI."
    }
];

const HowToInterpretLer = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => setInView(!!entry.isIntersecting),
            { threshold: 0.15, rootMargin: "0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`rounded-[20px] bg-[#053F31] text-white py-16 px-[20px] md:py-[50px] md:px-[214px] relative overflow-hidden font-outfit mb-[70px] ${inView ? "interpret-ler-in" : ""}`}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                .interpret-ler-step { opacity: 0; }
                .interpret-ler-in .interpret-ler-step {
                    animation: interpret-ler-fade-in 0.55s ease-out forwards;
                }
                @keyframes interpret-ler-fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}} />
            {/* Desktop-only Gradient Overlay */}
            <div className="hidden md:block absolute inset-0 bg-biomket-gradient pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Title Section */}
                <div className="interpret-ler-step text-center mb-16 md:mb-[85px] px-2" style={{ animationDelay: "0s" }}>
                    <h2 className="text-[32px] md:text-5xl leading-tight font-light font-lexend mb-4">
                        How to interpret <span className="font-bold">LER codes</span>
                    </h2>
                    <p className="text-white/80 font-light text-base md:text-lg">
                        The six digits that make up the LER code have different meanings:
                    </p>
                </div>


                {/* MOBILE  -----------------------------------------------------------   */}

                <div className="md:hidden relative pl-2">

                    {/* Continuous Vertical Line */}
                    <div className="absolute left-[8px] top-[-40px] bottom-0 w-px overflow-hidden">
                        <IconTimeline />
                    </div>

                    <div className="space-y-10">
                        {steps.map((step, index) => (
                            <div key={index} className="interpret-ler-step relative flex gap-6" style={{ animationDelay: `${0.1 + index * 0.12}s` }}>

                                {/* Timeline Dot */}
                                <div className="shrink-0 relative left-[-5px] z-10 mt-[22px]">
                                    <div className="w-[11px] h-[11px] rounded-full border-2 border-white bg-[#103E33]"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Number & Badge Container */}
                                    <div className="relative h-[65px] flex items-center mb-[38px]">

                                        {/* Large Watermark Number */}
                                        <span className="absolute  -left-2 top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/5 font-lexend leading-none select-none">
                                            {step.id}
                                        </span>

                                        {/* Step Badge */}
                                        <span className="relative md:ml-[50px] ml-[85px] bg-[#DAE6DC] text-[#053F31] text-[18px] font-bold px-4 py-1.5 rounded-[5px] tracking-wide z-10">
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

                {/* DESKTOP     -----------------------------------------------------------------------    */}

                <div className="hidden md:block relative ">
                    {/* Desktop Vertical Line */}
                    <div className="absolute left-[320px] top-0 bottom-0 w-px bg-white/10 overflow-hidden">
                        <IconTimeline />
                    </div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="interpret-ler-step flex flex-row items-start" style={{ animationDelay: `${0.1 + index * 0.12}s` }}>
                                {/* Desktop Left Side */}
                                <div className="relative shrink-0 w-[260px]">
                                    <div className="flex flex-col items-end pr-[40px]">
                                        <span className="absolute text-[145px] font-bold leading-none text-white/5 -top-5 -left-1 select-none">
                                            {step.id}
                                        </span>
                                        <span className="relative z-10 bg-[#DAE6DC] text-[#053F31] text-[18px] font-medium px-[15px] py-[6px] rounded-[10px] top-8">
                                            {step.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Desktop Center Dot */}
                                <div className="shrink-0 w-5 h-5 rounded-full border-2 border-white bg-[#053F31] relative z-20 top-10 mx-[50px]"></div>

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

                {/* Bottom Info Box */}
                <div className="interpret-ler-step mt-20 md:mt-[100px]  text-left pr-4  md:px-0" style={{ animationDelay: "0.5s" }}>
                    <p className="text-white/80 font-light text-[15px] md:text-[18px] leading-relaxed mb-[30px]">
                        There are 20 chapters in total. Codes 1 through 12 and 17 through 20 are the{" "}
                        <span className="font-semibold text-white">main codes or chapters</span>. Each one refers to a type of waste specific to a particular industry. Sections 13, 14, 15, and 16, meanwhile, serve as a miscellaneous category, covering special waste and exceptions within the previous sections.
                    </p>
                    <p className="text-white/80 font-light text-[15px] md:text-[18px] leading-relaxed mb-[30px]">
                        Locating a waste item in the{" "}
                        <span className="font-semibold text-white">European Waste Catalogue (EWC)</span> involves identifying the source of the waste and finding its six-digit code. If the waste item is not found in the main chapters, it should be searched for in chapters 13, 14, 15, or 16. If it is still not found in these sections, the code 99 should be used.
                    </p>
                    <p className="text-white/80 font-light text-[15px] md:text-[18px] leading-relaxed">
                        An asterisk at the end of the LER code numbers indicates that the waste in question is{" "}
                        <span className="font-semibold text-white">highly hazardous</span>.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default HowToInterpretLer;
