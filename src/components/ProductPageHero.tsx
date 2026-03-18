"use client";

import { useCallback, useState } from "react";

export type ProductPageHeroProps = {
  title?: string;
  titleBold?: string;
  description?: string;
  searchPlaceholder?: string;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
};

// function IconTree() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 22v-7" />
//       <path d="M9 15v4" />
//       <path d="M15 15v4" />
//       <path d="M12 15V8a3 3 0 0 1 3-3c.6 0 1.1.2 1.5.6" />
//       <path d="M12 8V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v1" />
//       <path d="M12 8V5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6a3 3 0 0 1-3 3c-.6 0-1.1-.2-1.5-.6" />
//     </svg>
//   );
// }

// function IconTruck() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
//       <path d="M15 18h2" />
//       <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
//     </svg>
//   );
// }

// function IconDocument() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//       <path d="M14 2v6h6" />
//       <path d="M16 13H8" />
//       <path d="M16 17H8" />
//       <path d="M10 9H8" />
//     </svg>
//   );
// }

// function IconGear() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
//       <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
//     </svg>
//   );
// }

function IconSearch() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const DEFAULT_TITLE = "Organic";
const DEFAULT_TITLE_BOLD = "Waste Marketplace";
const DEFAULT_DESCRIPTION = "Browse verified organic waste products from producers across Europe.";
const DEFAULT_PLACEHOLDER = "Search...";

export default function ProductPageHero({
  title = DEFAULT_TITLE,
  titleBold = DEFAULT_TITLE_BOLD,
  description = DEFAULT_DESCRIPTION,
  searchPlaceholder = DEFAULT_PLACEHOLDER,
  backgroundImage,
  mobileBackgroundImage,
}: ProductPageHeroProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // Optional: wire to search (e.g. query params or state)
    },
    [searchQuery]
  );

  const hasBgImage = Boolean(backgroundImage || mobileBackgroundImage);
  const desktopBg = backgroundImage ?? "";
  const mobileBg = mobileBackgroundImage ?? backgroundImage ?? "";

  return (
    <section className="relative w-full overflow-hidden rounded-b-2xl md:rounded-b-3xl min-h-[320px] md:min-h-[420px]">
      {/* Background: image or dark green + pattern */}
      {hasBgImage ? (
        <>
          <img
            src={mobileBg}
            alt=""
            className="absolute inset-0 block w-full object-cover object-top md:hidden"
            style={{ height: "100%", minHeight: "400px" }}
            aria-hidden
          />
          <img
            src={desktopBg}
            alt=""
            className="absolute inset-0 hidden w-full object-cover object-top md:block"
            style={{ height: "100%", minHeight: "449px" }}
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-[#053F31] product-page-hero-pattern"
          aria-hidden
        />
      )}

      {/* Corner icons - desktop only */}
      {/* <div className="absolute left-4 top-4 hidden h-12 w-12 items-center justify-center rounded-full bg-[#053F31]/90 text-white md:flex" aria-hidden>
        <IconTree />
      </div>
      <div className="absolute right-4 top-4 hidden h-12 w-12 items-center justify-center rounded-full bg-[#053F31]/90 text-white md:flex" aria-hidden>
        <IconTruck />
      </div>
      <div className="absolute bottom-4 left-4 hidden h-12 w-12 items-center justify-center rounded-full bg-[#053F31]/90 text-white md:flex" aria-hidden>
        <IconDocument />
      </div>
      <div className="absolute bottom-4 right-4 hidden h-12 w-12 items-center justify-center rounded-full bg-[#053F31]/90 text-white md:flex" aria-hidden>
        <IconGear />
      </div> */}

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-[400px] md:min-h-[449px] flex-col items-center justify-center px-4 py-12 text-center sm:px-6 md:py-16">
        <h1 className="mb-3 font-light tracking-wide text-white md:mb-4 md:max-w-[640px]">
          {title}
          {titleBold ? <span className="font-bold"> {titleBold}</span> : null}
        </h1>
        <p className="mb-6 max-w-[320px] text-base font-light leading-relaxed text-white/95 sm:max-w-[480px] md:mb-8 md:max-w-[560px] md:text-lg">
          {description}
        </p>

        <form onSubmit={handleSearch} className="w-full max-w-[560px]">
          <div className="flex items-center overflow-hidden rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-white placeholder:text-white/60 focus:outline-none md:px-6 md:py-4"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#053F31] text-white transition-opacity hover:opacity-90 md:h-12 md:w-12"
              aria-label="Search"
            >
              <IconSearch />
            </button>
          </div>
        </form>

        {/* Decorative lines below search - desktop */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 md:flex" aria-hidden>
          {[12, 18, 14, 20, 16].map((h, i) => (
            <div
              key={i}
              className="w-px bg-white/30"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
