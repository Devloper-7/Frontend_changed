"use client";

import { useState } from "react";
import Image from "next/image";
import '../app/custom.css';

// Arrow icons
function IconArrowLeft() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path className="fill-[#053F31] group-hover:fill-[#DAE6DC] transition-colors" d="M36 18C36 8.05888 27.9411 0 18 0C8.05887 0 0 8.05888 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z" />
            <path className="stroke-[#F7FAF8] group-hover:stroke-[#053F31] transition-colors" d="M26 18H10.5M10.5 18L16.5 12M10.5 18L16.5 24.5" strokeWidth="2" />
        </svg>
    );
}



function IconArrowRight() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path className="fill-[#DAE6DC] group-hover:fill-[#053F31] transition-colors" d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" />
            <path className="stroke-[#053F31] group-hover:stroke-[#F7FAF8] transition-colors" d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" strokeWidth="2" />
        </svg>
    );
}


export interface CardItem {
    id: string;
    icon: React.ComponentType;
    label: string;
    subtitle?: string;
}

export interface HeroWithCardsSectionProps {
    // Hero section props
    title: string | React.ReactNode;
    description: string;
    bulletPoints?: string[][]; // Optional 2D array for multiple columns
    bulletPointsTitle?: string; // Optional title above bullet points

    // Cards section props
    cards: CardItem[];
    cardsPerRow?: number; // Default: 5

    // Optional customization
    showNavigation?: boolean; // Default: true
    cardWidth?: string; // Default: "240px"
    cardHeight?: string; // Default: "219px"
}

export default function HeroWithCardsSection({
    title,
    description,
    bulletPoints,
    bulletPointsTitle,
    cards,
    cardsPerRow = 5,
    showNavigation = true,
    cardWidth = "280px",
    cardHeight = "220px",

}: HeroWithCardsSectionProps) {
    // const sliderRef = useRef<HTMLDivElement>(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handlePrev = () => {
        setCurrentCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const handleNext = () => {
        setCurrentCardIndex((prev) => (prev + 1) % cards.length);
    };

    const visibleCards = [
        ...cards.slice(currentCardIndex),
        ...cards.slice(0, currentCardIndex),
    ];

    return (
        <>
            {/* ===================== MOBILE LAYOUT (TempComponent style) ===================== */}
            <div className="md:hidden w-full p-0 md:px-[20px] pb-[70px]">
                <div className="w-full relative">
                    {/* Main Dark Green Card */}
                    <div className="relative w-full min-h-[530px] rounded-[20px] px-[20px] pt-[50px] pb-[152px] text-center overflow-hidden shadow-lg">
                        {/* Background pattern image - CSS background for reliable responsive display */}
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                            style={{ backgroundImage: 'url(/waste_category_bg_mobile.png)' }}
                            aria-hidden="true"
                        />

                        <h2 className="relative z-10 text-white text-[28px] leading-[1.2] font-light tracking-wide mb-6">
                            {title}
                        </h2>

                        <p className="relative z-10 text-[#9cb6ac] font-outfit ">
                            {description}
                        </p>

                        {/* Optional Bullet Points Section */}
                        {bulletPoints && bulletPoints.length > 0 && (
                            <div className="mt-6 relative z-10 font-outfit">
                                {bulletPointsTitle && (
                                    <h3 className="mb-4 text-lg font-light font-semibold text-[#FFFFFF]">
                                        {bulletPointsTitle}
                                    </h3>
                                )}
                                <div className="grid gap-3 grid-cols-1">
                                    {bulletPoints.map((column, columnIndex) => (
                                        <ul key={columnIndex} className="space-y-2 text-left text-[#DAE6DC]">
                                            {column.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start text-[13px]">
                                                    <h5 className="ml-5 mr-3 mt-3 h-1 w-1 flex-shrink-0 rounded-full bg-[#DAE6DC]" />
                                                    <h5 className="font-light">{item}</h5>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Overlapping White Card — fixed height container keeps buttons stable */}
                    <div className="flex justify-center -mt-20 relative z-20 h-[220px]">
                        {cards.length > 0 && (() => {
                            const CurrentIcon = cards[currentCardIndex].icon;
                            return (
                                <div className="w-[240px] h-[220px] shadow-[inset_0_-3px_#053F31] md:hover:shadow-[inset_0_-3px_#053F31] bg-white rounded-[20px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 mb-6 text-[#114031] flex items-center justify-center">
                                        <CurrentIcon />
                                    </div>
                                    <h3 className="text-[#114031] font-semibold  tracking-wide text-center font-outfit">
                                        {cards[currentCardIndex].label}
                                    </h3>
                                    {cards[currentCardIndex].subtitle && (
                                        <p className="text-[#757575] text-base mt-1 font-outfit">
                                            {cards[currentCardIndex].subtitle}
                                        </p>
                                    )}
                                </div>
                            );
                        })()}
                    </div>

                    {/* Navigation Arrows */}
                    {showNavigation && (
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-full bg-[#114031] flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
                                aria-label="Previous category"
                            >
                                <IconArrowLeft />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full bg-[#e2ece7] flex items-center justify-center text-[#114031] transition-transform hover:scale-105 active:scale-95 shadow-sm"
                                aria-label="Next category"
                            >
                                <IconArrowRight />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* ===================== DESKTOP LAYOUT (Original, unchanged) ===================== */}
            <section className="relative w-full overflow-hidden rounded-[20px] hidden md:block xl:max-w-[1360px] 2xl:max-w-[1740px] mx-auto">
                {/* ---------------- TOP GREEN SECTION ---------------- */}
                <div className="relative pt-24 pb-40">
                    {/* subtle pattern */}
                    <div className="absolute inset-0 waste-category-section-bg" />

                    <div className="relative mx-auto max-w-[1200px] px-4 text-center">
                        <h2 className="mx-auto mb-6 max-w-6xl text-[32px] font-extralight  text-[#FFFFFF]">
                            {title}
                        </h2>

                        <p className="mx-auto max-w-5xl font-light font-outfit text-[#DAE6DC]">
                            {description}
                        </p>

                        {/* Optional Bullet Points Section */}
                        {bulletPoints && bulletPoints.length > 0 && (
                            <div className="mt-8">
                                {bulletPointsTitle && (
                                    <h3 className="mb-6 text-xl font-semibold text-[#FFFFFF]">
                                        {bulletPointsTitle}
                                    </h3>
                                )}
                                <div className={`mx-auto max-w-4xl grid gap-4 ${bulletPoints.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                                    {bulletPoints.map((column, columnIndex) => (
                                        <ul key={columnIndex} className="space-y-3 text-left text-[#DAE6DC]">
                                            {column.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start">
                                                    <h5 className="mr-2 mt-3 h-1 w-1 flex-shrink-0 rounded-full bg-[#DAE6DC]" />
                                                    <h5 className="font-light">{item}</h5>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ---------------- CARDS SECTION ---------------- */}
                <div className="-mt-28 mb-[70px] sm:mb-[130px]">
                    <div className="mx-auto max-w-[1280px] lg:max-w-[1480px]">
                        {/* DESKTOP GRID */}
                        <div
                            className={`grid gap-[20px]`}
                            style={{
                                gridTemplateColumns: `repeat(${cardsPerRow}, ${cardWidth})`,
                                justifyContent: "center",
                            }}
                        >
                            {visibleCards.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.id}
                                        className="group hover:shadow-[inset_0_-3px_#053F31] relative overflow-hidden flex flex-col items-center justify-between rounded-[20px] bg-white p-[25px_0px_25px_0px] shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out "
                                        style={{
                                            width: cardWidth,
                                            height: cardHeight,
                                        }}
                                    >
                                        {/* Hover bottom border
                                        <span
                                            className="
                                        pointer-events-none
                                        absolute bottom-0 left-0 w-full
                                        h-[3px]
                                        scale-x-0
                                        bg-[#053F31]
                                        transition-transform duration-200 ease-in
                                        group-hover:scale-x-100
                                 
                                        
                                        "
                                        /> */}
                                        <div className={`flex items-center ${item.subtitle ? 'mb-[25px]' : 'mb-[30px]'}`}>
                                            <Icon />
                                        </div>
                                        <div className="text-center font-outfit">
                                            <p className="text-[20px] font-semibold text-[#000000] transition-colors duration-300 group-hover:!text-[#053F31]">
                                                {item.label}
                                            </p>
                                            {item.subtitle && (
                                                <p className="text-[20px] z-10   text-[#757575]">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation arrows */}
                        {showNavigation && (
                            <div className="mt-[50px] flex justify-center gap-3 md:hidden">
                                <button onClick={handlePrev} aria-label="Previous">
                                    <div className="group cursor-pointer">
                                        <IconArrowLeft />
                                    </div>


                                </button>
                                <button onClick={handleNext} aria-label="Next">
                                    <div className="group cursor-pointer">
                                        <IconArrowRight />
                                    </div>

                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
