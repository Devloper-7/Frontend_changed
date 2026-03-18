"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ProductCard, { Product } from "./ProductCard";
import ProductFiltersModal from "./ProductFiltersModal";

function getIsLoggedInFromStorage(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem("currentUser") || localStorage.getItem("biomket_user");
    const user = raw ? JSON.parse(raw) : null;
    return !!(user && (user.fullName || user.name));
  } catch {
    return false;
  }
}

const PER_PAGE_MOBILE = 3;
const PER_PAGE_DESKTOP = 9;
const DESKTOP_BREAKPOINT_PX = 768;

export type ListingProduct = {
  id: number | string;
  image: string;
  category: string;
  title: string;
  location: string;
  quantity: string;
  code: string;
};

export type ProductListingProps = {
  products?: Product[];
  totalCount?: number;
  sortOptions?: { value: string; label: string }[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  onSortChange?: (value: string) => void;
  onFilterClick?: () => void;
};

const DEFAULT_SORT_OPTIONS = [
  { value: "relevance", label: "Relevance" },
  { value: "newest", label: "Newest" },
  { value: "quantity", label: "Quantity" },
];

function IconChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconFilter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
      <path d="M13.0909 2.4C13.0909 1.92533 13.2349 1.46131 13.5046 1.06663C13.7743 0.671954 14.1576 0.36434 14.6061 0.18269C15.0546 0.00103989 15.5482 -0.0464881 16.0243 0.0461164C16.5004 0.138721 16.9378 0.367299 17.2811 0.702945C17.6244 1.03859 17.8581 1.46623 17.9528 1.93178C18.0475 2.39734 17.9989 2.8799 17.8132 3.31844C17.6274 3.75698 17.3128 4.13181 16.9091 4.39553C16.5055 4.65924 16.0309 4.8 15.5455 4.8C14.8945 4.8 14.2701 4.54714 13.8098 4.09706C13.3495 3.64697 13.0909 3.03652 13.0909 2.4ZM0.818182 3.2H10.6364C10.8534 3.2 11.0615 3.11571 11.2149 2.96569C11.3683 2.81566 11.4545 2.61217 11.4545 2.4C11.4545 2.18783 11.3683 1.98434 11.2149 1.83432C11.0615 1.68429 10.8534 1.6 10.6364 1.6H0.818182C0.601186 1.6 0.393079 1.68429 0.23964 1.83432C0.086201 1.98434 0 2.18783 0 2.4C0 2.61217 0.086201 2.81566 0.23964 2.96569C0.393079 3.11571 0.601186 3.2 0.818182 3.2ZM5.72727 5.6C5.22086 5.60139 4.72729 5.7559 4.31422 6.04235C3.90115 6.3288 3.5888 6.73316 3.42 7.2H0.818182C0.601186 7.2 0.393079 7.28428 0.23964 7.43431C0.086201 7.58434 0 7.78782 0 8C0 8.21217 0.086201 8.41565 0.23964 8.56568C0.393079 8.71571 0.601186 8.8 0.818182 8.8H3.42C3.5701 9.2151 3.83409 9.58183 4.18307 9.86006C4.53206 10.1383 4.9526 10.3173 5.39866 10.3775C5.84472 10.4376 6.29912 10.3767 6.71213 10.2013C7.12513 10.0258 7.48082 9.74272 7.74028 9.38287C7.99974 9.02303 8.15296 8.60033 8.18318 8.16104C8.21339 7.72175 8.11944 7.2828 7.9116 6.89222C7.70376 6.50164 7.39004 6.1745 7.00478 5.94658C6.61952 5.71866 6.17756 5.59876 5.72727 5.6ZM17.1818 7.2H10.6364C10.4194 7.2 10.2113 7.28428 10.0578 7.43431C9.90438 7.58434 9.81818 7.78782 9.81818 8C9.81818 8.21217 9.90438 8.41565 10.0578 8.56568C10.2113 8.71571 10.4194 8.8 10.6364 8.8H17.1818C17.3988 8.8 17.6069 8.71571 17.7604 8.56568C17.9138 8.41565 18 8.21217 18 8C18 7.78782 17.9138 7.58434 17.7604 7.43431C17.6069 7.28428 17.3988 7.2 17.1818 7.2ZM7.36364 12.8H0.818182C0.601186 12.8 0.393079 12.8843 0.23964 13.0343C0.086201 13.1843 0 13.3878 0 13.6C0 13.8122 0.086201 14.0157 0.23964 14.1657C0.393079 14.3157 0.601186 14.4 0.818182 14.4H7.36364C7.58063 14.4 7.78874 14.3157 7.94218 14.1657C8.09562 14.0157 8.18182 13.8122 8.18182 13.6C8.18182 13.3878 8.09562 13.1843 7.94218 13.0343C7.78874 12.8843 7.58063 12.8 7.36364 12.8ZM17.1818 12.8H14.58C14.387 12.2662 14.0072 11.8164 13.5078 11.5299C13.0084 11.2434 12.4214 11.1388 11.8508 11.2346C11.2801 11.3303 10.7624 11.6202 10.3892 12.0531C10.016 12.4859 9.81129 13.0338 9.81129 13.6C9.81129 14.1661 10.016 14.7141 10.3892 15.1469C10.7624 15.5798 11.2801 15.8697 11.8508 15.9654C12.4214 16.0612 13.0084 15.9566 13.5078 15.6701C14.0072 15.3836 14.387 14.9338 14.58 14.4H17.1818C17.3988 14.4 17.6069 14.3157 17.7604 14.1657C17.9138 14.0157 18 13.8122 18 13.6C18 13.3878 17.9138 13.1843 17.7604 13.0343C17.6069 12.8843 17.3988 12.8 17.1818 12.8Z" fill="#DAE6DC" />
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
      <path d="M7.46315 0.711499C7.70034 0.471167 8.08491 0.471167 8.3221 0.711499C8.5593 0.951819 8.5593 1.34146 8.3221 1.58178L7.46315 0.711499ZM1.46311 7.66098L1.89264 8.09605L1.46311 7.66098ZM1.46311 9.40153L1.89264 8.96645L1.46311 9.40153ZM8.3221 15.4807C8.5593 15.721 8.5593 16.1107 8.3221 16.3511C8.08491 16.5913 7.70034 16.5913 7.46315 16.3511L8.3221 15.4807ZM8.3221 1.58178L1.89264 8.09605L1.0337 7.22577L7.46315 0.711499L8.3221 1.58178ZM1.89264 8.96645L8.3221 15.4807L7.46315 16.3511L1.0337 9.83673L1.89264 8.96645ZM1.89264 8.09605C1.6554 8.33642 1.6554 8.72608 1.89264 8.96645L1.0337 9.83673C0.322101 9.11574 0.322101 7.94676 1.0337 7.22577L1.89264 8.09605Z" fill="black" stroke="black" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
      <path d="M1.56028 0.711499C1.32309 0.471167 0.938531 0.471167 0.70134 0.711499C0.464137 0.951819 0.464137 1.34146 0.70134 1.58178L1.56028 0.711499ZM7.56033 7.66097L7.13079 8.09605L7.56033 7.66097ZM7.56033 9.40153L7.13079 8.96645L7.56033 9.40153ZM0.70134 15.4807C0.464137 15.721 0.464137 16.1107 0.70134 16.3511C0.938531 16.5913 1.32309 16.5913 1.56028 16.3511L0.70134 15.4807ZM0.70134 1.58178L7.13079 8.09605L7.98974 7.22577L1.56028 0.711499L0.70134 1.58178ZM7.13079 8.96645L0.70134 15.4807L1.56028 16.3511L7.98974 9.83673L7.13079 8.96645ZM7.13079 8.09605C7.36803 8.33642 7.36803 8.72608 7.13079 8.96645L7.98974 9.83673C8.70134 9.11574 8.70134 7.94676 7.98974 7.22577L7.13079 8.09605Z" fill="black" stroke="black" />
    </svg>
  );
}

export default function ProductListing({
  products = [],
  totalCount,
  sortOptions = DEFAULT_SORT_OPTIONS,
  currentPage = 1,
  totalPages: totalPagesProp,
  onPageChange,
  onSortChange,
  onFilterClick,
}: ProductListingProps) {
  const pathname = usePathname();
  const [sortValue, setSortValue] = useState(sortOptions[0]?.value ?? "relevance");
  const [page, setPage] = useState(currentPage);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [perPage, setPerPage] = useState(PER_PAGE_DESKTOP);

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(getIsLoggedInFromStorage());
    };
    checkLogin();
    window.addEventListener("auth-change", checkLogin);
    return () => window.removeEventListener("auth-change", checkLogin);
  }, [pathname]);

  useEffect(() => {
    const updatePerPage = () => {
      setPerPage(window.innerWidth >= DESKTOP_BREAKPOINT_PX ? PER_PAGE_DESKTOP : PER_PAGE_MOBILE);
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const safeProducts = Array.isArray(products) ? products : [];
  const count = totalCount ?? safeProducts.length;
  const totalPages = totalPagesProp ?? Math.max(1, Math.ceil(safeProducts.length / perPage));
  const start = (page - 1) * perPage;
  const displayedProducts = safeProducts.slice(start, start + perPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (page > totalPages && totalPages >= 1) {
      setPage(totalPages);
    }
  }, [totalPages, page]);

  const handlePageChange = (newPage: number) => {
    const clamped = Math.max(1, Math.min(totalPages, newPage));
    setPage(clamped);
    onPageChange?.(clamped);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortValue(value);
    onSortChange?.(value);
  };

  // Build pagination slots: e.g. [1, 2, 3, 4, 5, 'ellipsis', 10] to match design
  const paginationSlots: (number | "ellipsis")[] = (() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const slots: (number | "ellipsis")[] = [];
    if (page <= 4) {
      for (let p = 1; p <= 5; p++) slots.push(p);
      slots.push("ellipsis");
      slots.push(totalPages);
    } else if (page >= totalPages - 3) {
      slots.push(1);
      slots.push("ellipsis");
      for (let p = totalPages - 4; p <= totalPages; p++) slots.push(p);
    } else {
      slots.push(1);
      slots.push("ellipsis");
      for (let p = page - 1; p <= page + 1; p++) slots.push(p);
      slots.push("ellipsis");
      slots.push(totalPages);
    }
    return slots;
  })();

  return (
    // <section className="w-full px-4 py-10 sm:px-6 md:px-10">
    <div className="xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto rounded-[20px] pb-[70px] md:pb-[130px] md:px-[50px]">
      {/* Header: count + sort + filter */}
      <div className="mb-[30px] flex flex-col gap-4 border-b border-[#E6E6E6] pb-5 md:mb-[50px] sm:flex-row sm:items-center sm:justify-between">
        <p className="order-2 text-center font-outfit font-light text-[#424242] sm:order-1">
          {count} products found
        </p>
        <div className="order-1 flex items-center gap-5 sm:order-2 justify-between">
          <div className="flex items-center gap-[5px]">
          <p className="font-outfit font-light text-[#424242]">
            Sort By:
          </p>
          <div className="relative">
            <select
              value={sortValue}
              onChange={handleSortChange}
              className="h-[40px] min-w-[138px] appearance-none rounded-[50px] border-2 border-[#053F31] p-[4px_15px] font-outfit text-[18px] font-semibold text-[#053F31] focus:outline-none cursor-pointer"
              aria-label="Sort by"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#053F31]">
              <IconChevronDown />
            </span>
          </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsFilterOpen(true);
              onFilterClick?.();
            }}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-[5px] border border-[#053F31] bg-[#053F31] text-[#DAE6DC] transition-opacity hover:opacity-80 cursor-pointer"
            aria-label="Filter"
          >
            <IconFilter />
          </button>
        </div>
      </div>

      {/* Product grid - 9 products per page */}
      <div className="grid grid-cols-1 gap-[30px] md:gap-[75px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} isLoggedIn={isLoggedIn} />
        ))}
      </div>

      {/* Pagination: < 1 2 3 4 5 ... 10 > */}
      <div className="mt-[30px] md:mt-[130px] flex flex-wrap items-center justify-center gap-[7px] text-[20px] font-semibold font-jakarta">
        <button
          type="button"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="flex h-10 w-10 items-center justify-center text-[#000000] transition-opacity disabled:opacity-60 hover:enabled:border-[#333333] hover:enabled:text-[#333333] cursor-pointer"
          aria-label="Previous page"
        >
          <IconChevronLeft />
        </button>
        <div className="flex items-center gap-2">
          {paginationSlots.map((slot, i) =>
            slot === "ellipsis" ? (
              <span key={`ellipsis-${i}`} className="flex h-10 w-10 items-center justify-center text-[#053F31]">
                …
              </span>
            ) : (
              <button
                key={slot}
                type="button"
                onClick={() => handlePageChange(slot)}
                className={`flex h-[40px] w-[40px] rounded-[4px] items-center justify-center font-jakarta cursor-pointer text-[20px] leading-5 font-semibold transition-colors ${slot === page
                  ? "bg-[#053F31] text-[#FFFFFF] hover:bg-[#DAE6DC] hover:text-[#000000]"
                  : "bg-[#DAE6DC] text-[#000000] hover:bg-[#053F31] hover:text-[#FFFFFF]"
                  }`}
                aria-label={`Page ${slot}`}
                aria-current={slot === page ? "page" : undefined}
              >
                {slot}
              </button>
            )
          )}
        </div>
        <button
          type="button"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
          className="flex h-10 w-10 items-center justify-center text-[#000000] transition-opacity disabled:opacity-60 cursor-pointer"
          aria-label="Next page"
        >
          <IconChevronRight />
        </button>
      </div>

      <ProductFiltersModal
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
    // </section>
  );
}
