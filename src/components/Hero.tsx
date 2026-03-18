// "use client";

// import Link from "next/link";

// export type HeroButton = {
//   label: string;
//   href: string;
//   variant: "primary" | "secondary";
// };

// export type HeroProps = {
//   title: string;
//   titleBold?: string;
//   description: string;
//   buttons: HeroButton[];
//   backgroundImage?: string;
//   mobileBackgroundImage?: string;
// };

// function IconArrowPrimary({ className }: { className?: string }) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
//       <path className="fill-[#053F31] group-hover:fill-[#F7FAF8] transition-colors" d="M0 18C0 8.05887 8.05887 0 18 0V0C27.9411 0 36 8.05887 36 18V18C36 27.9411 27.9411 36 18 36V36C8.05887 36 0 27.9411 0 18V18Z" />
//       <path className="stroke-[#DAE6DC] group-hover:stroke-[#053F31] transition-colors" d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" strokeWidth="2" />
//     </svg>
//   );
// }

// function IconArrowSecondary({ className }: { className?: string }) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
//       <path className="fill-[#F7FAF8] group-hover:fill-[#053F31] transition-colors" d="M0 18C0 8.05887 8.05887 0 18 0V0C27.9411 0 36 8.05887 36 18V18C36 27.9411 27.9411 36 18 36V36C8.05887 36 0 27.9411 0 18V18Z" />
//       <path className="stroke-[#053F31] group-hover:stroke-[#DAE6DC] transition-colors" d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" strokeWidth="2" />
//     </svg>
//   );
// }

// export default function Hero({
//   title,
//   titleBold,
//   description,
//   buttons,
//   backgroundImage = "/hero-bg.png",
//   mobileBackgroundImage = "/hero-bg-mobile.png",
// }: HeroProps) {
//   return (

//     <section className="relative w-full overflow-hidden rounded-[20px] px-[20px] md:px-0  min-w-[320px] min-h-[680px] md:min-h-[750px] md:max-w-[1840px] mx-auto">
//       <div className="relative w-full my-[20px] ">

//         {/* In-flow images so section height = actual image height */}
//         <img
//           src={mobileBackgroundImage}
//           alt=""
//           className="block w-full object-top md:hidden"
//           style={{ height: "auto", verticalAlign: "top" }}
//         />
//         <img
//           src={backgroundImage}
//           alt=""
//           className="hidden w-full object-top  md:block"
//           style={{ height: "auto", verticalAlign: "top" }}
//         />

//         <div className="absolute inset-0 flex flex-col items-center px-[20px] pt-[103px] text-center  md:px-[289px] md:pb-[252px] md:pt-[194px] ">
//           <h1 className="mb-[25px] font-extralight tracking-wide text-white md:w-[645px]">
//             {title}
//             {titleBold ? <span className="font-medium"> {titleBold}</span> : null}
//           </h1>
//           <p className="w-[280px] mb-[25px] font-light font-outfit leading-relaxed text-[#DAE6DC] md:w-[782px]">
//             {description}
//           </p>
//           <div className="flex flex-col gap-[20px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[20px]">
//             {buttons.map((btn) => (
//               <Link
//                 key={btn.label}
//                 href={btn.href}
//                 className={
//                   btn.variant === "primary"
//                     ? "group inline-flex items-center justify-center gap-2 font-outfit font-semibold h-[50px] rounded-[50px] bg-[#DAE6DC] text-[#053F31] p-[7px_7px_7px_15px] mx-auto border-2 border-[#DAE6DC] hover:bg-[#DAE6DC]/10 hover:text-white hover:backdrop-blur-sm transition"
//                     : "group inline-flex items-center justify-center gap-2 font-outfit font-semibold h-[50px] rounded-[50px] border-2 border-[#DAE6DC] bg-[#DAE6DC]/10 backdrop-blur-sm text-white p-[7px_7px_7px_15px] mx-auto hover:bg-[#DAE6DC] hover:text-[#053F31] transition"
//                 }
//               >
//                 {btn.label}
//                 {/* <IconArrow className="shrink-0 w-5 h-5 text-[#053F31]" /> */}
//                 {btn.variant === "primary" ? (
//                   <IconArrowPrimary className="shrink-0 w-5 h-5 text-[#053F31] hover:text-white" />
//                 ) : (
//                   <IconArrowSecondary className="shrink-0 w-5 h-5 text-white hover:text-[#053F31]" />
//                 )}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type HeroButton = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HeroProps = {
  title: string;
  titleBold?: string;
  description: string;
  buttons: HeroButton[];
  desktopImage?: string;   // 1920px
  tabletImage?: string;    // 1340px
  mobileImage?: string;    // mobile
};

function IconArrowPrimary() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        className="fill-[#053F31] group-hover:fill-[#F7FAF8] transition-colors"
        d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18Z"
      />
      <path
        className="stroke-[#DAE6DC] group-hover:stroke-[#053F31] transition-colors"
        d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconArrowSecondary() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        className="fill-[#F7FAF8] group-hover:fill-[#053F31] transition-colors"
        d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18Z"
      />
      <path
        className="stroke-[#053F31] group-hover:stroke-[#DAE6DC] transition-colors"
        d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Hero({
  title,
  titleBold,
  description,
  buttons,
  desktopImage = "/hero-bg-WEB.png",
  // tabletImage = "/hero-bg.png",
  mobileImage = "/hero-bg-mobile.png",
}: HeroProps) {
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
    <section className="relative w-full overflow-hidden rounded-[20px] md:px-0 min-w-[320px] xl:max-w-[1360px] 2xl:max-w-[1840px] mx-auto">

      <div className="relative w-full my-[20px]">

        {/* Responsive Hero Image */}
        <picture>
          {/* Mobile */}
          <source media="(max-width:767px)" srcSet={mobileImage} />

          {/* Tablet / Laptop */}
          {/* <source media="(max-width:1535px)" srcSet={tabletImage} /> */}

          {/* Desktop */}
          <img
            src={desktopImage}
            alt="Hero background"
            className="w-full object-top"
            style={{ height: "auto", verticalAlign: "top" }}
          />
        </picture>

        {/* Shared animation for icon overlays */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes hero-icon-in {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(0.92); }
          }
          .hero-icon-anim {
            animation: hero-icon-in 1.5s ease-in-out both infinite;
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
        .hero-text-slide { opacity: 0; }
        .hero-text-in .hero-text-slide {
          animation: hero-slide-down 0.55s ease-out forwards;
        }
        @keyframes hero-slide-down {
          from { opacity: 0; transform: translateY(-22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}} />

        {/* Mobile only: 4 icons (tree, truck, boat, bin) */}
        <div className="absolute inset-0 pointer-events-none md:hidden" aria-hidden>
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ left: "16%", top: "9%", animationDelay: "0.1s" }}>
            <img src="/tree.png" alt="" className="w-10 h-10" />
          </div>
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ right: "17%", top: "4%", animationDelay: "0.15s" }}>
            <img src="/truck.png" alt="" className="w-10 h-10" />
          </div>
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ left: "16%", bottom: "10%", animationDelay: "0.25s" }}>
            <img src="/boat.png" alt="" className="w-10 h-10" />
          </div>
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ right: "16%", bottom: "3%", animationDelay: "0.3s" }}>
            <img src="/bin.png" alt="" className="w-10 h-10" />
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

        {/* Desktop/tablet: 8 icons overlay */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden>
          {/* Tree - top-left */}
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ left: "4%", top: "14%", animationDelay: "0.1s" }}>
            <img src="/tree.png" alt="" />
          </div>
          {/* Document with pen - mid-left */}
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ left: "14%", top: "35%", animationDelay: "0.2s" }}>
            <img src="/notes.png" alt="" />
          </div>
          {/* Factory - bottom-left */}
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ left: "6%", top: "80%", animationDelay: "0.3s" }}>
            <img src="/boat.png" alt="" />
          </div>
          {/* Delivery truck - top-right */}
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ right: "10%", top: "7%", animationDelay: "0.15s" }}>
            <img src="/truck.png" alt="" />
          </div>
          {/* Shopping cart - upper-mid-right */}
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ right: "18%", top: "28%", animationDelay: "0.25s" }}>
            <img src="/cart.png" alt="" />
          </div>
          {/* Gear - mid-right */}
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ right: "2%", top: "44%", animationDelay: "0.35s" }}>
            <img src="/gear.png" alt="" />
          </div>
          {/* Recycling - bottom-right */}
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ right: "22%", top: "77%", animationDelay: "0.4s" }}>
            <img src="/recycle.png" alt="" />
          </div>
          {/* Trash can - lower-mid-right */}
          <div className="hero-icon-anim absolute flex items-center justify-center" style={{ right: "6%", top: "70%", animationDelay: "0.45s" }}>
            <img src="/bin.png" alt="" />
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

        {/* Content Overlay */}
        <div
          ref={contentRef}
          className={`absolute inset-0 flex flex-col items-center px-[20px] pt-[103px] text-center md:px-[289px] md:pt-[194px] md:pb-[252px] ${inView ? "hero-text-in" : ""}`}
        >

          <h1 className="hero-text-slide mb-[25px] font-extralight tracking-wide text-white md:w-[645px]" style={{ animationDelay: "0s" }}>
            {title}
            {titleBold && <span className="font-medium"> {titleBold}</span>}
          </h1>

          <p className="hero-text-slide w-[280px] mb-[25px] font-light font-outfit leading-relaxed text-[#DAE6DC] md:w-[782px]" style={{ animationDelay: "0.1s" }}>
            {description}
          </p>

          <div className="hero-text-slide flex flex-col gap-[20px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[20px]" style={{ animationDelay: "0.2s" }}>
            {buttons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={
                  btn.variant === "primary"
                    ? "group inline-flex items-center justify-center gap-2 font-outfit font-semibold h-[50px] rounded-[50px] bg-[#DAE6DC] text-[#053F31] p-[7px_7px_7px_15px] mx-auto border-2 border-[#DAE6DC] hover:bg-[#DAE6DC]/10 hover:text-white hover:backdrop-blur-sm transition"
                    : "group inline-flex items-center justify-center gap-2 font-outfit font-semibold h-[50px] rounded-[50px] border-2 border-[#DAE6DC] bg-[#DAE6DC]/10 backdrop-blur-sm text-white p-[7px_7px_7px_15px] mx-auto hover:bg-[#DAE6DC] hover:text-[#053F31] transition"
                }
              >
                {btn.label}

                {btn.variant === "primary" ? (
                  <IconArrowPrimary />
                ) : (
                  <IconArrowSecondary />
                )}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}