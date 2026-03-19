"use client";
import React from "react";
import ContactHero from "../../components/ContactHero";
import ContactContent from "../../components/ContactContent";
import BackgroundGradients from "@/components/BackgroundGradients";
import Footer from "@/components/Footer";

const CONTACT_ZIGZAG_COUNT = 1;

const Page = () => {
  return (
    <div
      className="relative w-full min-h-screen"
    // style={{
    //   backgroundColor: "#ffffff",
    //   backgroundImage: "radial-gradient(circle at 0% 0%, rgba(5, 63, 49, 0.06) 0%, transparent 50%)",
    // }}
    >
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-0 lg:px-[60px] rounded-[20px] xl:max-w-[1440px] 2xl:max-w-[1920px]">
        <ContactHero />
        <BackgroundGradients count={CONTACT_ZIGZAG_COUNT} />

        <ContactContent />
        <div className="px-[20px] md:px-0">
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
