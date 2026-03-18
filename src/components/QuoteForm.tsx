import React from 'react';

// --- 1. SVG ICONS AS FUNCTIONS ---

const IconChevronDown = () => (

    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>

);

const IconArrowRight = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const IconCheck = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// --- 2. HELPER COMPONENTS ---

// This wrapper adds the "White Line" to the bottom of any input
const FieldWrapper = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className="flex flex-col gap-[10px] max-md:gap-[6px] font-outfit mb-0">
        <label className="text-white font-medium max-md:text-[15px]">
            {label}
        </label>
        <div className="relative">
            {children}
            {/* --- THE WHITE LINE --- */}
            {/* Positioned at bottom, left-aligned, z-10 to sit on top of the border */}
            {/* <div className="absolute bottom-0 left-[30px] h-[2px] min-w-[50px] bg-white z-10 rounded-t-sm"></div> */}
        </div>
    </div>
);

// --- 3. MAIN COMPONENT ---

const QuoteForm = () => {
    return (
        <section className='mx-auto max-w-[320px] xl:max-w-[1440px] 2xl:max-w-[1920px]' >
            <div className="w-full bg-biomket-gradient bg-[#053F31] rounded-[20px] px-[20px] py-[50px] md:px-[150px] mx-auto shadow-2xl">

                {/* Header */}
                <div className="text-center mb-[50px] max-md:mb-[30px]">
                    <h2 className="font-lexend text-white font-extralight mb-[20px] max-md:mb-[15px] leading-tight max-md:text-[38px] max-md:leading-[1.2]">
                        Request a <br className="md:hidden" /> <span className="font-medium">Personalized <br className="md:hidden" /> Quote</span>
                    </h2>
                    <p className="font-outfit font-light text-white tracking-wide max-md:text-[16px]">
                        Specialized services for different sectors
                    </p>
                </div>

                {/* Form */}
                <form className="max-w-5xl 2xl:max-w-[1540px] mx-auto space-y-[30px]">

                    {/* Input Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] font">

                        <FieldWrapper label="Company Name *">
                            <input
                                type="text"
                                placeholder="Your Company Name"
                                className="w-full min-w-[280px] 2xl:w-[755px] border border-[#FFFFFF]/20 rounded-[5px] px-[30px] h-[60px] text-white  font-light focus:outline-none focus:border-white/50 transition-colors"
                            />
                            <div className="absolute bottom-0 left-[30px] h-[2px] min-w-[50px] bg-white z-10 rounded-t-sm"></div>

                        </FieldWrapper>

                        <FieldWrapper label="Industry Type">
                            <div className="relative">
                                <select
                                    defaultValue=""
                                    className="w-full min-w-[280px] 2xl:w-[755px] border border-[#FFFFFF]/20 rounded-[5px] px-[30px] h-[60px] text-white/70 font-light focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
                                >
                                    <option value="" disabled className="text-[#000000]">Select Your Industry</option>
                                    <option value="agrifood" className="text-[#000000]">Agrifood Industry</option>
                                    <option value="farms" className="text-[#000000]">Farms & Livestock</option>
                                    <option value="processing" className="text-[#000000]">Processing Plants</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                                    <IconChevronDown />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-[30px] h-[2px] min-w-[50px] bg-white z-10 rounded-t-sm"></div>

                        </FieldWrapper>

                        <FieldWrapper label="Contact Name">
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full min-w-[280px] 2xl:w-[755px] border border-[#FFFFFF]/20 rounded-[5px] px-[30px] h-[60px] text-white  font-light focus:outline-none focus:border-white/50 transition-colors"
                            />
                            <div className="absolute bottom-0 left-[30px] h-[2px] min-w-[50px] bg-white z-10 rounded-t-sm"></div>

                        </FieldWrapper>

                        <FieldWrapper label="Phone Number">
                            <input
                                type="text"
                                placeholder="+xxx xxx xxx"
                                className="w-full min-w-[280px] 2xl:w-[755px] border border-[#FFFFFF]/20 rounded-[5px] px-[30px] h-[60px] text-white  font-light focus:outline-none focus:border-white/50 transition-colors"
                            />
                            <div className="absolute bottom-0 left-[30px] h-[2px] min-w-[50px] bg-white z-10 rounded-t-sm"></div>

                        </FieldWrapper>

                        <FieldWrapper label="Email Address">
                            <input
                                type="email"
                                placeholder="Your Mail Id"
                                className="w-full min-w-[280px] 2xl:w-[755px] border border-[#FFFFFF]/20 rounded-[5px] px-[30px] h-[60px] text-white  font-light focus:outline-none focus:border-white/50 transition-colors"
                            />
                            <div className="absolute bottom-0 left-[30px] h-[2px] min-w-[50px] bg-white z-10 rounded-t-sm"></div>

                        </FieldWrapper>

                        <FieldWrapper label="Approximate Waste Volume">
                            <div className="relative">
                                <select
                                    defaultValue=""
                                    className="w-full min-w-[280px] 2xl:w-[755px] border border-[#FFFFFF]/20 rounded-[5px] px-[30px] h-[60px] text-white/70 font-light focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
                                >
                                    <option value="" className="text-[#000000]">Select Volume Range</option>
                                    <option value="small" className="text-[#000000]">0 - 10 Tons</option>
                                    <option value="medium" className="text-[#000000]">10 - 50 Tons</option>
                                    <option value="large" className="text-[#000000]">50+ Tons</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                                    <IconChevronDown />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-[30px] h-[2px] min-w-[50px] bg-white z-10 rounded-t-sm"></div>

                        </FieldWrapper>

                    </div>

                    {/* Textarea (Full Width) */}
                    <FieldWrapper label="Describe Your Needs *">
                        <textarea
                            placeholder="Tell us about your current waste management challenges, goals, and what you're looking for..."
                            className="w-full py-[15px] border border-[#FFFFFF]/20 rounded-[5px] px-[30px] h-[140px] text-white  font-light focus:outline-none focus:border-white/50 transition-colors resize-none 2xl:w-[1540px]"
                        />
                        <div className="absolute bottom-2 left-[30px] h-[2px] min-w-[50px] bg-white z-10 rounded-t-sm"></div>

                    </FieldWrapper>

                    {/* Checkbox & Submit */}
                    <div className="flex flex-col mt-[20px]">

                        {/* Checkbox */}
                        <label className="flex items-center max-md:items-start gap-3 cursor-pointer group ">
                            <div className="relative shrink-0 max-md:mt-1">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-5 h-5 border border-[#FFFFFF]/70 rounded bg-transparent peer-checked:bg-white peer-checked:border-white transition-all"></div>

                                {/* SVG Icon Check */}
                                <div className="absolute top-1 left-1 text-[#053F31] hidden peer-checked:block pointer-events-none">
                                    <IconCheck />
                                </div>
                            </div>
                            <span className="text-white text-[20px] max-md:text-[15px] font-light select-none">
                                I agree to receive communications from Biomket and accept the <a href="/privacy-policy" className="underline decoration-white/50 hover:text-white transition-colors">Privacy Policy</a>
                            </span>
                        </label>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center gap-[30px] max-md:gap-[20px] mt-[50px] max-md:mt-[30px]">
                            <button
                                type="button"
                                className="group flex items-center cursor-pointer gap-2 bg-[#DAE6DC] text-[#053F31] font-bold py-2.5 pl-6 pr-2 rounded-full hover:bg-white transition-all duration-300"
                            >
                                <span>Submit</span>
                                <div className="w-10 h-10 bg-[#053F31] rounded-full flex items-center justify-center text-white transition-transform ">
                                    <IconArrowRight />
                                </div>
                            </button>

                            <p className="text-white text-[20px] max-md:text-[14px] max-md:px-2 font-light text-center ">
                                By submitting this form, you'll receive a response within 24 business hours
                            </p>
                        </div>

                    </div>

                </form>
            </div>
        </section>
    );
};

export default QuoteForm;