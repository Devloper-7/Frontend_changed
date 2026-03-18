"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CheckoutPage from "@/components/CheckoutPage";
import BackgroundGradients from "@/components/BackgroundGradients";
import Footer from "@/components/Footer";

const CHECKOUT_ZIGZAG_COUNT = 2;

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId") ?? "";
  const productTitle = searchParams.get("title")
    ? decodeURIComponent(searchParams.get("title")!)
    : "Residuo de jardineria municipal";

  return (
    <>
    <CheckoutPage productId={productId} productTitle={productTitle} />
    <BackgroundGradients count={CHECKOUT_ZIGZAG_COUNT} />
    <div className="px-[20px] md:px-[40px]">
    <Footer />
    </div>
    </>
  );
}

export default function CheckoutRoute() {
  return (
    <Suspense fallback={null}>
      <CheckoutContent />
    </Suspense>
  );
}
