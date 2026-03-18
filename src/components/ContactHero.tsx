"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";

export type ContactHeroProps = {
  /** Custom Headline */
  headline?: ReactNode;

  /** Description text */
  description?: string;

  /** Show search bar? */
  showSearch?: boolean;

  /** NEW: Allows you to add Buttons or extra content at the bottom */
  children?: ReactNode;
};

// Default texts
const DEFAULT_DESCRIPTION = "Have organic waste to valorize or looking for sustainable raw materials? Our team is ready to help.";

export default function ContactHero({
  headline,
  description = DEFAULT_DESCRIPTION,
  showSearch = false,
  children, // <--- 1. We receive the children here
}: ContactHeroProps) {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(!!entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative mx-auto md:mx-[40px] rounded-[20px] mt-[20px] mb-[70px] sm:mb-[130px] text-center text-white flex flex-col md:right-10 min-h-[647px] xl:max-w-[1440px] 2xl:max-w-[1920px] md:min-h-[449px] w-full overflow-hidden">

      {/* --- BACKGROUND (Fixed) --- */}
      <div
        className="absolute w-full inset-0 bg-no-repeat bg-cover bg-top-center bg-center bg-contain md:hidden "
        style={{ backgroundImage: `url('/contact_hero_bg_mobile.png')` }}
      />
      <div
        className="absolute inset-0 hidden bg-no-repeat bg-center bg-cover md:block"
        style={{ backgroundImage: `url('/1920_contact_banner.png')` }}
      />

      {/* Icon overlay - same animation as Hero.tsx */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes contact-hero-icon-in {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.75; transform: scale(0.92); }
        }
        .contact-hero-icon-anim {
          animation: contact-hero-icon-in 1.5s ease-in-out both infinite;
        }
        @keyframes contact-hero-rain-fall {
          0% { transform: translate(-50%, -60%); opacity: 0; }
          10% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% { transform: translate(-50%, 40%); opacity: 0; }
        }
        .contact-hero-rain-lines {
          animation: contact-hero-rain-fall 3.5s ease-in infinite;
        }
        .contact-hero-text-slide { opacity: 0; }
        .contact-hero-text-in .contact-hero-text-slide {
          animation: contact-hero-slide-down 0.55s ease-out forwards;
        }
        @keyframes contact-hero-slide-down {
          from { opacity: 0; transform: translateY(-22px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      {/* Desktop only: 4 icons (tree, notes, truck, gear) */}
      <div className="absolute inset-0 pointer-events-none z-[1] hidden md:block" aria-hidden>
        <div className="contact-hero-icon-anim absolute flex items-center justify-center" style={{ left: "3%", top: "26%", animationDelay: "0.1s" }}>
          <img src="/tree.png" alt="" />
        </div>
        <div className="contact-hero-icon-anim absolute flex items-center justify-center" style={{ left: "9%", top: "65%", animationDelay: "0.2s" }}>
          <img src="/notes.png" alt="" />
        </div>
        <div className="contact-hero-icon-anim absolute flex items-center justify-center" style={{ right: "12%", top: "14%", animationDelay: "0.15s" }}>
          <img src="/truck.png" alt="" />
        </div>
        <div className="contact-hero-icon-anim absolute flex items-center justify-center" style={{ right: "3%", top: "70%", animationDelay: "0.3s" }}>
          <img src="/gear.png" alt="" />
        </div>
         {/* Bottom middle: 3 lines with rain-down animation, staggered up→down (right highest, left lowest) */}
         <div
          className="contact-hero-rain-lines absolute left-1/2 bottom-0 pointer-events-none flex items-end justify-center gap-14"
          style={{ height: "35%" }}
          aria-hidden
        >
          <img src="/line1.png" alt="" style={{ transform: "translateY(40%)" }} />
          <img src="/line2.png" alt="" style={{ transform: "translateY(15%)" }} />
          <img src="/line3.png" alt="" style={{ transform: "translateY(-12%)" }} />
        </div>
      </div>

      {/* Mobile only: 4 corner icons (tree, truck, boat, bin) in light gray circles */}
      <div className="absolute inset-0 pointer-events-none z-[1] md:hidden" aria-hidden>
        <div className="contact-hero-icon-anim absolute flex items-center justify-center" style={{ left: "16%", top: "9%", animationDelay: "0.1s" }}>
          <img src="/tree.png" alt="" className="w-10 h-10"/>
        </div>
        <div className="contact-hero-icon-anim absolute flex items-center justify-center" style={{ right: "15%", top: "4%", animationDelay: "0.15s" }}>
          <img src="/truck.png" alt="" className="w-10 h-10"/>
        </div>
        <div className="contact-hero-icon-anim absolute flex items-center justify-center" style={{ left: "18%", top: "79%", animationDelay: "0.25s" }}>
          <img src="/boat.png" alt="" className="w-10 h-10"/>
        </div>
        <div className="contact-hero-icon-anim absolute flex items-center justify-center" style={{ right: "18%", top: "87%", animationDelay: "0.3s" }}>
          <img src="/bin.png" alt="" className="w-10 h-10"/>
        </div>
        <div
          className="contact-hero-rain-lines absolute left-1/2 bottom-0 pointer-events-none flex items-end justify-center gap-14"
          style={{ height: "35%" }}
          aria-hidden
        >
          <img src="/line1.png" alt="" style={{ transform: "translateY(40%)" }} />
          <img src="/line2.png" alt="" style={{ transform: "translateY(15%)" }} />
          <img src="/line3.png" alt="" style={{ transform: "translateY(-12%)" }} />
        </div>
      </div>

      {/* --- DYNAMIC CONTENT --- */}
      <div
        ref={contentRef}
        className={`relative z-10 flex w-full mx-auto min-h-[647px] md:min-h-[449px] min-w-[320px] flex-col items-center justify-center px-[20px] md:px-0 md:py-0 text-center ${inView ? "contact-hero-text-in" : ""}`}
      >

        {/* Headline */}
        {headline ? (
          <div className="contact-hero-text-slide mb-[25px]" style={{ animationDelay: "0s" }}>
            {headline}
          </div>
        ) : (
          <h1 className="contact-hero-text-slide mb-[25px] font-extralight font-lexend" style={{ animationDelay: "0s" }}>
            Let's talk about <br className="md:hidden" />
            <span className="font-medium">
              Your <br className="hidden md:block" /> Project
            </span>
            {showSearch = false}
          </h1>
        )}

        {/* Description */}
        <p className="contact-hero-text-slide mb-8 max-w-[782px] text-[#DAE6DC] font-outfit font-light" style={{ animationDelay: "0.1s" }}>
          {description}
        </p>

        {/* Search Bar */}
        {showSearch && (
          <form
            className="contact-hero-text-slide w-full max-w-[616px] mb-6"
            style={{ animationDelay: "0.2s" }}
            onSubmit={(e) => {
              e.preventDefault();
              const q = (e.currentTarget.elements.namedItem("q") as HTMLInputElement | null)?.value?.trim() ?? "";
              router.push(`/search?q=${encodeURIComponent(q)}`);
            }}
          >
            <div className="flex items-center overflow-hidden rounded-[50px] border-2 border-[#DAE6DC] bg-[#DAE6DC]/10 backdrop-blur-sm">
              <input
                name="q"
                type="search"
                placeholder="Search..."
                className="min-w-0 flex-1 bg-transparent font-outfit font-semibold text-[18px] p-[12px_0px_12px_20px] text-white placeholder:text-white/60 focus:outline-none"
              />

              <button
                type="submit"
                className="flex shrink-0 items-center justify-center p-[7px]"
              >
                <div className="bg-[#F7FAF8] rounded-full w-[36px] h-[36px] flex items-center justify-center">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
                      fill="#F7FAF8"
                    />
                    <circle
                      cx="17.3849"
                      cy="16.5939"
                      r="6.38493"
                      stroke="#053F31"
                      strokeWidth="2"
                    />
                    <line
                      x1="1"
                      y1="-1"
                      x2="5.55179"
                      y2="-1"
                      transform="matrix(0.691329 0.72254 -0.691329 0.72254 21.4727 22.0586)"
                      stroke="#053F31"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        )}

        {/* Buttons / Extra Content */}
        {children}
      </div>
    </section>
  );
}


// "use client";

// import { ReactNode } from "react";

// export type ContactHeroProps = {
//   /** Custom Headline */
//   headline?: ReactNode;

//   /** Description text */
//   description?: string;

//   /** Show search bar? */
//   showSearch?: boolean;

//   /** NEW: Allows you to add Buttons or extra content at the bottom */
//   children?: ReactNode;
// };

// // Default texts
// const DEFAULT_DESCRIPTION = "Have organic waste to valorize or looking for sustainable raw materials? Our team is ready to help.";

// export default function ContactHero({
//   headline,
//   description = DEFAULT_DESCRIPTION,
//   showSearch = false,
//   children, // <--- 1. We receive the children here
// }: ContactHeroProps) {
//   return (
//     <section className="relative rounded-[20px] mt-[20px] mb-[70px] sm:mb-[130px] text-center text-white flex flex-col min-h-[400px] md:min-h-[449px] overflow-hidden">

//       {/* --- BACKGROUND (Fixed) --- */}
//       <div
//         className="absolute inset-0 bg-no-repeat bg-center bg-contain md:hidden"
//         style={{ backgroundImage: `url('/contact_hero_bg_mobile.png')` }}
//       />
//       <div
//         className="absolute inset-0 hidden bg-no-repeat bg-center bg-cover md:block"
//         style={{ backgroundImage: `url('/contact_hero_bg_desktop.png')` }}
//       />

//       {/* --- DYNAMIC CONTENT --- */}
//       <div className="relative z-10 flex min-h-[400px] md:min-h-[449px] flex-col items-center justify-center md:px-4 md:py-10">

//         {/* Headline Logic */}
//         {headline ? (
//           <div className="mb-[25px]">
//             {headline}
//           </div>
//         ) : (
//           <h1 className="mb-[25px] font-extralight font-lexend md:text-[60px] text-[40px] leading-tight">
//             Let's talk about <br className="md:hidden" />
//             <span className="font-medium">Your <br className="hidden md:block" /> Project</span>
//           </h1>
//         )}

//         {/* Description */}
//         <p className="mb-8 max-w-[782px] text-[#DAE6DC] font-outfit font-light text-lg md:text-xl">
//           {description}
//         </p>

//         {/* Search Bar */}
//         {showSearch && (
//           <form className="w-full max-w-[616px] mb-6" onSubmit={(e) => e.preventDefault()}>
//             <div className="flex items-center overflow-hidden rounded-[50px] border border-2 border-[#DAE6DC] bg-[#DAE6DC]/10 backdrop-blur-sm">
//               <input type="search" placeholder="Search..." className="min-w-0 flex-1 bg-transparent text-outfit font-semibold text-[16px] md:text-[18px] p-[12px_0px_12px_20px] text-white placeholder:text-white/60 focus:outline-none" />
//               <button type="submit" className="flex shrink-0 items-center justify-center p-[7px]">
//                 <div className="bg-[#F7FAF8]  rounded-full w-[36px] h-[36px] flex items-center justify-center">

//                   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#F7FAF8" />
//                     <circle cx="17.3849" cy="16.5939" r="6.38493" stroke="#053F31" strokeWidth="2" />
//                     <line x1="1" y1="-1" x2="5.55179" y2="-1" transform="matrix(0.691329 0.72254 -0.691329 0.72254 21.4727 22.0586)" stroke="#053F31" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </div>
//               </button>
//             </div>
//           </form>
//         )}

//         {/* --- 2. RENDER THE BUTTONS HERE --- */}
//         {children}

//       </div>
//     </section>
//   );
// }