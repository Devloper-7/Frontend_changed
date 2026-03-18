'use client';

import React from 'react';
import WasteManagement from '../../components/WasteManagement'; // Adjust path as needed
import ContactHero from '../../components/ContactHero'; // Adjust path as needed
import ProvenProcess from '@/components/ProvenProcess';
import IndustrySolutions from '@/components/IndustrySolutions';
import QuoteForm from '@/components/QuoteForm';
import WhyChooseUs from '@/components/WhyChooseUs';
import Certifications from '@/components/Certifications';
import BackgroundGradients from '@/components/BackgroundGradients';
import Footer from '@/components/Footer';

const SERVICES_ZIGZAG_COUNT = 9;

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-[20px] md:px-[40px] xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto font-outfit">

      <ContactHero
        // 1. HEADLINE
        headline={
          <h1 className="font-lexend font-extralight text-white leading-tight">
            We Optimize <span className="font-medium">Your Organic <br /> Waste Management</span>
          </h1>
        }
        // 2. DESCRIPTION
        description="Transform your waste challenges into opportunities. Our expert team provides comprehensive waste management solutions tailored to your enterprise's specific needs."
        // 3. NO SEARCH BAR
        showSearch={false}
      >
        <div className="flex flex-col sm:flex-row gap-4 md:mt-4">

          <button className="group flex items-center justify-center gap-2 mx-auto bg-[#DAE6DC] text-[#053F31] p-[7px_7px_7px_15px] rounded-full font-semibold cursor-pointer border-2 border-[#DAE6DC] hover:bg-[#DAE6DC]/10 hover:text-white hover:backdrop-blur-sm transition">
            Free Consultation

            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-[#053F31] group-hover:fill-[#F7FAF8] transition-colors" d="M0 18C0 8.05887 8.05887 0 18 0V0C27.9411 0 36 8.05887 36 18V18C36 27.9411 27.9411 36 18 36V36C8.05887 36 0 27.9411 0 18V18Z" />
              <path className="stroke-[#DAE6DC] group-hover:stroke-[#053F31] transition-colors" d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" strokeWidth="2" />
            </svg>

          </button>

          <button className="group flex items-center justify-center gap-2 border-2 text-[#DAE6DC] border-[#DAE6DC] bg-white/10 backdrop-blur-sm p-[7px_7px_7px_15px] rounded-full font-semibold cursor-pointer hover:bg-[#DAE6DC] hover:text-[#053F31] transition">
            Download Brochure

            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-[#F7FAF8] group-hover:fill-[#053F31] transition-colors" d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" />
              <path className="stroke-[#053F31] group-hover:stroke-[#DAE6DC] transition-colors" d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" strokeWidth="2" />
            </svg>

          </button>
        </div>
      </ContactHero>
      <BackgroundGradients count={SERVICES_ZIGZAG_COUNT} />
      <WasteManagement />
      <div className='px-[20px] md:px-0'>

      <ProvenProcess />
      </div>
      <IndustrySolutions />
      <QuoteForm />
      <WhyChooseUs />
      <Certifications />
      <div className='px-[20px] md:px-0'>

      <Footer />
      </div>
    </main>
  );
}