import React from "react";
import ContactHero from "@/components/ContactHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <main className="px-[20px] md:px-[40px]">
      <ContactHero
        headline={
          <h1 className="font-extralight text-white font-lexend leading-tight">
            <span className="font-medium">How it Works</span>
          </h1>
        }
        description="Discover how our platform connects organic waste producers with valorizers and supports your circular economy goals."
        showSearch={false}
      />
      <section className="mb-[70px] sm:mb-[130px] font-outfit max-w-[1200px] mx-auto text-[#424242]">
        <HowItWorksSection />
      </section>
      <Footer />
    </main>
  );
}
