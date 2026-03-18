import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative  text-white rounded-[20px] mt-6 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none  ">
                <img
                    src="/contact_hero_bg_desktop.png"
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 text-[58px] pt-[94px] pb-[126px] px-[280px]">
                <h1 className="font-extralight mb-[25px] text-center  leading-tight">
                    Transforming Organic Waste<br />
                    <span className="block font-medium leading-tight">
                        into Business Opportunities
                    </span>
                </h1>

                <p className="text-white/90 text-center mx-auto font-outfit font-light text-sm md:text-[20px] leading-normal">
                    Europe's first specialized platform for organic waste and by-product valorization,<br />
                    combining marketplace technology with comprehensive management services.
                </p>
            </div>

            {/* Floating Icon Decorations */}
            <div className="absolute top-8 left-8 md:left-16 w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full" />
            <div className="absolute top-6 right-12 md:right-24 w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full" />
            <div className="absolute bottom-10 left-12 md:left-20 w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full" />
            <div className="absolute bottom-8 right-16 md:right-32 w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full" />
        </section>
    );
};

export default HeroSection;