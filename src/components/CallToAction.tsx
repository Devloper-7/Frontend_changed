"use client";
 
import Link from "next/link";
 
export default function CallToAction() {
  return (
    <div className="relative z-20 mx-[20px] md:mx-[40px] -mb-90 md:-mb-30">
      <div className="bg-[#F7FAF8] rounded-[20px] border border-[#DAE6DC] shadow-2xl py-[30px] md:py-[60px] px-[20px] md:px-[50px] xl:max-w-[1240px] 2xl:max-w-[1360px] sm:mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
 
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <h2 className="font-extralight text-black leading-tight">
              Ready to <br className="md:hidden" /> Transform&nbsp;<br className="hidden md:block" />Your <br className="md:hidden" /> Organic <span className="font-medium">Waste</span> <br />
              <span className="font-medium">Management?</span>
            </h2>
          </div>
 
          {/* Right: Content */}
          <div className="font-outfit w-full lg:w-auto">
            <p className="text-[#424242] leading-relaxed mb-10 font-light text-center lg:text-left">
              Join Europe's leading B2B marketplace for organic waste valorization. <br className="hidden lg:block" />
              Start trading or request personalized consulting services today.
            </p>
 
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full  justify-center lg:justify-start">
              <Link href="/marketplace" className="flex items-center justify-center gap-3 md:gap-2 font-outfit text-[18px] leading-[150%] text-center cursor-pointer border-2 border-[#0F3F32] bg-[#0F3F32] text-white p-[7px_7px_7px_15px] rounded-full font-semibold hover:border-2 hover:border-[#0F3F32] hover:bg-[#ffffff] hover:text-[#0F3F32] transition">
                Access Marketplace
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M0 18C0 8.05887 8.05887 0 18 0V0C27.9411 0 36 8.05887 36 18V18C36 27.9411 27.9411 36 18 36V36C8.05887 36 0 27.9411 0 18V18Z" fill="#F7FAF8" />
                  <path d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" stroke="#053F31" strokeWidth="2" />
                </svg>
              </Link>

              <Link href="/services" className="flex items-center justify-center gap-3 md:gap-2 font-outfit text-[18px] leading-[150%] text-center cursor-pointer border-2 border-[#0F3F32] text-[#0F3F32] p-[7px_7px_7px_15px] rounded-full font-semibold hover:bg-[#0F3F32] hover:text-white transition">
                Request Personalized Service
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#F7FAF8" />
                  <path d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" stroke="#053F31" strokeWidth="2" />
                </svg>
              </Link>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}