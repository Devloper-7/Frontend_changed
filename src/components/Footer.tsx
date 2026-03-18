"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CallToAction from "./CallToAction";
import { ZigZagGradientStrip } from "./BackgroundGradients";

const footerNav = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "Services", href: "/services" },
  // { name: "How it Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];


// const navigation = [
//   { name: 'Marketplace', href: '#', current: true },
//   { name: 'Services', href: '#', current: false },
//   { name: 'How it Works', href: '#', current: false },
//   { name: 'About Us', href: '#', current: false },
//   { name: 'Contact Us', href: '#', current: false },
// ]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer({ showCallToAction = true }: { showCallToAction?: boolean }) {
  const pathname = usePathname();
  return (
    <div className="w-full">
      {showCallToAction && <CallToAction />}
                          {/* relative md:mx-[40px] xl:max-w-[1360px] 2xl:max-w-[1840px] lg:mx-auto pt-100 md:pt-40 pb-10 rounded-[20px] overflow-hidden mt-10 px-[20px] md:px-[60px] */}
      <footer className={`relative md:mx-[40px] xl:max-w-[1360px] 2xl:max-w-[1840px] lg:mx-auto pb-10 rounded-[20px] overflow-hidden mt-10 px-[20px] md:px-[60px] ${showCallToAction ? "pt-100 md:pt-40" : "pt-[30px]"}`}>

        <div className="absolute inset-0 z-0">
          <img
            src="/footer_bg.png"
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
          {/* Optional Overlay to ensure text readability if image is bright */}
          <div className="absolute inset-0  mix-blend-multiply"></div>
        </div>

        {/* --- Content Container --- */}
        <div className="relative z-10 xl:max-w-[1240px] 2xl:max-w-[1720px] mx-auto text-white">

          {/* TOP ROW: Logo & Nav */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-7.5 gap-8">

            {/* Logo */}
            <div className="shrink-0">

              <img src="/Logo_white.png" alt="biomket_logo" />
            </div >

            {/* Navigation Links */}
            {/* {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'text-white font-bold'
                    : 'text-gray-300 hover:text-white',
                  ' transition-colors font-outfit flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base font-font-extralight'
                )}
              >
                {item.name}
              </Link>
            ))} */}
            <nav className="flex flex-col lg:flex-row justify-center items-center gap-[10px] md:gap-8 text-[18px] text-[#FFFFFF] font-outfit">
              {footerNav.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={classNames(
                      "text-[#FFFFFF] font-outfit text-[18px] leading-[150%] hover:underline",
                      isActive ? "font-medium!" : "font-extralight",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* MIDDLE ROW: Contact Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-white/10 text-gray-200 font-outfit">

            {/* 1. Madrid HQ */}
            <div className="py-[20px] md:py-8 flex font-outfit flex-col items-center lg:flex-row  gap-5 md:px-4">
              {/* Icon Box - Added styling to match the square container in original */}
              <div className="shrink-0 h-12 w-12 rounded-lg  flex items-center justify-center">
                <img src="/map_logo.png" alt="Location" className="" />
              </div>

              <div className="text-center lg:text-left ">
                <span className="font-extralight text-white tracking-widest mb-[10px]" >Madrid HQ</span>
                <p className="font-medium text-[#DAE6DC]">
                  San Telmo 67<br className="hidden md:block" />
                  28016 Madrid, Spain
                </p>
              </div>
            </div>

            {/* 2. Email Address (Center) */}
            {/* Added lg:border-x to create the vertical dividers */}
            <div className="py-[20px] md:py-8 flex flex-col items-center lg:flex-row lg:justify-center gap-5 md:px-4 border-b border-t lg:border-x border-white/10">
              <div className="shrink-0 h-12 w-12 rounded-lg bg items-center justify-center">
                <img src="/message_logo.png" alt="Email" className="" />
              </div>

              <div className="flex flex-col items-center text-center lg:text-left">
                <span className="font-extralight text-white tracking-widest mb-[10px]" >E-Mail Address</span>
                <a href="mailto:info@biomket.com" className="font-medium text-[#DAE6DC] cursor-pointer hover:underline">
                  info@biomket.com
                </a>
              </div>
            </div>

            {/* 3. Cape Town */}
            <div className="py-[20px] md:py-8 flex flex-col items-center lg:flex-row lg:justify-center gap-5 md:px-4">
              <div className="shrink-0 h-12 w-12 rounded-lg  flex items-center justify-center">
                <img src="/map_logo.png" alt="Location" className="" />
              </div>

              <div className="text-center lg:text-left">
                <span className="font-extralight text-white tracking-widest mb-[10px]">Cape Town</span  >
                <p className="font-medium text-[#DAE6DC]">
                  E7&8 Century Square<br />
                  Heron Cres, Century City<br />
                  7441 Cape Town
                </p>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: Copyright & Legal */}
          <div className="pt-7.5 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-white font-outfit">

            {/* Copyright */}
            <p className="text-white text-center font-extralight font-outfit lg:text-left">© 2023 - 2026 Biomket.</p>

            {/* Legal Links */}
            <div className="flex text-[18px] text-center font-extralight font-outfit flex-wrap justify-center gap-x-3 gap-y-2">
              <Link href="/legal-notice" className="hover:text-white hover:underline whitespace-nowrap">Legal Notice</Link>
              <span>|</span>
              <Link href="/privacy-policy" className="hover:text-white hover:underline whitespace-nowrap">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions" className="hover:text-white hover:underline whitespace-nowrap">Terms and Conditions</Link>
              <span>|</span>
              <Link href="/cookies-policy" className="hover:text-white hover:underline whitespace-nowrap">Cookies Policy</Link>
            </div>

            {/* Social Icons PNGs */}
            <div className="flex gap-6 items-center">
              <Link href="#" className="hover:opacity-80 transition">

                <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.55277 22V11.677H0V7.96017H2.55277V4.78555C2.55277 2.2909 4.0607 0 7.53529 0C8.9421 0 9.98237 0.14421 9.98237 0.14421L9.9004 3.61506C9.9004 3.61506 8.83949 3.60402 7.68178 3.60402C6.42879 3.60402 6.22804 4.22145 6.22804 5.24623V7.96017H10L9.83588 11.677H6.22804V22H2.55277Z" fill="white" />
                </svg>

              </Link>

              <svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M0.5 0V20" stroke="white" strokeMiterlimit="3.99933" strokeDasharray="3 0" />
              </svg>


              <Link href="#" className="hover:opacity-80 transition">

                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z" fill="white" />
                </svg>

              </Link>

              <svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M0.5 0V20" stroke="white" strokeMiterlimit="3.99933" strokeDasharray="3 0" />
              </svg>


              <Link href="#" className="hover:opacity-80 transition">

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9027 8.46863L19.3482 0H17.5838L11.1189 7.3532L5.95547 0H0L7.8082 11.1193L0 20H1.76443L8.59152 12.2348L14.0445 20H20L11.9023 8.46863H11.9027ZM9.48608 11.2173L8.69495 10.1101L2.40018 1.29967H5.11025L10.1902 8.40994L10.9813 9.51718L17.5847 18.7594H14.8746L9.48608 11.2177V11.2173Z" fill="white" />
                </svg>

              </Link>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}