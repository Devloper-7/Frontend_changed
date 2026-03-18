"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const DashboardPage = () => {
    return (
        <>
            <div className="min-h-screen flex flex-row ">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <div className="flex-1 transition-all duration-300 flex items-center justify-center  bg-[#053F31]/20 rounded-[20px]   mt-[200px] h-[375px] mx-auto max-w-[1000px]">
                    <section className="mx-[20px] md:mx-[40px] pb-32 md:pb-20 text-center">
                        <h1 className="text-4xl md:text-5xl font-lexend font-light text-[#053F31]">
                            Welcome to <span className="font-medium">Dashboard</span>
                        </h1>
                    </section>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default DashboardPage;