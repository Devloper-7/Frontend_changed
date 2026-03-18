import React from 'react';
import ContactHero from '@/components/ContactHero';
import WhoWeAre from '@/components/WhoWeAre';
import SectorServe from '@/components/SectorServe';
import ValueProposition from '@/components/ValueProposition';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';


export default function AboutPage() {
  return (
    <main className="px-[20px] md:px-[60px]">
      <ContactHero
        headline={
          <h1 className="font-extralight text-white font-lexend leading-tight">
            Transforming Organic Waste <br />
            <span className="font-medium">into Business Opportunities</span>
          </h1>
        }
        description="Europe's first specialized platform for organic waste and by-product valorization, combining marketplace technology with comprehensive management services."
        showSearch={false}
      />
      <WhoWeAre />
      <SectorServe />
      <ValueProposition />
      <div className="-mx-[20px] md:mx-0">
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
}