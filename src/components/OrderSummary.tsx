import React from "react";
import Image, { StaticImageData } from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type OrderItemProps = {
  image: string | StaticImageData;
  productName: string;
  lerCode: string;
  quantity: string;
  frequency: string;
  location: string;
  price: string;
  priceUnit?: string;
};

type OrderSummaryProps = {
  items: OrderItemProps[];
  subtotal: string;
  vat: string;
  vatPercent?: string;
  total: string;
};

// ─── OrderItem Sub-Component ──────────────────────────────────────────────────

const OrderItem = ({
  image,
  productName,
  lerCode,
  quantity,
  frequency,
  location,
  price,
  priceUnit = "per month",
}: OrderItemProps) => {
  return (
    <div className="py-5 border-b border-[#000000]/10 last:border-b-0">
      {/* Main row: image + details + price (price moves below on mobile) */}
      <div className="flex items-start gap-3">
        {/* Product Image */}
        <div className="relative h-[90px] w-[90px] md:h-[152px] md:w-[152px] shrink-0 overflow-hidden rounded-[12px]">
          <Image
            src={image}
            alt={productName}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details + Price (desktop: price is right-aligned in same row) */}
        <div className="flex flex-1 flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 min-w-0">
          <div className="min-w-0">
            <span className="font-outfit text-[16px] md:text-[18px] font-normal text-[#000000] mb-[5px] block">
              {productName}
            </span>
            <div className="flex flex-col space-y-[4px] mt-[5px]">
              <p className="font-outfit text-[14px] md:text-[16px] text-[#757575] font-light">
                <span className="font-light text-[#000000]">LER Code : </span>
                {lerCode}
              </p>
              <p className="font-outfit text-[14px] md:text-[16px] text-[#757575] font-light">
                <span className="font-light text-[#000000]">Quantity : </span>
                {quantity}
              </p>
              <p className="font-outfit text-[14px] md:text-[16px] text-[#757575] font-light">
                <span className="font-light text-[#000000]">Frequency : </span>
                {frequency}
              </p>
              <p className="font-outfit text-[14px] md:text-[16px] text-[#757575] font-light">
                <span className="font-light text-[#000000]">Location : </span>
                {location}
              </p>
            </div>
          </div>

          {/* Price — right on desktop */}
          <div className="flex items-baseline shrink-0 md:text-right mt-1">
            <p className="font-outfit text-[18px] md:text-[22px] font-semibold">{price}</p>
            <span className="font-outfit text-[14px] md:text-[16px] font-light">/{priceUnit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function OrderSummary({
  items,
  subtotal,
  vat,
  vatPercent = "21%",
  total,
}: OrderSummaryProps) {
  return (
    <section className="bg-[#F7FAF8] rounded-[20px] border border-[#DAE6DC] px-6 py-7 md:px-8 md:py-8 font-outfit shadow-xl">
      {/* Header */}
      <h3 className="font-outfit text-[24px] font-medium text-[#053F31] mb-[20px] pb-[20px] border-b border-[#DAE6DC]">
        Order Summary
      </h3>

      {/* Order Items */}
      <div>
        {items.map((item, index) => (
          <OrderItem key={index} {...item} />
        ))}
      </div>

      {/* Totals */}
      <div className=" border-t border-[#053F31]/50 pt-5 flex flex-col gap-3">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="font-outfit text-[16px] font-normal text-[#333333]">
            Subtotal
          </span>
          <span className="font-outfit !text-[20px] font-semibold text-[#053F31]">
            {subtotal}
          </span>
        </div>

        {/* VAT */}
        <div className="flex items-center justify-between">
          <span className="font-outfit text-[16px] font-normal text-[#333333]">
            VAT ({vatPercent})
          </span>
          <span className="font-outfit !text-[20px] font-semibold text-[#053F31]">
            {vat}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D9D9D9] my-1" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="font-outfit text-[16px] font-normal text-[#000000]">
            Total Paid
          </span>
          <h3 className="font-outfit text-[22px] font-bold text-[#053F31]">
            {total}
          </h3>
        </div>
      </div>
    </section>
  );
}