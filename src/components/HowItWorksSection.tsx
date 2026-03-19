"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Icons UNCHANGED ─────────────────────────────────────────────────────────
function IconRegister() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.0625 26.3891V6.25C39.0625 5.0068 38.5686 3.81451 37.6896 2.93544C36.8105 2.05636 35.6182 1.5625 34.375 1.5625H9.375C8.1318 1.5625 6.93951 2.05636 6.06044 2.93544C5.18136 3.81451 4.6875 5.0068 4.6875 6.25V40.625C4.6875 41.8682 5.18136 43.0605 6.06044 43.9396C6.93951 44.8186 8.1318 45.3125 9.375 45.3125H25.6484C26.8692 46.4474 28.3184 47.3083 29.8989 47.8376C31.4795 48.3669 33.1548 48.5524 34.8129 48.3817C36.4709 48.211 38.0733 47.688 39.5128 46.8477C40.9523 46.0074 42.1957 44.8692 43.1596 43.5094C44.1235 42.1496 44.7858 40.5995 45.102 38.963C45.4182 37.3264 45.3811 35.6412 44.9932 34.0202C44.6053 32.3992 43.8754 30.8797 42.8526 29.5636C41.8298 28.2475 40.5376 27.1652 39.0625 26.3891ZM14.0625 12.5H29.6875C30.1019 12.5 30.4993 12.6646 30.7924 12.9576C31.0854 13.2507 31.25 13.6481 31.25 14.0625C31.25 14.4769 31.0854 14.8743 30.7924 15.1674C30.4993 15.4604 30.1019 15.625 29.6875 15.625H14.0625C13.6481 15.625 13.2507 15.4604 12.9576 15.1674C12.6646 14.8743 12.5 14.4769 12.5 14.0625C12.5 13.6481 12.6646 13.2507 12.9576 12.9576C13.2507 12.6646 13.6481 12.5 14.0625 12.5ZM14.0625 20.3125H29.6875C30.1019 20.3125 30.4993 20.4771 30.7924 20.7701C31.0854 21.0632 31.25 21.4606 31.25 21.875C31.25 22.2894 31.0854 22.6868 30.7924 22.9799C30.4993 23.2729 30.1019 23.4375 29.6875 23.4375H14.0625C13.6481 23.4375 13.2507 23.2729 12.9576 22.9799C12.6646 22.6868 12.5 22.2894 12.5 21.875C12.5 21.4606 12.6646 21.0632 12.9576 20.7701C13.2507 20.4771 13.6481 20.3125 14.0625 20.3125ZM17.1875 31.25H14.0625C13.6481 31.25 13.2507 31.0854 12.9576 30.7924C12.6646 30.4993 12.5 30.1019 12.5 29.6875C12.5 29.2731 12.6646 28.8757 12.9576 28.5826C13.2507 28.2896 13.6481 28.125 14.0625 28.125H17.1875C17.6019 28.125 17.9993 28.2896 18.2924 28.5826C18.5854 28.8757 18.75 29.2731 18.75 29.6875C18.75 30.1019 18.5854 30.4993 18.2924 30.7924C17.9993 31.0854 17.6019 31.25 17.1875 31.25ZM33.5938 45.3125C32.3223 45.3125 31.0667 45.0305 29.9174 44.4866C28.7681 43.9427 27.7539 43.1506 26.9477 42.1673C26.1416 41.1841 25.5637 40.0342 25.2557 38.8006C24.9477 37.567 24.9172 36.2805 25.1665 35.0337C25.4158 33.7869 25.9387 32.611 26.6974 31.5907C27.4561 30.5704 28.4317 29.7312 29.554 29.1335C30.6762 28.5359 31.9171 28.1947 33.1872 28.1346C34.4572 28.0745 35.7248 28.297 36.8984 28.7859C38.7323 29.55 40.2448 30.9258 41.1787 32.6793C42.1125 34.4328 42.4099 36.4557 42.0204 38.4038C41.6308 40.3519 40.5784 42.1049 39.042 43.3645C37.5057 44.624 35.5804 45.3124 33.5938 45.3125Z" fill="#053F31"/>
      <path d="M36.2503 33.4375L32.6441 38.2469L30.7925 36.3953C30.4978 36.1107 30.1031 35.9532 29.6935 35.9568C29.2838 35.9603 28.8919 36.1247 28.6022 36.4144C28.3125 36.7041 28.1482 37.0959 28.1446 37.5056C28.141 37.9153 28.2985 38.31 28.5831 38.6047L31.7081 41.7297C31.8677 41.8856 32.0584 42.006 32.2678 42.0828C32.4772 42.1596 32.7006 42.1911 32.9231 42.1753C33.1456 42.1595 33.3622 42.0968 33.5587 41.9911C33.7551 41.8855 33.927 41.7394 34.0628 41.5625L38.7503 35.3125C38.999 34.981 39.1057 34.5643 39.0471 34.154C38.9885 33.7438 38.7694 33.3736 38.4378 33.125C38.1063 32.8764 37.6896 32.7696 37.2794 32.8282C36.8691 32.8868 36.499 33.106 36.2503 33.4375Z" fill="#053F31"/>
    </svg>
  );
}

function IconListProducts() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.1868 17.8942L23.6305 12.1522L3.09494 6.40234L0.349422 10.9943C-0.345539 12.1507 0.0284133 13.6515 1.1848 14.3465C1.37216 14.459 1.57376 14.546 1.78423 14.605L17.4351 18.9898C17.9504 19.1339 18.4988 19.1047 18.996 18.9068C19.4931 18.7088 19.9115 18.3531 20.1868 17.8942Z" fill="#053F31"/>
      <path d="M4.22028 32.6787L11.606 34.6957V25.8931C11.606 23.9207 13.205 22.3217 15.1774 22.3217H24.1059V14.8333L21.7184 18.8137C20.7372 20.4449 18.7878 21.2205 16.9541 20.7092L3.57031 16.9645V31.8216C3.57073 32.0157 3.63441 32.2044 3.7517 32.359C3.86898 32.5137 4.03349 32.6259 4.22028 32.6787ZM24.9988 10.6815L44.0344 5.35207L25.4773 0.0663113C25.1634 -0.0221038 24.8313 -0.0221038 24.5175 0.0663113L5.96312 5.35207L24.9988 10.6815ZM45.7807 32.6787C45.9669 32.6253 46.1306 32.5127 46.2472 32.3581C46.3638 32.2035 46.4269 32.0152 46.4271 31.8216V16.9645L33.0432 20.7144C32.674 20.8185 32.2921 20.8711 31.9084 20.8707C31.1777 20.8705 30.4594 20.6813 29.8234 20.3215C29.1875 19.9616 28.6554 19.4434 28.279 18.8171L25.8915 14.8331V22.3215H34.82C36.7924 22.3215 38.3914 23.9204 38.3914 25.8928V34.6955L45.7807 32.6787Z" fill="#053F31"/>
      <path d="M29.8094 17.8943C30.0849 18.3529 30.5034 18.7084 31.0004 18.9063C31.4975 19.1041 32.0458 19.1335 32.5611 18.9898L48.212 14.605C49.511 14.2406 50.2686 12.8921 49.9042 11.5931C49.8454 11.3835 49.7589 11.1827 49.6469 10.9961L46.9032 6.40234L26.3675 12.1524L29.8094 17.8943ZM36.6048 48.2138V25.8925C36.6048 24.9063 35.8053 24.1068 34.8191 24.1068H15.1764C14.1901 24.1068 13.3906 24.9063 13.3906 25.8925V48.2138C13.3906 49.2001 14.1901 49.9995 15.1764 49.9995H34.8191C35.8053 49.9995 36.6048 49.2001 36.6048 48.2138Z" fill="#053F31"/>
    </svg>
  );
}

function IconConnect() {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1094_56061)">
        <path d="M18.6552 34.2978L13.3526 39.6003C11.1543 41.7987 7.59428 41.7987 5.39779 39.6008C3.20086 37.4038 3.20086 33.8435 5.39735 31.647L16.0043 21.04C18.2008 18.8434 21.7612 18.8434 23.9577 21.04C24.6899 21.7722 25.8771 21.7722 26.6093 21.04C27.3416 20.3078 27.3416 19.1206 26.6093 18.3883C22.9483 14.7273 17.0137 14.7273 13.3526 18.3883L2.74576 28.9952C-0.915254 32.6562 -0.915254 38.5909 2.74576 42.2519C6.40634 45.9149 12.3415 45.9149 16.0044 42.2519L21.307 36.9494C22.0392 36.2171 22.0392 35.0299 21.307 34.2977C20.5747 33.5655 19.3874 33.5656 18.6552 34.2978Z" fill="#053F31"/>
        <path d="M42.2534 2.74576C38.5924 -0.915254 32.6558 -0.915254 28.9948 2.74576L22.6329 9.10767C21.9007 9.8399 21.9007 11.0271 22.6329 11.7594C23.3651 12.4916 24.5523 12.4916 25.2846 11.7594L31.6465 5.39744C33.843 3.20086 37.4052 3.20086 39.6018 5.39744C41.7983 7.59393 41.7983 11.1543 39.6018 13.3508L27.9354 25.0172C25.7389 27.2138 22.1786 27.2138 19.9821 25.0172C19.2499 24.285 18.0626 24.285 17.3304 25.0172C16.5982 25.7494 16.5982 26.9367 17.3304 27.6689C20.9914 31.3299 26.9261 31.3299 30.5871 27.6689L42.2534 16.0026C45.9145 12.3415 45.9145 6.40678 42.2534 2.74576Z" fill="#053F31"/>
      </g>
      <defs>
        <clipPath id="clip0_1094_56061"><rect width="45" height="45" fill="white"/></clipPath>
      </defs>
    </svg>
  );
}

function IconArrowCircle() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="fill-[#053F31] group-hover:fill-[#F7FAF8] transition-colors" d="M0 18C0 8.05887 8.05887 0 18 0V0C27.9411 0 36 8.05887 36 18V18C36 27.9411 27.9411 36 18 36V36C8.05887 36 0 27.9411 0 18V18Z"/>
      <path className="stroke-[#DAE6DC] group-hover:stroke-[#053F31] transition-colors" d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" strokeWidth="2"/>
    </svg>
  );
}

function IconCertifiedProducers() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.23047 9.81738L13.7337 10.2989C14.5396 10.3694 15.2501 9.77324 15.3206 8.96738C15.3911 8.16143 14.7949 7.45098 13.9891 7.38047L11.9433 7.20146C15.7066 4.42842 20.238 2.92969 25 2.92969C28.9534 2.92969 32.8357 3.9915 36.2272 6.0002C36.9233 6.4125 37.8218 6.18242 38.2341 5.48633C38.6464 4.79023 38.4163 3.8918 37.7202 3.47949H37.7201C33.8771 1.20322 29.4784 0 25 0C19.5729 0 14.4098 1.71768 10.1314 4.8958L10.2988 2.98262C10.3693 2.17666 9.77314 1.46621 8.96719 1.3957C8.16123 1.3252 7.45078 1.92139 7.38027 2.72725L6.89883 8.23047C6.82832 9.03643 7.42451 9.74687 8.23047 9.81738Z" fill="#053F31"/>
      <path d="M8.96729 34.6794C8.16133 34.6089 7.45088 35.2051 7.38037 36.0109L7.20137 38.0566C4.42842 34.2933 2.92969 29.762 2.92969 25C2.92969 21.0466 3.99141 17.1642 6.0001 13.7727C6.4124 13.0766 6.18232 12.178 5.48623 11.7658C4.79014 11.3536 3.8916 11.5836 3.47939 12.2797C1.20322 16.1229 0 20.5216 0 25C0 30.4271 1.71768 35.5902 4.8958 39.8685L2.98252 39.7011C2.17656 39.6306 1.46611 40.2268 1.39561 41.0327C1.3251 41.8387 1.92129 42.5491 2.72725 42.6196L8.23057 43.1011C9.03652 43.1716 9.74697 42.5754 9.81748 41.7694L10.2989 36.2662C10.3693 35.4604 9.77314 34.7499 8.96729 34.6794Z" fill="#053F31"/>
      <path d="M29.3945 17.818C29.3945 18.353 29.6417 18.8417 30.0726 19.1588C30.5034 19.4759 31.0435 19.5666 31.5543 19.4075L38.0729 17.3778C37.1521 15.8049 35.9561 14.4121 34.5507 13.2661L30.0892 16.4651C29.6542 16.7769 29.3945 17.2827 29.3945 17.818Z" fill="#053F31"/>
      <path d="M31.3477 29.8828C31.3477 32.306 29.3763 34.2773 26.9531 34.2773C26.6839 34.2773 26.4648 34.4964 26.4648 34.7656V40.0656C32.98 39.437 38.301 34.6617 39.7476 28.418H32.8125C32.0048 28.418 31.3477 29.0751 31.3477 29.8828Z" fill="#053F31"/>
      <path d="M40.1367 25C40.1367 23.2714 39.8446 21.61 39.3087 20.0613L32.4253 22.2047C31.9695 22.3466 31.5052 22.4165 31.0454 22.4165C30.0831 22.4165 29.1407 22.1105 28.3359 21.5183C27.1469 20.6432 26.4648 19.2944 26.4648 17.8179C26.4648 16.3406 27.1815 14.9448 28.382 14.084L31.9257 11.5431C29.8491 10.4701 27.4942 9.86328 25 9.86328C20.1467 9.86328 15.82 12.1598 13.0481 15.7227H18.1641C20.0487 15.7227 21.582 17.256 21.582 19.1406V20.1172C21.582 20.3864 21.8011 20.6055 22.0703 20.6055C24.4935 20.6055 26.4648 22.5769 26.4648 25C26.4648 27.4231 24.4935 29.3945 22.0703 29.3945C21.8011 29.3945 21.582 29.6136 21.582 29.8828C21.582 31.7675 20.0487 33.3008 18.1641 33.3008H12.3488C14.8041 37.0303 18.8621 39.6147 23.5352 40.0656V34.7656C23.5352 32.881 25.0685 31.3477 26.9531 31.3477C27.7608 31.3477 28.418 30.6905 28.418 29.8828C28.418 27.4597 30.3894 25.4883 32.8125 25.4883H40.128C40.1332 25.3261 40.1367 25.1635 40.1367 25Z" fill="#053F31"/>
      <path d="M18.6523 29.8828C18.6523 27.9981 20.1856 26.4648 22.0703 26.4648C22.878 26.4648 23.5352 25.8077 23.5352 25C23.5352 24.1923 22.878 23.5352 22.0703 23.5352C20.1856 23.5352 18.6523 22.0019 18.6523 20.1172V19.1406C18.6523 18.8714 18.4333 18.6523 18.1641 18.6523H11.2605C10.3646 20.584 9.86328 22.7344 9.86328 25C9.86328 26.8906 10.2127 28.701 10.8487 30.3711H18.1641C18.4333 30.3711 18.6523 30.1521 18.6523 29.8828Z" fill="#053F31"/>
    </svg>
  );
}

// ─── Data UNCHANGED ───────────────────────────────────────────────────────────
const steps = [
  { id: "1", number: "01", icon: IconRegister,           title: "Register",            description: "Create your vendor or buyer account" },
  { id: "2", number: "02", icon: IconListProducts,       title: "List Products",       description: "Upload waste with LER codes & certifications" },
  { id: "3", number: "03", icon: IconConnect,            title: "Connect",             description: "Browse marketplace or get matched" },
  { id: "4", number: "04", icon: IconCertifiedProducers, title: "Certified Producers", description: "Create your vendor or buyer account" },
];

// ─── Layout constants UNCHANGED ───────────────────────────────────────────────
const DESKTOP_CARD_HEIGHT  = 207;
const DESKTOP_CARD_GAP     = 8;
const DESKTOP_STACK_OFFSET = 36;

export default function HowItWorksSection() {
  const [currentIndex, setCurrentIndex] = useState(steps.length - 1);

  return (
    <section className="w-full mt-[50px] xl:mt-[70px]">
      <div className="w-full xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto">
        <div className="relative mx-[20px] md:mx-auto xl:max-w-[1440px] 2xl:max-w-[1740px] overflow-hidden rounded-[16px]">

          <Image
            src="/how-it-work_bg.png"
            alt="How it works background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-90" aria-hidden />

          <div className="relative z-10 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between lg:gap-[24px] px-[22px] py-[22px] md:px-[46px] md:py-[30px]">

            {/* Left Column */}
            <div className="relative w-full">

              {/* Desktop cards — 2 columns, 1 box per column */}
              <div className="hidden w-full grid-cols-2 gap-[8px] md:grid">
                {steps.map((stepItem) => {
                  const Icon = stepItem.icon;
                  return (
                    <div
                      key={stepItem.id}
                      className="overflow-hidden rounded-[20px] border border-[#E8ECE8] bg-[#F5F6F4] p-[20px] text-[#053F31] shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                      style={{ height: DESKTOP_CARD_HEIGHT }}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center">
                            <Icon />
                          </div>
                          <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#DDE5DD] text-[16px] font-semibold text-[#7A9D90]">
                            {stepItem.number}
                          </span>
                        </div>
                        <div className="pb-[2px]">
                          <p className="text-[15px] font-semibold leading-[1.2] text-[#111111]">{stepItem.title}</p>
                          <p className="mt-[10px] text-[14px] font-light leading-[1.45] text-[#7B7B7B]">{stepItem.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

                  {/* Mobile cards */}
                  <div className="font-outfit w-full pt-[10px] pb-0 md:hidden">
                    <div className="relative" style={{ minHeight: 10 + currentIndex * 20 + 234 }}>
                      {steps.slice(0, currentIndex + 1).map((stepItem, idx) => {
                        const Icon = stepItem.icon;
                        return (
                          <div
                            key={stepItem.id}
                            className="absolute left-0 w-full rounded-2xl border border-[#E5E5E5] bg-[#F8F8F8] p-5 shadow-md h-[234px] transition-all duration-[1000ms] ease-out"
                            style={{ top: 10 + idx * 30, zIndex: currentIndex + idx }}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center"><Icon /></div>
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1B5140] text-sm font-semibold text-[#1B5140]" style={{ background: "#D0E6DA" }}>
                                {stepItem.number}
                              </span>
                            </div>
                            <p className="mt-[50px] text-[20px] font-semibold text-[#333333] md:text-[50px]">{stepItem.title}</p>
                            <span className="mt-[10px] text-[18px] font-light leading-relaxed text-[#666666]">{stepItem.description}</span>
                          </div>
                        );
                      })}
                    </div>
                    {steps.slice(currentIndex + 1).length > 0 && (
                      <div className="flex flex-col">
                        {steps.slice(currentIndex + 1).map((stepItem) => {
                          const Icon = stepItem.icon;
                          return (
                            <div key={stepItem.id} className="relative font-outfit rounded-2xl w-full h-[234px] bg-[#F8F8F8] p-5 shadow-md mt-[10px] mb-[10px]">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center"><Icon /></div>
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1B5140] text-sm font-semibold text-[#1B5140]" style={{ background: "#D0E6DA" }}>
                                  {stepItem.number}
                                </span>
                              </div>
                              <p className="mt-[50px] text-[20px] font-semibold text-[#333333] md:text-[50px]">{stepItem.title}</p>
                              <span className="mt-[10px] text-[18px] font-light leading-relaxed text-[#666666]">{stepItem.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                </div>

                {/* Right Column */}
                <div className="mb-[24px] flex w-full flex-col items-center text-center lg:mb-0 lg:max-w-[330px] lg:items-end lg:pt-[18px] lg:pr-[10px] lg:text-right">
                  <h2 className="text-[38px] font-extralight leading-[1.1] text-white md:text-[52px]">
                    How it <span className="font-medium">Works</span>
                  </h2>
                  <p className="mt-[22px] max-w-[330px] font-outfit text-[16px] font-light leading-[1.6] text-[#DAE6DC] md:text-[18px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-[22px] inline-flex items-center gap-2 rounded-[50px] border border-[#DAE6DC] bg-[#DAE6DC] p-[7px_7px_7px_15px] font-outfit text-[13px] font-bold text-[#1B5140] transition hover:bg-[#DAE6DC]/10 hover:text-white hover:backdrop-blur-sm md:mt-[28px]"
                  >
                    <p>Request Quote</p>
                    <IconArrowCircle />
                  </Link>
                </div>

              </div>
            </div>
          </div>

    </section>
  );
}