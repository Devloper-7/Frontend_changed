"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import ProductCard, { Product } from "./ProductCard";
import { useRouter } from "next/navigation";


export type MarketplaceSectionProps = {
  title: string;
  description: string;
  button?: { button_text?: string; button_url?: string } | string;
  products: Product[];
};

function IconArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path className="fill-[#053F31] group-hover:fill-[#DAE6DC] transition-colors" d="M36 18C36 8.05888 27.9411 0 18 0C8.05887 0 0 8.05888 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z" />
      <path className="stroke-[#F7FAF8] group-hover:stroke-[#053F31] transition-colors" d="M26 18H10.5M10.5 18L16.5 12M10.5 18L16.5 24.5" strokeWidth="2" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path className="fill-[#DAE6DC] group-hover:fill-[#053F31] transition-colors" d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" />
      <path className="stroke-[#053F31] group-hover:stroke-[#F7FAF8] transition-colors" d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" strokeWidth="2" />
    </svg>
  );
}

function IconArrowRightWhite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M0 18C0 8.05887 8.05887 0 18 0V0C27.9411 0 36 8.05887 36 18V18C36 27.9411 27.9411 36 18 36V36C8.05887 36 0 27.9411 0 18V18Z" fill="#F7FAF8" />
      <path d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" stroke="#053F31" strokeWidth="2" />
    </svg>
  );
}

export default function MarketplaceSection({
  title,
  description,
  button,
  products,
}: MarketplaceSectionProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepPx, setStepPx] = useState(381.75);
  const [gapPx, setGapPx] = useState(10);
  const [isMd, setIsMd] = useState(true);
  const [isResetting, setIsResetting] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  const len = products.length;
  const displayProducts = len > 0 ? [...products, ...products] : [];
  const maxIndex = len > 0 ? Math.max(0, 2 * len - itemsPerView) : 0;
  const showArrows = len > itemsPerView;

  const handleNext = () => {
    if (!len) return;
    if (currentIndex >= maxIndex) {
      setIsResetting(true);
      setCurrentIndex(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsResetting(false)));
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!len) return;
    if (currentIndex <= 0) {
      setIsResetting(true);
      setCurrentIndex(maxIndex);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsResetting(false)));
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkLogin = () => {
      try {
        const raw = localStorage.getItem("currentUser") || localStorage.getItem("biomket_user");
        const user = raw ? JSON.parse(raw) : null;
        setIsLoggedIn(!!(user && (user.fullName || user.name)));
      } catch {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
    window.addEventListener("auth-change", checkLogin);
    return () => window.removeEventListener("auth-change", checkLogin);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateStep = () => {
      const el = carouselRef.current;
      if (!el) return;
      const w = el.offsetWidth;
      const width = window.innerWidth;
      let itemsPerView = 1;
      let gap = 10;
      if (width >= 1536) {
        itemsPerView = 4;
        gap = 66;
      } else if (width >= 1280) {
        itemsPerView = 3;
        gap = 10;
      } else if (width >= 768) {
        itemsPerView = 3;
        gap = 10;
      }
      setItemsPerView(itemsPerView);
      setGapPx(gap);
      setIsMd(width >= 768);
      const totalGap = gap * (itemsPerView - 1);
      const cardWidth = (w - totalGap) / itemsPerView;
      setStepPx(cardWidth + gap);
    };

    const runAfterLayout = () => requestAnimationFrame(() => requestAnimationFrame(updateStep));
    runAfterLayout();
    window.addEventListener("resize", runAfterLayout);
    return () => window.removeEventListener("resize", runAfterLayout);
  }, [products.length]);

  const router = useRouter();
  return (
    <section className="relative w-full py-[70px] md:py-[130px] px-[20px] xl:px-[70px] 2xl:px-[70px]">
      {/* <div className="mx-auto max-w-[1440px]"> */}
      {/* Header Section */}
      <div className="mb-[20px] flex flex-col gap-6 md:flex-row items-center text-center md:text-left md:items-start md:justify-between">
        {/* Title */}
        <div className="flex-1">
          <h2 className=" text-[#000000]">
            <span className=" block font-extralight">
              {title.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="block font-medium">
              {title.split(" ").slice(2).join(" ")}
            </span>
          </h2>
        </div>

        {/* Description and Navigation */}
        <div className="flex flex-col items-center md:items-end justify-end">
          <p className="max-w-lg text-center md:text-right text-[#424242] font-light font-outfit mb-[10px]">
            {description}
          </p>
          <div className="flex justify-center md:hidden mt-5">
            <button onClick={() => { const url = typeof button === "object" && button && "button_url" in button && button.button_url ? button.button_url : "/marketplace"; url.startsWith("http") ? (window.location.href = url) : router.push(url); }} className="flex items-center justify-center gap-2 bg-[#0F3F32] text-white p-[7px_7px_7px_15px] rounded-full font-semibold hover:bg-[#082a21] transition text-lg">
             {typeof button === "object" && button && "button_text" in button ? button.button_text : "Explore Marketplace"}
              <IconArrowRightWhite />
            </button>
          </div>
          {showArrows && (
            <div className="hidden md:flex md:block gap-[10px]">
              <button
                type="button"
                onClick={handlePrev}
                className="group flex items-center justify-center rounded-full transition cursor-pointer
              "
                aria-label="Previous"
              >
                <IconArrowLeft />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="group flex items-center justify-center rounded-full transition cursor-pointer"
                aria-label="Next"
              >
                <IconArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Cards (carousel) */}
      <div ref={carouselRef} className="mx-auto mb-[41px] xl:max-w-[1170px] 2xl:max-w-[1758px] overflow-hidden">
        <div
          className="flex gap-[10px] xl:gap-[10px] 2xl:gap-[66px] ease-out"
          style={{
            transition: isResetting ? "none" : "transform 0.3s ease-out",
            transform: `translateX(-${currentIndex * stepPx}px)`,
          }}
        >
          {displayProducts.map((product, index) => {
            const itemWidth = stepPx - gapPx === 466 ? 461.75 : stepPx - gapPx;
            return (
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: itemWidth, minWidth: itemWidth }}
            >
              <ProductCard product={product} isLoggedIn={isLoggedIn} />
            </div>
          ); })}
        </div>
        {showArrows && (
          <div className="flex md:hidden items-center justify-center gap-[10px]">
            <button
              type="button"
              onClick={handlePrev}
              className="group flex items-center justify-center rounded-full transition"
              aria-label="Previous"
            >
              <IconArrowLeft />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="group flex items-center justify-center rounded-full transition"
              aria-label="Next"
            >
              <IconArrowRight />
            </button>
          </div>
        )}
      </div>

      {/* Explore Marketplace Button */}
      <div className="md:flex items-center justify-center  hidden md:block">
        <button onClick={() => { const url = typeof button === "object" && button && "button_url" in button && button.button_url ? button.button_url : "/marketplace"; url.startsWith("http") ? (window.location.href = url) : router.push(url); }} className="flex items-center justify-center gap-2 cursor-pointer border-2 border-[#0F3F32] bg-[#0F3F32] text-white p-[7px_7px_7px_15px] rounded-full font-semibold hover:border-2 hover:border-[#0F3F32] hover:bg-[#ffffff] hover:text-[#0F3F32] transition text-[18px]">
        {typeof button === "object" && button && "button_text" in button ? button.button_text : "Explore Marketplace"}
          <IconArrowRightWhite />
        </button>
      </div>
      {/* </div> */}
    </section>
  );
}
