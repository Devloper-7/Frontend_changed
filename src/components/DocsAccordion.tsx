"use client";

import React, { useEffect, useRef, useState } from "react";

const ACCORDION_ITEMS = [
  { id: "required", title: "Required documents", content: null },
  { id: "explanation", title: "Explanation of key documents", content: null },
  {
    id: "platforms",
    title: "Environmental platforms",
    content: {
      paragraph: (
        <>
          Most <strong>documents</strong> must be processed electronically through
          the official platforms. Here is the direct access link by region:
        </>
      ),
      links: [
        "https://servicio.mapama.gob.es/esir-web-adv/",
        "https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/",
        "https://www.mapama.gob.es/",
        "https://servicio.mapama.gob.es/esir-web-adv/",
        "https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/",
        "https://www.mapama.gob.es/es/",
        "https://servicio.mapama.gob.es/",
        "https://www.miteco.gob.es/",
        "https://servicio.mapama.gob.es/esir-web-adv/",
      ],
    },
  },
];

function IconPlus() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconMinus() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function DocsAccordion() {
  const [openId, setOpenId] = useState<string | null>("platforms");
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(!!entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-[20px] bg-cover bg-center bg-no-repeat relative overflow-hidden mt-[40px] md:mt-[100px] mb-[70px] md:mb-[130px] font-outfit ${inView ? "docs-accordion-in" : ""}`}
      style={{ backgroundImage: "url('/docsbg.png')" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .docs-accordion-step { opacity: 0; }
        .docs-accordion-in .docs-accordion-step {
          animation: docs-accordion-up 0.55s ease-out forwards;
        }
        @keyframes docs-accordion-up {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      {/* Dark Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-10">
        <div className="max-w-[1000px] 2xl:max-w-[1384px] mx-auto space-y-4">
          {ACCORDION_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const hasContent = item.content !== null;

            return (
              <div
                key={item.id}
                className={`docs-accordion-step rounded-[16px] transition-all duration-300 ${isOpen ? "bg-[#FFFFFF]/10 border-b-3 border-white/20" : "border border-white/20"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-5">
                  <p className="font-medium text-[#FEFEFE]">
                    {item.title}
                  </p>

                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className={`w-9 h-9 rounded-[8px] flex items-center justify-center transition bg-[#E6E6E6] text-[#053F31]`}
                  >
                    {isOpen ? <IconMinus /> : <IconPlus />}
                  </button>
                </div>

                {/* Content */}
                {hasContent && isOpen && (
                  <div className="px-5 pb-5">
                    {/* <div> */}
                      <span className="text-[#FFFFFF] mb-4 font-thin [&_strong]:font-semibold">
                        {item.content.paragraph}
                      </span>

                      <ol className="list-decimal list-inside space-y-[10px] mt-[10px] font-regular text-[#FFFFFF] text-[18px] leading-[150%] break-all">
                        {item.content.links.map((url, idx) => (
                          <li key={idx}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {url}
                            </a>
                          </li>
                        ))}
                      </ol>
                    {/* </div> */}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
