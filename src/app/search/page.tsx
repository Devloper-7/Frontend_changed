"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactHero from "@/components/ContactHero";
import ProductListing from "@/components/ProductListing";

/**
 * Search results page. Same layout as marketplace with ProductListing;
 * products are filtered by query param q (title, category, code).
 */

const ALL_PRODUCTS = [
  { id: "1", image: "../product.png", category: "AGRICULTURAL", title: "Organic Manure Compost", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "22", inStock: true },
  { id: "2", image: "../product1.png", category: "AGRICULTURAL", title: "Residuo de jardineria municipal", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "18", inStock: false },
  { id: "3", image: "../product2.jpg", category: "AGRICULTURAL", title: "Resto de mercado municipal", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "25", inStock: true },
  { id: "4", image: "../product.png", category: "AGRICULTURAL", title: "Organic Manure Compost", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "35", inStock: true },
  { id: "5", image: "../product2.jpg", category: "AGRICULTURAL", title: "Residuo de jardineria municipal", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "45", inStock: true },
  { id: "6", image: "../product1.png", category: "AGRICULTURAL", title: "Resto de mercado municipal", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "55", inStock: true },
  { id: "7", image: "../product.png", category: "AGRICULTURAL", title: "Organic Manure Compost", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "65", inStock: true },
  { id: "8", image: "../product1.png", category: "AGRICULTURAL", title: "Residuo de jardineria municipal", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "75", inStock: true },
  { id: "9", image: "../product2.jpg", category: "AGRICULTURAL", title: "Resto de mercado municipal", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "85", inStock: true },
  { id: "10", image: "../product1.png", category: "AGRICULTURAL", title: "Organic Manure Compost", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "95", inStock: true },
  { id: "11", image: "../product.png", category: "AGRICULTURAL", title: "Residuo de jardineria municipal", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "50", inStock: true },
  { id: "12", image: "../product2.jpg", category: "AGRICULTURAL", title: "Resto de mercado municipal", location: "Valencia, Spain", quantity: "12 m³", code: "02 01 06", price: "88", inStock: true },
];

function filterProducts(products: typeof ALL_PRODUCTS, q: string) {
  if (!q || typeof q !== "string") return products;
  const lower = q.trim().toLowerCase();
  if (!lower) return products;
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      (p.code && p.code.toLowerCase().includes(lower)) ||
      (p.location && p.location.toLowerCase().includes(lower))
  );
}

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const products = filterProducts(ALL_PRODUCTS, q);

  return (
    <div className="relative mx-5 pb-10 sm:mx-10 md:mb-10">
      <ContactHero
        headline={
          <>
            Organic <span className="font-medium">Waste Marketplace</span>
          </>
        }
        description="Browse verified organic waste products from producers across Europe."
        showSearch
      />
      <ProductListing products={products} />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchContent />
    </Suspense>
  );
}
