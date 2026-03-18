"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const CART_STORAGE_KEY = "biomket_cart";

type CartProduct = {
  id: number | string;
  image: string;
  category: string;
  title: string;
  location: string;
  quantity: string;
  code: string;
  price?: string;
  inStock?: boolean;
};

type CartItem = { product: CartProduct; quantity: number };

function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setCart(cart: CartItem[]) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-change"));
}

export default function CartPage() {
  const [cart, setCartState] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCartState(getCart());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onCartChange = () => setCartState(getCart());
    window.addEventListener("cart-change", onCartChange);
    return () => window.removeEventListener("cart-change", onCartChange);
  }, [mounted]);

  const removeItem = (index: number) => {
    const next = cart.filter((_, i) => i !== index);
    setCart(next);
    setCartState(next);
  };

  const updateQuantity = (index: number, delta: number) => {
    const next = cart.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    setCart(next);
    setCartState(next);
  };

  const total = cart.reduce(
    (sum, { product, quantity }) => sum + (Number(product.price) || 0) * quantity,
    0
  );

  if (!mounted) {
    return (
      <div className="relative mx-5 sm:mx-10 md:mb-10 min-h-[400px] flex items-center justify-center font-outfit text-[#424242]">
        Loading…
      </div>
    );
  }

  return (
    <div className="relative mx-5 sm:mx-10 md:mb-10">
      <section className="rounded-[20px] mt-[20px] mb-[40px] text-center">
        <h1 className="font-lexend font-light text-[#053F31] text-3xl md:text-4xl mb-2">
          Your <span className="font-medium">Cart</span>
        </h1>
        <p className="font-outfit text-[#424242] text-lg">
          {cart.length === 0
            ? "Your cart is empty."
            : `${cart.length} item${cart.length !== 1 ? "s" : ""} in your cart.`}
        </p>
      </section>

      {cart.length === 0 ? (
        <div className="max-w-[800px] mx-auto text-center pt-12 pb-[70px] md:pb-[130px]">
          <p className="font-outfit text-[#757575] mb-6">Add products from the marketplace to get started.</p>
          <Link
            href="/marketplace"
            className="inline-block rounded-[10px] bg-[#053F31] px-6 py-3 font-outfit text-[16px] font-medium text-white hover:opacity-90"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-[1260px] mx-auto">
          <div className="space-y-6 mb-10">
            {cart.map((item, index) => (
              <div
                key={`${item.product.id}-${index}`}
                className="flex flex-col sm:flex-row gap-4 rounded-[20px] border border-[#E6E6E6] p-4 sm:p-6 font-outfit"
              >
                <div className="sm:w-[180px] h-[180px] flex-shrink-0 rounded-[16px] overflow-hidden bg-[#F7FAF8]">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-black text-lg mb-1 line-clamp-2">
                    {item.product.title}
                  </h2>
                  <p className="text-[#757575] text-sm mb-2">{item.product.location}</p>
                  <p className="text-[#053F31] font-semibold">
                    €{item.product.price ?? "—"}/m³ × {item.quantity}
                  </p>
                </div>
                <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-start gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(index, -1)}
                      className="h-9 w-9 rounded-[8px] border border-[#053F31] text-[#053F31] font-semibold hover:bg-[#DAE6DC]"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="min-w-[2rem] text-center font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(index, 1)}
                      className="h-9 w-9 rounded-[8px] border border-[#053F31] text-[#053F31] font-semibold hover:bg-[#DAE6DC]"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-[#FF4D4D] text-sm font-medium hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#E6E6E6] pt-6">
            <p className="font-outfit text-[20px] font-semibold text-[#053F31]">
              Total: €{total.toFixed(2)}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/marketplace"
                className="inline-block rounded-[10px] border-2 border-[#053F31] px-6 py-3 font-outfit text-[16px] font-medium text-[#053F31] hover:bg-[#DAE6DC]"
              >
                Continue shopping
              </Link>
              <Link
                href="/checkout"
                className="inline-block rounded-[10px] bg-[#053F31] px-6 py-3 font-outfit text-[16px] font-medium text-white hover:opacity-90"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
