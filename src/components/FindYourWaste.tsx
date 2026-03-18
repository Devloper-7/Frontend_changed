"use client";
 
import React, { useEffect, useRef, useState } from "react";
 
const TOP_LEVEL_CATEGORIES = [
  { id: "01", title: "Waste from prospecting, mining, quarrying, physical and chemical treatment of minerals." },
  {
    id: "02",
    title: "Waste from agriculture, horticulture, aquaculture, forestry, hunting and fishing; waste from food preparation and processing.",
    nested: [
      {
        id: "01",
        title: "Waste from agriculture, horticulture, aquaculture, forestry, hunting and fishing.",
        items: [
          "Washing and cleaning sludge.",
          "Animal tissue waste.",
          "Plant tissue waste.",
          "Waste plastics (except packaging).",
          "Animal faeces, urine and manure.",
          "Non-hazardous waste from forestry.",
          "Agrochemical waste.",
          "Waste metal.",
          "Waste from the preparation and processing of meat, fish and other foods of animal origin.",
          "Waste from the preparation and processing of fruit, vegetables, cereals, edible oils, cocoa, coffee, tea and tobacco.",
        ],
      },
      { id: "02", title: "Waste from the preparation and processing of meat, fish and other foods of animal origin.", items: [] },
      { id: "03", title: "Waste from the preparation and processing of fruit, vegetables, cereals, edible oils, cocoa, coffee, tea and tobacco.", items: [] },
      { id: "04", title: "Waste from sugar processing.", items: [] },
      { id: "05", title: "Waste from the dairy products industry.", items: [] },
      { id: "06", title: "Waste from the baking and confectionery industry.", items: [] },
      { id: "07", title: "Waste from the production of alcoholic and non-alcoholic beverages.", items: [] },
    ],
  },
  { id: "03", title: "Waste from wood processing and the production of panels, furniture, pulp, paper and cardboard." },
  { id: "04", title: "Waste from the leather, fur and textile industries." },
  { id: "05", title: "Waste from petroleum refining, natural gas purification and pyrolytic treatment of coal." },
  { id: "06", title: "Waste from inorganic chemical processes." },
];
 
function IconSearch() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#053F31" />
      <circle cx="17.3849" cy="16.5939" r="6.38493" stroke="white" strokeWidth="2" />
      <line x1="1" y1="-1" x2="5.55179" y2="-1" transform="matrix(0.691329 0.72254 -0.691329 0.72254 21.4688 22.0586)" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
 
function IconPlus() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
 
function IconMinus() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
 
function IconChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
 
function IconChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
 
export default function FindYourWaste() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openTopId, setOpenTopId] = useState<string | null>("02");
  const [openNestedId, setOpenNestedId] = useState<string | null>("02-01");
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(!!entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full max-w-[1100px] 2xl:max-w-[1420px] mx-auto mb-[70px] md:mb-[130px] font-outfit ${inView ? "find-waste-in" : ""}`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .find-waste-step { opacity: 0; }
        .find-waste-in .find-waste-step {
          animation: find-waste-up 0.55s ease-out forwards;
        }
        @keyframes find-waste-up {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      <h2 className="find-waste-step text-center text-[28px] md:text-[34px] font-light text-[#1a1a1a] mb-5 border-b border-[#053F31]/20 pb-5" style={{ animationDelay: "0s" }}>
        Find your <span className="font-semibold">Waste</span>
      </h2>
 
      {/* Search bar */}
      <div className="find-waste-step flex rounded-full border border-[#E8E8E8] bg-[#DAE6DC]/10 overflow-hidden w-full max-w-[478px] xl:max-w-[918px] mx-auto h-[50px] mb-[50px] p-[7px_7px_7px_15px]" style={{ animationDelay: "0.1s" }}>
        <input
          type="text"
          placeholder="Look For..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 h-full min-w-0 rounded-l-full border-0  text-[16px] text-[#424242] placeholder:text-[#999999] placeholder:font-semibold font-light focus:outline-none focus:ring-0"
        />
        <button
          type="button"
          className="flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
          aria-label="Search"
        >
          <IconSearch />
        </button>
      </div>
 
      {/* Top-level accordions */}
      <div className="space-y-[20px]">
        {TOP_LEVEL_CATEGORIES.map((cat, catIndex) => {
          const isTopOpen = openTopId === cat.id;
          const hasNested = "nested" in cat && cat.nested && cat.nested.length > 0;
 
          return (
            <div
              key={cat.id}
              className={`find-waste-step rounded-[10px] overflow-hidden ${isTopOpen ? "bg-[#F7FAF8] border border-[#053F31]/30 shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "border border-[#D9D9D9] "}`}
              style={{ animationDelay: `${0.2 + catIndex * 0.08}s` }}
            >
              <div className="flex items-start justify-between md:items-center gap-9 p-5">
                <div className="flex items-start gap-2 flex-1">
                  <span className="text-[20px] font-semibold text-[#000000]">
                    {cat.title}
                  </span>
                </div>
 
                <button
                  type="button"
                  onClick={() => setOpenTopId(isTopOpen ? null : cat.id)}
                  className="w-9 h-9 rounded-[8px] bg-[#053F31] text-white flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
                  aria-expanded={isTopOpen}
                >
                  {isTopOpen ? <IconMinus /> : <IconPlus />}
                </button>
              </div>
 
              {hasNested && isTopOpen && (
                <div className="bg-[#FBFBFA]/50 px-5 pb-5 ">
                  {cat.nested!.map((nested, nestedIndex) => {
                    const nestedKey = `${cat.id}-${nested.id}`;
                    const isNestedOpen = openNestedId === nestedKey;
                    const hasItems = nested.items && nested.items.length > 0;
                    const isLastNested = nestedIndex === cat.nested!.length - 1;
 
                    return (
                      <div
                        key={nestedKey}
                        className="w-full overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenNestedId(isNestedOpen ? null : nestedKey)}
                          className={`w-full flex items-center justify-between gap-3 p-[10px_0px] text-left ${isLastNested ? "" : "border-b border-[#DDDDDD]"}`}
                        >
                          <div className="flex items-start gap-2 flex-1">
                            <span className="font-outfit text-[18px] leading-[150%] text-[#000000] shrink-0">
                              {Number(nested.id)}.
                            </span>
                            <span className="font-outfit text-[18px] leading-[150%] text-[#000000]">
                              {nested.title}
                            </span>
                          </div>
                          <span className="text-[#053F31] shrink-0">
                            {isNestedOpen ? <IconChevronUp /> : <IconChevronDown />}
                          </span>
                        </button>
                        {hasItems && isNestedOpen && (
                          <div className="px-2 pb-4 pt-2">
                            <ul className="space-y-2 text-[18px] text-[#757575] font-regular leading-[150%]">
                              {nested.items!.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#757575]" />
                                  <span className="flex-1">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}