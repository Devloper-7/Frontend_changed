"use client";

import Link from "next/link";

const CART_STORAGE_KEY = "biomket_cart";

export type Product = {
  id: number | string;
  image: string;
  category: string;
  title: string;
  location: string;
  quantity: string;
  code: string;
  price: string;
  inStock: boolean;
};

export default function ProductCard({
  product,
  isLoggedIn,
}: {
  product: Product;
  isLoggedIn: boolean;
}) {
  return (
    <div className="relative md:max-w-[370px] md:max-h-[661px] rounded-[31px] font-outfit p-[36px_15px_36px_20px] xl:p-[20px_20px_20px_20px] 2xl:p-[20px_20px_20px_20px] transition hover:bg-[#F7FAF8] group">
      <span className="absolute left-0 top-[26px] h-[93%] w-[1px] bg-[#DDDDDD]" />

      {/* Image wrapper (IMPORTANT: relative here) */}
      <div className="mb-[30px] overflow-hidden rounded-[16px]">
        {/* Price tag */}
        {isLoggedIn && (
          <div className="absolute left-0 top-[33px] z-10 flex items-center">
            {/* Triangle */}
            <span className="absolute top-[20px] left-[8px] h-0 w-0 border-b-[14px] border-t-[14px] border-r-[12px] border-b-transparent border-t-transparent border-r-[#001F17]" />

            {/* Price box */}
            <span className="absolute top-[33px] left-[8px] rounded-r-[14px] bg-[#053F31] p-[7px_18px] text-[24px] font-medium font-outfit text-[#FFFFFF]">
              €{product.price}/m³
            </span>
          </div>
        )}

        <img
          src={product.image ?? ""}
          alt={product.title}
          className="h-[230px] w-[285px] 2xl:w-[350px] rounded-[16px] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      {/* Category + Stock */}
      <div className="flex items-center justify-between">
        <span className="mb-3 inline-block rounded-[10px] border border-[#053F31]/20 bg-[#DAE6DC] px-[12px] py-[3px] text-[16px] font-outfit font-semibold uppercase text-[#053F31] px-md-[15px]">
          {product.category}
        </span>

        {isLoggedIn && (
          <span
            className={`mb-3 inline-block rounded-[10px] border px-[12px] py-[3px] text-[16px] font-semibold font-outfit px-md-[15px] ${product.inStock
              ? "border-[#053F31] text-[#053F31]"
              : "border-[#FF4D4D] text-[#FF4D4D]"
              }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-[30px] min-h-[76px] max-w-[350px] font-outfit font-semibold text-black line-clamp-2">
        {product.title}
      </h3>

      {/* Meta */}
      <div className="mb-[30px] space-y-4 text-[20px]">
        <div className="flex gap-2">
          <p className="font-light text-black">Location :</p>
          <p className="font-light text-[#757575]">{product.location}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-light text-black">Quantity :</p>
          <p className="font-light text-[#757575]">{product.quantity}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-light text-black">Code :</p>
          <p className="font-light text-[#757575]">{product.code}</p>
        </div>
      </div>

      <hr className="mb-[15px] max-w-[250px] border-[#DDDDDD]" />

      {/* CTA */}
      {isLoggedIn ? (
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={`/marketplace/${product.id}`}
            className="font-regular text-[18px] md:text-[20px] underline"
          >
            See details
          </Link>
          <button
            type="button"
            onClick={() => {
              try {
                const raw = typeof window !== "undefined" ? localStorage.getItem(CART_STORAGE_KEY) : null;
                const cart: { product: Product; quantity: number }[] = raw ? JSON.parse(raw) : [];
                const existing = cart.find((c) => String(c.product.id) === String(product.id));
                if (existing) existing.quantity += 1;
                else cart.push({ product: { ...product }, quantity: 1 });
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
                window.dispatchEvent(new Event("cart-change"));
              } catch (_) {}
            }}
            disabled={!product.inStock}
            className="rounded-[10px] bg-[#053F31] px-4 py-2 font-outfit text-[16px] font-medium cursor-pointer text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to cart
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="font-regular text-[18px] md:text-[20px] md:underline text-[#333333]"
        >
          Log in for more details
        </Link>
      )}
    </div>
  );
}
