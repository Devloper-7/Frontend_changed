"use client"
import React, { useEffect, useLayoutEffect, useState, useCallback } from "react";

/* ---------- PNG LOGO COMPONENTS ---------- */
const LogoISO14001 = () => (
    <img src="/ISO 14001.png" alt="ISO 14001" />
);

const LogoEU = () => (
    <img src="/EU.png" alt="EU Certification" />
);

const LogoISO9001 = () => (
    <img src="/ISO 9001.png" alt="ISO 9001" />
);

const LogoRecycle = () => (
    <img src="/Waste cycle.png" alt="Recycling Certification" />
);

const LogoPlastic = () => (
    <img src="/Plastics.png" alt="Plastic Industry Association" />
);

/* ---------- LOGOS ARRAY ---------- */
const logos = [
    { Component: LogoISO14001, key: "iso14001" },
    { Component: LogoEU, key: "eu" },
    { Component: LogoISO9001, key: "iso9001" },
    { Component: LogoRecycle, key: "recycle" },
    { Component: LogoPlastic, key: "plastic" },
];

/* ─────────────────────────────────────────────────────────────
   CARD – 1440px: 265×153 (5 fit); 1920px/mobile/tablet: 292×169
───────────────────────────────────────────────────────────── */
const Card = ({ Component, size = "default" }: { Component: React.ComponentType; size?: "default" | "compact" }) => (
    <div className={`flex-shrink-0 bg-[#D9E5DB]/40 rounded-[10px] border border-[#D9D9D9] flex items-center justify-center shadow-sm ${size === "compact" ? "w-[265px] h-[153px]" : "w-[292px] h-[169px]"}`}>
        <Component />
    </div>
);

/* ─────────────────────────────────────────────────────────────
   NAV BUTTON – left: dark green + white icon; right: light + dark green icon
───────────────────────────────────────────────────────────── */
const NavBtn = ({ onClick, children, variant = "prev" }: { onClick: () => void; children: React.ReactNode; variant?: "prev" | "next" }) => (
    <button
        onClick={onClick}
        className={`w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-md transition-colors ${variant === "next"
                ? "bg-[#DAE6DC] text-[#053F31] hover:bg-[#c5dcc8] border border-[#053F31]/30"
                : "bg-[#053F31] text-white hover:bg-[#0F3F32]"
            }`}
    >
        {children}
    </button>
);

/* ─────────────────────────────────────────────────────────────
   CERTIFICATIONS SECTION
   • Big screen (≥640px): carousel-style row, all 5 cards, NO buttons, NO scroll
   • Mobile  (<640px)   : 1 card, prev/next buttons + scroll (infinite)
───────────────────────────────────────────────────────────── */
const Certifications = () => {
    const total = logos.length;

    const [isMobile, setIsMobile] = useState(true); // default true so mobile (one card) shows until breakpoint is known
    const [is2xl, setIs2xl] = useState(false);       // ≥1536 → 1920px card size; else compact
    const [index, setIndex] = useState(0);

    /* ── detect breakpoint (useLayoutEffect so correct layout shows without refresh) ── */
    const update = useCallback(() => {
        const w = typeof window !== "undefined" ? window.innerWidth : 640;
        setIsMobile(w < 640);
        setIs2xl(w >= 1536);
    }, []);
    useLayoutEffect(() => {
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [update]);

    const visible = isMobile ? 1 : 5;

    /* clamp index on breakpoint change */
    useEffect(() => {
        setIndex((prev) => Math.min(prev, total - visible));
    }, [visible, total]);

    /* manual nav (mobile only): arrows + scroll, infinite wrap – after last item, next goes to 1st */
    const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
    const next = useCallback(() => {
        setIndex((i) => {
            const n = (i + 1) % total;
            if (n === 0) setTimeout(() => setIndex(0), 0);
            return n;
        });
    }, [total]);

    const CARD_W = 292;
    const GAP = 20;
    const UNIT = CARD_W + GAP;

    const isBigScreen = !isMobile;

    return (
        <section className="mb-[70px] sm:mb-[130px]">
            <div className="mx-auto px-4 max-w-[1408px] 2xl:max-w-[1540px]">

                {/* ── Heading ── */}
                <h2 className="font-lexend text-center font-extralight mb-10 leading-tight text-3xl md:text-4xl">
                    Our <br className="md:hidden" />
                    <span className="font-semibold">Certifications &amp; Partnerships</span>
                </h2>

                {/* ══ BIG SCREEN (≥640px): CSS shows this from beginning, no JS ══ */}
                <div className="hidden sm:flex justify-center gap-[20px]">
                    {logos.map(({ Component, key }) => (
                        <Card key={key} Component={Component} size={is2xl ? "default" : "compact"} />
                    ))}
                </div>

                {/* ══ MOBILE (<640px): CSS shows this from beginning so arrows appear without refresh ══ */}
                <div className="flex sm:hidden flex-col items-center gap-6">

                    {/* single card track – viewport exactly one card width so only one shows */}
                    <div className="overflow-hidden" style={{ width: CARD_W, maxWidth: "100%" }}>
                        <div
                            className="flex gap-[20px] transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${index * UNIT}px)` }}
                        >
                            {logos.map(({ Component, key }) => (
                                <Card key={key} Component={Component} />
                            ))}
                        </div>
                    </div>

                    {/* ← → nav buttons below cards: left = dark green + white icon, right = light + dark green icon */}
                    <div className="flex gap-4">
                        <NavBtn onClick={prev} variant="prev">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 18C36 8.05888 27.9411 0 18 0C8.05887 0 0 8.05888 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z" fill="#053F31" />
                                <path d="M26 18H10.5M10.5 18L16.5 12M10.5 18L16.5 24.5" stroke="#F7FAF8" strokeWidth="2" />
                            </svg>

                        </NavBtn>
                        <NavBtn onClick={next} variant="next">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#DAE6DC" />
                                <path d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" stroke="#053F31" strokeWidth="2" />
                            </svg>

                        </NavBtn>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Certifications;