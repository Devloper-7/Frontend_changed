"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function IconDocumentCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
      <rect width="58" height="58" rx="10" fill="#DAE6DC" fillOpacity="0.7" />
      <rect x="0.5" y="0.5" width="57" height="57" rx="9.5" stroke="#053F31" strokeOpacity="0.3" />
      <path d="M36.875 29.7779V18.5C36.875 17.8038 36.5984 17.1361 36.1062 16.6438C35.6139 16.1516 34.9462 15.875 34.25 15.875H20.25C19.5538 15.875 18.8861 16.1516 18.3938 16.6438C17.9016 17.1361 17.625 17.8038 17.625 18.5V37.75C17.625 38.4462 17.9016 39.1139 18.3938 39.6062C18.8861 40.0984 19.5538 40.375 20.25 40.375H29.3631C30.0468 41.0105 30.8583 41.4926 31.7434 41.7891C32.6285 42.0855 33.5667 42.1894 34.4952 42.0938C35.4237 41.9981 36.3211 41.7053 37.1272 41.2347C37.9333 40.7641 38.6296 40.1268 39.1694 39.3653C39.7092 38.6038 40.08 37.7357 40.2571 36.8193C40.4342 35.9028 40.4134 34.9591 40.1962 34.0513C39.9789 33.1435 39.5702 32.2926 38.9975 31.5556C38.4247 30.8186 37.701 30.2125 36.875 29.7779ZM22.875 22H31.625C31.8571 22 32.0796 22.0922 32.2437 22.2563C32.4078 22.4204 32.5 22.6429 32.5 22.875C32.5 23.1071 32.4078 23.3296 32.2437 23.4937C32.0796 23.6578 31.8571 23.75 31.625 23.75H22.875C22.6429 23.75 22.4204 23.6578 22.2563 23.4937C22.0922 23.3296 22 23.1071 22 22.875C22 22.6429 22.0922 22.4204 22.2563 22.2563C22.4204 22.0922 22.6429 22 22.875 22ZM22.875 26.375H31.625C31.8571 26.375 32.0796 26.4672 32.2437 26.6313C32.4078 26.7954 32.5 27.0179 32.5 27.25C32.5 27.4821 32.4078 27.7046 32.2437 27.8687C32.0796 28.0328 31.8571 28.125 31.625 28.125H22.875C22.6429 28.125 22.4204 28.0328 22.2563 27.8687C22.0922 27.7046 22 27.4821 22 27.25C22 27.0179 22.0922 26.7954 22.2563 26.6313C22.4204 26.4672 22.6429 26.375 22.875 26.375ZM24.625 32.5H22.875C22.6429 32.5 22.4204 32.4078 22.2563 32.2437C22.0922 32.0796 22 31.8571 22 31.625C22 31.3929 22.0922 31.1704 22.2563 31.0063C22.4204 30.8422 22.6429 30.75 22.875 30.75H24.625C24.8571 30.75 25.0796 30.8422 25.2437 31.0063C25.4078 31.1704 25.5 31.3929 25.5 31.625C25.5 31.8571 25.4078 32.0796 25.2437 32.2437C25.0796 32.4078 24.8571 32.5 24.625 32.5ZM33.8125 40.375C33.1005 40.375 32.3973 40.2171 31.7537 39.9125C31.1101 39.6079 30.5422 39.1643 30.0907 38.6137C29.6393 38.0631 29.3157 37.4192 29.1432 36.7283C28.9707 36.0375 28.9536 35.3171 29.0932 34.6189C29.2329 33.9207 29.5257 33.2621 29.9505 32.6908C30.3754 32.1194 30.9218 31.6495 31.5502 31.3148C32.1787 30.9801 32.8736 30.789 33.5848 30.7554C34.296 30.7217 35.0059 30.8463 35.6631 31.1201C36.6901 31.548 37.5371 32.3184 38.06 33.3004C38.583 34.2824 38.7495 35.4152 38.5314 36.5061C38.3133 37.5971 37.7239 38.5787 36.8635 39.2841C36.0032 39.9895 34.925 40.375 33.8125 40.375Z" fill="#053F31" />
      <path d="M35.2971 33.725L33.2776 36.4183L32.2407 35.3814C32.0757 35.222 31.8546 35.1338 31.6252 35.1358C31.3958 35.1378 31.1763 35.2298 31.0141 35.392C30.8519 35.5543 30.7598 35.7737 30.7578 36.0032C30.7559 36.2326 30.844 36.4536 31.0034 36.6186L32.7534 38.3686C32.8428 38.4559 32.9496 38.5233 33.0669 38.5664C33.1841 38.6094 33.3092 38.627 33.4338 38.6182C33.5584 38.6093 33.6797 38.5742 33.7897 38.515C33.8997 38.4559 33.996 38.3741 34.0721 38.275L36.6971 34.775C36.8363 34.5894 36.8961 34.356 36.8633 34.1263C36.8304 33.8965 36.7077 33.6892 36.5221 33.55C36.3364 33.4108 36.103 33.351 35.8733 33.3838C35.6436 33.4166 35.4363 33.5394 35.2971 33.725Z" fill="#053F31" />
    </svg>
  );
}

export default function WhatAreEWCCodes() {
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
      className={`w-full mx-auto mb-[70px] font-outfit  ${inView ? "what-ewc-in" : ""}`}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        .what-ewc-row1 { opacity: 0; }
        .what-ewc-row2 { opacity: 0; }
        .what-ewc-in .what-ewc-row1 {
          animation: what-ewc-from-right 0.6s ease-out forwards;
        }
        .what-ewc-in .what-ewc-row2 {
          animation: what-ewc-from-below 0.6s ease-out 0.15s forwards;
        }
        @keyframes what-ewc-from-right {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes what-ewc-from-below {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      {/* Row 1: Heading + intro */}
      <div className="what-ewc-row1 flex flex-col xl:flex-row justify-between items-start gap-6 xl:gap-[50px] mb-8 xl:mb-[50px] border-b border-[#DDDDDD] pb-[50px]">
        <h2 className="font-lexend font-light text-[#1a1a1a] leading-tight ">
          What are <span className="font-semibold">LER codes?</span>
        </h2>
        <p className="xl:max-w-[621px] xl:text-right font-outfit text-[#424242] font-light  !text-[20px]">
          The European Waste Catalogue (EWC codes) is a classification system that groups different types of waste by material, source, and nature.
        </p>
      </div>

      {/* Row 2: Information box */}
      <div className="what-ewc-row2 rounded-[20px] border border-[#DDDDDD] bg-white p-[30px] w-full">
        <div className="flex flex-col gap-5">
          <div className="md:hidden flex items-center justify-start shrink-0">
            <IconDocumentCheck />
          </div>
          <div className="space-y-5 min-w-0">
            <p className="font-outfit text-[#424242] font-light !text-[20px]">
              The system uses a six-digit code to classify waste into chapters and subchapters.
            </p>
            <p className="font-outfit text-[#757575] font-light !text-[20px] leading-relaxed">
              The EWC code system was introduced by the European Union in its member countries in 2002.
              Spain incorporated it into its legislation through Order <span className="font-semibold text-[#000000] underline underline-offset-2">MAM/304/2002</span>, a regulation that was subsequently repealed and replaced by the{" "}
              <Link
                href="/legal/waste-law-7-2022"
                className="font-semibold text-[#000000] underline underline-offset-2"
              >
                current Law 7/2022, of April 8, on Waste and Contaminated Soils for a Circular Economy .
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
