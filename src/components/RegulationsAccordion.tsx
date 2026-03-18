"use client";

import React, { useState } from "react";

const REGULATION_ITEMS = [
  {
    id: "law-7-2022",
    title: "Law 7/2022, on waste and contaminated soils for a circular economy",
    content: null,
  },
  {
    id: "rd-553-2020",
    title: "Royal Decree 553/2020, on the transfer of waste",
    content: {
      seeLegalText: "See legal text",
      seeLegalTextHref: "https://www.boe.es/eli/es/rd/2020/05/19/553",
      intro: "This Royal Decree regulates the transfer of waste within Spanish territory, establishing a control and traceability system that ensures that waste is transported and managed correctly, without risks to health or the environment.",
      keyAspectsTitle: "Key aspects of the Decree:",
      aspects: [
        { title: "Mandatory documentation:", desc: "Each transfer must be accompanied by an identification document, which contains information about the type of waste, origin, destination, intended treatment, among others." },
        { title: "Prior notification (depending on the type of waste):", desc: "In some cases, prior notification of the transfer must be sent to the competent authorities." },
        { title: "eSIR electronic platform:", desc: "The entire procedure must be carried out through the eSIR system (Waste Information System), a mandatory digital platform for sending documentation between companies and administrations." },
        { title: "Application to non-hazardous waste:", desc: "Although initially focused on hazardous waste, this decree also applies to non-hazardous organic waste if it is intended for recovery or disposal in another autonomous community." },
        { title: "Shared responsibility:", desc: "All participants in the chain (producers, transporters, managers) must ensure compliance with regulations and keep documentation for at least 3 years." },
      ],
      closing: "This standard is essential for any operator involved in the transport or treatment of organic waste within the national territory.",
    },
  },
];

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

export default function RegulationsAccordion() {
  const [openId, setOpenId] = useState<string | null>("rd-553-2020");

  return (
    <section className="font-outfit w-full xl:max-w-[1100px] 2xl:max-w-[1420px] mx-auto mb-[70px] md:mb-[130px]">
      {/* <div className=""> */}
      <h2 className="font-extralight text-[#000000] mb-5 font-lexend text-center">
        Regulations on Organic <span className="font-lexend font-medium">Waste in Spain </span>
      </h2>
      {/* This will be 20px on ALL screen sizes */}
      <p className="font-outfit text-[20px]! text-[#424242] font-light mb-[40px] text-center max-w-[1000px] mx-auto">
        At Biomket, we promote organic waste management that complies with current legislation. These are the two key regulations that govern how waste must be managed and transported in Spain.
      </p>

      <div className="space-y-5">
        {REGULATION_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          const hasContent = item.content !== null;

          return (
            <div
              key={item.id}
              className={`rounded-[10px] ${isOpen ? " shadow-[0px_0px_14px_rgba(0,0,0,0.10)] bg-white border-[#D9D9D9]/50" : ""} border border-[#D9D9D9] p-5 overflow-hidden`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between  text-left"
              >
                <span className={`text-[20px]! font-medium ${isOpen ? "font-semibold" : ""} text-[#000000] flex-1`}>
                  {item.title}
                </span>
                <span className="w-9 h-9 rounded-[8px] bg-[#053F31] text-white flex items-center justify-center shrink-0">
                  {isOpen ? <IconMinus /> : <IconPlus />}
                </span>
              </button>

              {hasContent && item.content && isOpen && (
                <div className=" pt-[10px] ">
                  <div className="md:ps-[6px] md:pe-[70px] mb-[10px]">
                    <a
                      href={"seeLegalTextHref" in item.content ? item.content.seeLegalTextHref : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[18px]!  text-[#000000] font-normal mb-[10px] block hover:underline"
                    >
                      {item.content.seeLegalText}
                    </a>
                    <span className="!text-[18px] block  text-[#757575] font-normal leading-[150%]">
                      {item.content.intro}
                    </span>
                  </div>

                  <div className="ps-[30px] md:pe-[46px] ">
                    <span className="!text-[18px] font-normal ">
                      {item.content.keyAspectsTitle}
                    </span>
                    <ol className="list-decimal list-inside space-y-[10px] mb-[10px] pt-[20px] ">
                      {item.content.aspects.map((aspect, idx) => (
                        <li key={idx} className="!text-[18px] font-semibold  leading-[150%]">
                          <span className="font-semibold">{aspect.title}</span>{" "}
                          <span className="font-light">{aspect.desc}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <span className="!text-[18px] md:ps-[6px] md:pe-[70px] block text-[#757575] font-normal leading-[150%]">
                    {item.content.closing}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </section>
  );
}
