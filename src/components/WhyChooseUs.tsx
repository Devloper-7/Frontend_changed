"use client";

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "200+",
    label: "Clients Served",
  },
  {
    value: "€12M+",
    label: "Cost Savings Generated",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? false),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 px-[20px] md:px-[60px] font-outfit ${inView ? "why-choose-us-in" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .why-choose-us-step { opacity: 0; }
        .why-choose-us-in .why-choose-us-step {
          animation: why-choose-us-fade-up 0.6s ease-out forwards;
        }
        @keyframes why-choose-us-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-[60px] md:mb-[80px]">
          <h2 className="font-light text-black mb-[10px] font-lexend">
            Why <span className="font-medium">Choose Biomket</span>
          </h2>
          <p className="text-[#424242] font-light">
            Trusted by leading companies across Europe
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-[50px] gap-x-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              // CONDITIONAL STYLING:
              // If index is odd (1 or 3), add top margin to push it down.
              // We use 'md:mt-16' so this only happens on medium screens and up.
              className={`why-choose-us-step flex justify-center max-h-[174px] ${index % 2 !== 0 ? "md:mt-[40px]" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <div className="relative w-[259px] ps-[10px] pb-[50px] ">
                {/* Green Box Decoration */}
                <div className="absolute top-[-10px] right-[-0px] w-[112px] h-[174px] bg-[#D9E5DB] rounded-[10px] pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col pt-8 pl-[4px]">
                  <span className="pe-[10px] font-normal text-[#053F31] leading-none mb-4 font-lexend text-right" style={{ fontSize: '64px' }}>
                    {stat.value}
                  </span>
                  <div className="w-full h-[1px] bg-[#053F31]/20 mb-[10px]"></div>
                  <p className="relative text-[#424242] font-light leading-tight text-left">
                    {stat.label}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;