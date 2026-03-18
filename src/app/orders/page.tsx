"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const STATUS_STYLES: Record<string, string> = {
  Delivered: "bg-[#22c55e] text-white",
  "In Transit": "bg-[#3b82f6] text-white",
  Pending: "bg-[#f97316] text-white",
  Confirmed: "bg-[#22c55e] text-white",
  Cancelled: "bg-[#ef4444] text-white",
};

const MOCK_ORDERS = [
  { id: "ORD-2891", product: "Organic Compost", location: "Barcelona", quantity: "150 tons", amount: "5,250", date: "Nov 18", status: "Delivered" },
  { id: "ORD-2890", product: "Agricultural Waste", location: "Madrid", quantity: "80 tons", amount: "2,800", date: "Nov 17", status: "In Transit" },
  { id: "ORD-2889", product: "Organic Compost", location: "Valencia", quantity: "200 tons", amount: "7,000", date: "Nov 16", status: "In Transit" },
  { id: "ORD-2888", product: "Green Waste", location: "Seville", quantity: "120 tons", amount: "4,200", date: "Nov 15", status: "Pending" },
  { id: "ORD-2887", product: "Organic Compost", location: "Bilbao", quantity: "90 tons", amount: "3,150", date: "Nov 14", status: "Pending" },
  { id: "ORD-2886", product: "Agricultural Waste", location: "Barcelona", quantity: "60 tons", amount: "2,100", date: "Nov 13", status: "Confirmed" },
  { id: "ORD-2885", product: "Green Waste", location: "Madrid", quantity: "180 tons", amount: "6,300", date: "Nov 12", status: "Delivered" },
  { id: "ORD-2884", product: "Organic Compost", location: "Valencia", quantity: "100 tons", amount: "3,500", date: "Nov 11", status: "Cancelled" },
];

const PER_PAGE = 8;
const TOTAL_ORDERS = 47;

function IconSearch() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#757575] shrink-0">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 1L2 9l6 8" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 1l6 8-6 8" />
    </svg>
  );
}

function IconChevronRightSmall() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#757575]">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

const OrdersPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [productFilter, setProductFilter] = useState("All Products");
  const [dateFilter, setDateFilter] = useState("Date : Last 30 Days");
  const [page, setPage] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const totalPages = Math.ceil(TOTAL_ORDERS / PER_PAGE);
  const start = (page - 1) * PER_PAGE + 1;
  const end = Math.min(page * PER_PAGE, TOTAL_ORDERS);

  const paginationSlots: (number | "ellipsis")[] = (() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
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
    <>
      <div className="min-h-screen flex flex-row">
        <Sidebar />

        <div className="flex-1 transition-all duration-300 rounded-[20px] m-4 mt-5 md:m-[50px_0px] md:ms-68 pr-4 pl-4 md:pr-[40px] md:pl-0 max-w-[1200px] pb-28 md:pb-10">
          {/* Top: Search + Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex flex-1 min-w-0">
              <input
                type="text"
                placeholder="Search By Order Number, Product, Buyer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 min-w-0 rounded-l-[10px] border border-[#E6E6E6] bg-white px-4 py-3 font-outfit text-[#424242] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#053F31]/20 focus:border-[#053F31]"
              />
              <button
                type="button"
                className="flex items-center justify-center w-12 rounded-r-[10px] bg-[#053F31] text-white hover:opacity-90 transition-opacity shrink-0"
                aria-label="Search"
              >
                <IconSearch />
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="min-w-[140px] rounded-[10px] border border-[#E6E6E6] bg-white pl-4 pr-10 py-3 font-outfit text-[#424242] focus:outline-none appearance-none cursor-pointer bg-no-repeat bg-[length:16px] bg-[right_12px_center]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23424242' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
              >
                <option>All Status</option>
                <option>Delivered</option>
                <option>In Transit</option>
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Cancelled</option>
              </select>
              <select
                value={productFilter}
                onChange={(e) => setProductFilter(e.target.value)}
                className="min-w-[140px] rounded-[10px] border border-[#E6E6E6] bg-white pl-4 pr-10 py-3 font-outfit text-[#424242] focus:outline-none appearance-none cursor-pointer bg-no-repeat bg-[length:16px] bg-[right_12px_center]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23424242' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
              >
                <option>All Products</option>
                <option>Organic Compost</option>
                <option>Agricultural Waste</option>
                <option>Green Waste</option>
              </select>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="min-w-[180px] rounded-[10px] border border-[#E6E6E6] bg-white pl-4 pr-10 py-3 font-outfit text-[#424242] focus:outline-none appearance-none cursor-pointer bg-no-repeat bg-[length:16px] bg-[right_12px_center]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23424242' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
              >
                <option>Date : Last 30 Days</option>
                <option>Date : Last 7 Days</option>
                <option>Date : Last 90 Days</option>
              </select>
            </div>
          </div>

          {/* Mobile: expandable list */}
          <div className="md:hidden rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white">
            <div className="bg-[#DAE6DC] text-[#053F31] font-outfit font-semibold flex justify-between items-center py-3 px-4 rounded-t-[20px]">
              <span>Order #</span>
              <span>Product</span>
            </div>
            <div className="divide-y divide-[#E6E6E6]">
              {MOCK_ORDERS.map((order, i) => (
                <div key={order.id} className="bg-white">
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(expandedIndex === i ? -1 : i)}
                    className="w-full flex justify-between items-center py-3 px-4 text-left font-outfit"
                  >
                    <span className="flex items-center gap-2">
                      {expandedIndex === i ? (
                        <span className="text-[#053F31]">
                          <IconChevronDown />
                        </span>
                      ) : (
                        <IconChevronRightSmall />
                      )}
                      <span className="text-[#424242]">
                        {expandedIndex === i ? order.id : `${String(i + 1).padStart(2, "0")}.`}
                      </span>
                      {expandedIndex === i && <span className="text-[#000000] font-medium sr-only md:not-sr-only" />}
                    </span>
                    <span className="text-[#000000]">{order.product}</span>
                  </button>
                  {expandedIndex === i && (
                    <div className="px-4 pb-4 pt-0 space-y-2 font-outfit border-t border-[#E6E6E6]">
                      <div className="flex items-center gap-2 pt-3">
                        <span className="text-[#053F31] font-medium shrink-0">Location:</span>
                        <span className="flex items-center gap-1.5 text-[#757575]">
                          <IconLocation />
                          {order.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#053F31] font-medium">Quantity:</span>
                        <span className="text-[#757575]">{order.quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#053F31] font-medium">Amount:</span>
                        <span className="text-[#757575]">€{order.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#053F31] font-medium">Date:</span>
                        <span className="text-[#757575]">{order.date}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#053F31] font-medium">Status:</span>
                        <span className={`rounded-full px-3 py-1 text-sm font-medium ${STATUS_STYLES[order.status] ?? "bg-gray-200 text-gray-800"}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="pt-2">
                        <Link
                          href={`/orders/${order.id}`}
                          className="block w-full rounded-[10px] border-2 border-[#053F31] bg-white py-2.5 font-outfit text-sm font-medium text-[#053F31] text-center hover:bg-[#F7FAF8] transition"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-[#DAE6DC] text-[#053F31] font-outfit text-sm font-medium py-3 px-4 rounded-b-[20px] text-center">
              Showing {start}-{end} of {TOTAL_ORDERS} orders
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 p-4">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#053F31]/30 bg-white text-[#053F31] disabled:opacity-50 cursor-pointer"
                aria-label="Previous page"
              >
                <IconChevronLeft />
              </button>
              {paginationSlots.map((slot, i) =>
                slot === "ellipsis" ? (
                  <span key={`e-${i}`} className="flex h-10 w-10 items-center justify-center text-[#053F31]">…</span>
                ) : (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setPage(slot)}
                    className={`flex h-10 w-10 items-center justify-center rounded-[8px] font-semibold text-sm cursor-pointer ${page === slot ? "bg-[#053F31] text-white" : "border border-[#053F31]/30 bg-white text-[#053F31]"}`}
                  >
                    {slot}
                  </button>
                )
              )}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#053F31]/30 bg-white text-[#053F31] disabled:opacity-50 cursor-pointer"
                aria-label="Next page"
              >
                <IconChevronRight />
              </button>
            </div>
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full font-outfit text-left">
                <thead>
                  <tr className="bg-[#DAE6DC] text-[#053F31] font-semibold">
                    <th className="py-4 px-4">Order #</th>
                    <th className="py-4 px-4">Product</th>
                    <th className="py-4 px-4">Buyer Location</th>
                    <th className="py-4 px-4">Quantity</th>
                    <th className="py-4 px-4">Amount</th>
                    <th className="py-4 px-4">Date</th>
                    <th className="py-4 px-4">Status</th>
                    <th className="py-4 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_ORDERS.map((order, i) => (
                    <tr key={order.id} className="border-b border-[#E6E6E6] last:border-b-0 hover:bg-[#F7FAF8]/50">
                      <td className="py-4 px-4 text-[#000000] font-medium">{order.id}</td>
                      <td className="py-4 px-4 text-[#000000]">{order.product}</td>
                      <td className="py-4 px-4 text-[#000000]">
                        <span className="flex items-center gap-2">
                          <IconLocation />
                          {order.location}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-[#000000]">{order.quantity}</td>
                      <td className="py-4 px-4 text-[#000000]">€{order.amount}</td>
                      <td className="py-4 px-4 text-[#000000]">{order.date}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${STATUS_STYLES[order.status] ?? "bg-gray-200 text-gray-800"}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Link
                          href={`/orders/${order.id}`}
                          className="inline-block rounded-[10px] border border-[#E6E6E6] bg-white px-4 py-2 font-outfit text-sm font-medium text-[#424242] hover:bg-[#F7FAF8] hover:border-[#053F31]/30 transition"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#DAE6DC] px-4 py-4 text-[#053F31] font-outfit">
              <p className="text-sm font-medium">
                Showing {start}-{end} of {TOTAL_ORDERS} orders
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#053F31]/30 bg-white text-[#053F31] disabled:opacity-50 cursor-pointer hover:bg-[#053F31]/10"
                  aria-label="Previous page"
                >
                  <IconChevronLeft />
                </button>
                <div className="flex items-center gap-1">
                  {paginationSlots.map((slot, i) =>
                    slot === "ellipsis" ? (
                      <span key={`e-${i}`} className="flex h-10 w-10 items-center justify-center text-[#053F31]">
                        …
                      </span>
                    ) : (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPage(slot)}
                        className={`flex h-10 w-10 items-center justify-center rounded-[8px] font-semibold text-sm transition cursor-pointer ${page === slot
                            ? "bg-[#053F31] text-white"
                            : "border border-[#053F31]/30 bg-white text-[#053F31] hover:bg-[#053F31]/10"
                          }`}
                      >
                        {slot}
                      </button>
                    )
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#053F31]/30 bg-white text-[#053F31] disabled:opacity-50 cursor-pointer hover:bg-[#053F31]/10"
                  aria-label="Next page"
                >
                  <IconChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  );
};

export default OrdersPage;
