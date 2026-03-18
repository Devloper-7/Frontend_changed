"use client";

import { useEffect, useRef, useState } from "react";

const IconDropDown = () => (
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6641 0.748047L7.42406 6.74805L0.664063 0.748046" stroke="#053F31" strokeWidth="2" />
    </svg>

);
// 1. Helper Component for standard inputs
const InputItem = ({ label, id, type = "text", placeholder, required }: { label: string; id: string; type?: string; placeholder?: string; required?: boolean }) => (
  <div>
    <label htmlFor={id} className="block text-[18px] font-medium text-[#000000] mb-[8px]">
      {label} {required && <span className="text-[#FF0000]">*</span>}
    </label>
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full  border border-[#053F31]/20 rounded-[5px] px-[30px] py-2.5 focus:outline-none focus:border-gray-300 font-light text-[18px] text-[#424242] placeholder:text-[#999999]"
      />
      {/* Green Line: Added 'z-10' to ensure it stays on top of borders */}
      <div className="absolute bottom-0 left-[30px] h-[2px] w-[60px] bg-[#053F31] z-10"></div>
    </div>
  </div>
);

export default function ContactContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(!!entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mb-[70px] mx-[20px] md:mx-0 relative z-20 ${inView ? "contact-content-in" : ""}`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-content-step { opacity: 0; }
        .contact-content-in .contact-content-step {
          animation: contact-content-zoom-in 0.65s ease-out forwards;
        }
        @keyframes contact-content-zoom-in {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
      <div className="grid grid-cols-1 lg:grid-cols-12 font-outfit selection:bg-[#053F31] selection:text-white contact-content-step">

        {/* === LEFT COLUMN: Info Cards (Unchanged) === */}
        <div className="lg:col-span-4 space-y-4 ">
          <div className="bg-[#DAE6DC]/70 rounded-[20px] border border-[#053F31]/10 p-[20px] mb-3">
            <h4 className="flex items-center gap-2 font-semibold text-[20px] sm:text-[22px] text-[#053F31] border-b border-[#000000]/10 pb-[15px]">
              <img src="/map_logo_green.png" alt="map_logo" /> Madrid (Headquarters)
            </h4>
            <p className="text-[18px] font-light text-[#424242]  leading-relaxed py-[10px]">
              San Telmo 67<br />28016 Madrid, Spain
            </p>
            <div className="flex items-center gap-2 text-[20px] font-medium text-[#053F31]">
              <img src="/message_logo_green.png" alt="email_logo" />info@biomket.com
            </div>
          </div>

          <div className="bg-[#DAE6DC]/70 rounded-[20px] border border-[#053F31]/10 p-[20px] mb-3">
            <h4 className="flex items-center gap-2 font-semibold text-[20px] sm:text-[22px] text-[#053F31] border-b border-[#000000]/10 pb-[15px]">
              <img src="/map_logo_green.png" alt="map_logo" /> Cape Town (International Operations)
            </h4>
            <p className="text-[18px] font-light text-[#424242]  leading-relaxed py-[10px]">
              E7&8 Century Square<br />Heron Crescent, Century City<br />7441 Cape Town, South Africa
            </p>
            <div className="flex items-center gap-2 text-[20px] font-medium text-[#053F31]">
              <img src="/message_logo_green.png" alt="email_logo" />info@biomket.com
            </div>
          </div>

          <div className="bg-[#F7FAF8] border border-[#053F31]/10 rounded-[20px] p-[20px] sm:p-[20px] mb-3">
            <h4  className="flex items-center gap-2 font-semibold text-[20px] sm:text-[22px] text-[#053F31] border-b border-[#000000]/10 pb-[15px]">
              <img src="/clock_logo.png" alt="clock_logo" /> Response Time
            </h4  >
            <p className="text-[18px] font-light text-[#424242] pt-[10px]">
              We respond to all inquiries within 24 business hours.
            </p>
          </div>

          <div className="bg-[#F7FAF8] border border-[#053F31]/10 rounded-[20px] p-[20px] sm:p-[20px] mb-3 md:mb-0">
            <h4  className="flex items-center gap-2 font-semibold text-[20px] sm:text-[22px] text-[#053F31] border-b border-[#000000]/10 pb-[15px]">
              <img src="/support_logo.png" alt="support_logo" /> Marketplace Support
            </h4  >
            <p className="text-[18px] font-light text-[#424242] pt-[10px]">
              If you're already a registered user and need technical support, access your user panel for direct contact.
            </p>
          </div>
        </div>

        {/* === RIGHT COLUMN: Contact Form === */}
        <div className="lg:col-span-8">
          <div className=" bg-[#F7FAF8] border border-[#053F31]/10 rounded-[20px] p-[20px] sm:p-[20px] sm:ms-[12px] min-w-[320px]">
            <h4  className="text-[20px] sm:text-[22px] font-semibold text-[#053F31] mb-[20px] pb-[10px] border-b border-[#000000]/10">Contact Form</h4>

            <form className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 mb-[15px] gap-[21px]">
                <InputItem id="name" label="Name/Company Name" placeholder="Enter Company Name" required />
                <InputItem id="email" label="Email" type="email" placeholder="Enter Your Mail" required />
              </div>

              {/* Row 2: Phone & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 mb-[15px] gap-[21px]">
                <InputItem id="phone" label="Phone" placeholder="Enter Your Number" required />
                <InputItem id="country" label="Country" placeholder="Enter country Name" required />
              </div>

              {/* Row 3: Company */}
              <div className="mb-[15px]">
                <InputItem id="company" label="Company" placeholder="Enter Your Company" />
              </div>

              {/* Row 4: Inquiry Type */}
              <div className="mb-[15px]">
                <label htmlFor="inquiry" className="block text-[18px] font-medium text-gray-900 mb-[9px]">Inquiry Type <span className="text-[#FF0000]">*</span></label>
                <div className="relative">
                  <select id="inquiry" className="w-full  border border-[#053F31]/20 rounded-[5px] px-4 py-2.5 appearance-none focus:outline-none focus:border-gray-300 font-light text-[18px]  text-[#999999] ">
                    <option>Select inquiry type</option>
                    <option className="text-[#FFFFFF] bg-[#053F31] ">Sales</option>
                    <option className="text-[#FFFFFF] bg-[#053F31] ">Support</option>
                    <option className="text-[#FFFFFF] bg-[#053F31] ">Partnership</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"><IconDropDown /></div>

                  {/* Green Line: Added z-10 */}
                  <div className="absolute bottom-0 left-[30px] h-[2px] w-[60px] bg-[#053F31] z-10"></div>
                </div>
              </div>

              {/* Row 5: Message/Details */}
              <div className="mb-0">
                <label htmlFor="message" className="block text-[18px] font-medium text-gray-900 mb-[9px]">Message</label>
                <div className="relative">
                  <textarea id="message" rows={4} placeholder="Enter Your Message" className="w-full h-[100px] border border-[#053F31]/20 rounded-[5px] px-4 py-3 focus:outline-none focus:border-gray-300 font-light text-[18px] text-[#424242] placeholder:text-[#999999] resize-none"></textarea>

                  {/* Green Line: Added z-10 to fix textarea visibility */}
                  <div className="absolute bottom-1.5 left-[30px] h-[2px] w-[60px] bg-[#053F31] z-10"></div>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-center gap-[10px] py-[15px] mb-0">
                <input type="checkbox" id="privacy" className="w-4 h-4 text-[#053F31] rounded border-[#053F31] focus:ring-[#053F31] cursor-pointer" required    />
                <label htmlFor="privacy" className="text-[20px] text-gray-900 p-0 font-medium w-[244px]">I accept the privacy policy <span className="text-[#FF0000]">*</span></label>
              </div>

              {/* Submit Button */}
              <div>
                <button type="submit" className="bg-[#053F31] cursor-pointer   text-[18px] text-white font-semibold py-[7px] ps-[15px] pe-[7px] rounded-full hover:bg-emerald-800 transition flex items-center gap-[10px]">
                  Send inquiry
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#F7FAF8" />
                    <path d="M11.9391 23.2297L23.7061 12.3882M23.7061 12.3882L14.923 11.9958M23.7061 12.3882L23.7317 21.5565" stroke="#053F31" strokeWidth="2" />
                  </svg>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
} 