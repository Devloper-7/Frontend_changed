"use client";

import React, { useEffect, useRef, useState } from 'react';

const SectorItem = ({ iconSrc, title, desc }: { iconSrc: string, title: string, desc: string }) => (
  <div className={`
    group flex flex-col sm:flex-row items-start 
    gap-[20px] sm:gap-[30px] mb-[20px] pb-[20px] 
    border-b border-[#FFFFFF]/20 
    last:mb-[20px] last:border-b first:pt-[20px] first:border-t
  `}>
    {/* Icon Wrapper: flips on hover (card or icon) */}
    <div className="bg-[#DAE6DC] rounded-xl shrink-0 transition-transform duration-300 ease-in-out hover:scale-x-[-1] group-hover:scale-x-[-1]">
      <img src={iconSrc} alt={title} className="" />
    </div>

    <div className='font-outfit'>
      {/* Keeping your exact text size and padding */}
      <h5 className="font-semibold text-[20px] text-white pb-[10px]">{title}</h5>
      <h5 className="font-light text-[20px] text-white">{desc}</h5>
    </div>
  </div>
);

const SECTORS = [
  { iconSrc: "/Livestock.svg", title: "Livestock", desc: "Slurry, manure, digestate, animal by-products" },
  { iconSrc: "/Agriculture.svg", title: "Agriculture", desc: "Plant biomass, pruning residues, crop by-products" },
  { iconSrc: "/Agri-food.svg", title: "Agri-food", desc: "Whey, grape pomace, bagasse, processing by-products" },
  { iconSrc: "/Forestry.svg", title: "Forestry", desc: "Woody biomass, bark, wood chips, forestry residues" },
  { iconSrc: "/Urban.svg", title: "Urban", desc: "Bio-waste, urban organic waste, compostables" },
  { iconSrc: "/Treatment-Plants.svg", title: "Treatment Plants", desc: "WWTP sludge, water treatment by-products" },
];

const SectorServe = () => {
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
      className={`relative overflow-hidden rounded-[20px] p-[20px] md:p-[50px] mb-[70px] sm:mb-[130px] ${inView ? "sector-serve-in" : ""}`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .sector-serve-step { opacity: 0; }
        .sector-serve-in .sector-serve-step {
          animation: sector-serve-slide-in 0.6s ease-out forwards;
        }
        @keyframes sector-serve-slide-in {
          from { opacity: 0; transform: translateX(-28px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}} />
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/sectorServe_bg_img.png" className="w-full h-full object-cover" alt="" />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-12`}>
        {/* Header Section */}
        <div className="w-full max-w-[385px]">
          <h2 className="font-extralight text-white mb-[30px]">
            Sector We<br /> <span className='font-medium'> Serve </span>
          </h2>
          <h5 className="font-outfit text-[20px] font-light text-white">
            We operate across six key sectors of the organic circular economy:
          </h5>
        </div>

        {/* Items List */}
        <div className="flex flex-col mt-[20px] [&>:first-child]:border-t [&>:first-child]:border-t-[#FFFFFF]/20">
          {SECTORS.map((sector, index) => (
            <div key={sector.title} className="sector-serve-step" style={{ animationDelay: `${index * 0.08}s` }}>
              <SectorItem iconSrc={sector.iconSrc} title={sector.title} desc={sector.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorServe;
