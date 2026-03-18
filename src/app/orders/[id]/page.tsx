import React from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ORDER_INFO = {
  product: "Wood Chips & Sawdust",
  code: "03 01 05",
  quantity: "75 tons",
  unitPrice: "€28.00/ton",
  totalAmount: "€2,100",
  orderDate: "November 17, 2025",
  expectedDelivery: "November 22-24, 2025",
  buyerLocation: "Valencia, Spain",
};

const TRACKING_STEPS = [
  { id: "placed", title: "Order Placed", description: "Order received and confirmed", date: "Nov 17, 10:30 AM", status: "done", color: "green" },
  { id: "preparing", title: "Preparing Shipment", description: "Product prepared for transport", date: "Nov 17, 2:15 PM", status: "done", color: "orange" },
  { id: "transit", title: "In Transit", description: "Shipment on the way to destination", date: "Nov 18, 8:00 AM", status: "done", color: "blue" },
  { id: "delivery", title: "Out for Delivery", description: "Final delivery to buyer location", date: "Expected Nov 22", status: "pending", color: "muted" },
  { id: "delivered", title: "Delivered", description: "Order completed", date: "Expected Nov 22-24", status: "pending", color: "muted" },
];

const TRANSPORT_PROVIDER = { name: "TransWaste Logistics", tracking: "TW-492847-ES" };

function IconArrowUpRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    </svg>
  );
}

function IconTruckLarge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    </svg>
  );
}

function OrderDetailPage({ orderId }: { orderId: string }) {

  return (
    <>
      <div className="min-h-screen flex flex-row">
        <Sidebar />

        <div className="flex-1 transition-all duration-300 rounded-[20px] m-4 mt-6 md:m-[50px_0px] md:ms-68 pr-4 pl-4 md:pr-[40px] md:pl-0 max-w-[1200px] pb-24 md:pb-10">
          <h1 className="font-outfit font-bold text-[#053F31] text-lg md:text-2xl mb-4 md:mb-8">
            Order Details - {orderId}
          </h1>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            {/* Order Information card */}
            <section className="flex-1 min-w-0 rounded-[20px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-4 md:p-6 border border-[#E6E6E6]/60">
              <h2 className="font-outfit font-bold text-[#053F31] text-base md:text-lg mb-3 md:mb-4 pb-3 border-b border-[#E6E6E6]">
                Order Information
              </h2>
              <dl className="space-y-0 font-outfit">
                {[
                  { label: "Product", value: ORDER_INFO.product },
                  { label: "Code", value: ORDER_INFO.code },
                  { label: "Quantity", value: ORDER_INFO.quantity },
                  { label: "Unit Price", value: ORDER_INFO.unitPrice },
                  { label: "Total Amount", value: ORDER_INFO.totalAmount },
                  { label: "Order Date", value: ORDER_INFO.orderDate },
                  { label: "Expected Delivery", value: ORDER_INFO.expectedDelivery },
                  { label: "Buyer Location", value: ORDER_INFO.buyerLocation },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-3 py-3 border-b border-[#E6E6E6] last:border-b-0">
                    <dt className="text-[#053F31] font-medium shrink-0 text-sm md:text-base">{label}</dt>
                    <dd className="text-[#757575] text-right text-sm md:text-base break-words min-w-0 max-w-[60%]">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col gap-3 mt-5 md:mt-6 sm:flex-row">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[50px] bg-[#053F31] text-white font-outfit font-semibold py-3.5 px-5 hover:opacity-90 transition-opacity min-h-[48px]"
                >
                  Contact Buyer
                  <IconArrowUpRight />
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[50px] border-2 border-[#053F31] bg-white text-[#053F31] font-outfit font-semibold py-3.5 px-5 hover:bg-[#F7FAF8] transition-colors min-h-[48px]"
                >
                  Download Invoice
                  <IconDownload />
                </button>
              </div>
            </section>

            {/* Transport Tracking card */}
            <section className="flex-1 min-w-0 rounded-[20px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-4 md:p-6 border border-[#E6E6E6]/60">
              <h2 className="font-outfit font-bold text-[#053F31] text-base md:text-lg mb-3 md:mb-4 pb-3 border-b border-[#E6E6E6]">
                Transport Tracking
              </h2>

              <div className="relative pl-6 md:pl-8 space-y-0">
                {TRACKING_STEPS.map((step, index) => {
                  const isDone = step.status === "done";
                  const isLast = index === TRACKING_STEPS.length - 1;
                  const lineBorderColor =
                    step.color === "green"
                      ? "border-[#053F31]"
                      : step.color === "orange"
                        ? "border-[#f97316]"
                        : step.color === "blue"
                          ? "border-[#3b82f6]"
                          : "border-[#E6E6E6]";
                  const pillBg =
                    step.color === "green"
                      ? "bg-[#053F31] text-white"
                      : step.color === "orange"
                        ? "bg-[#f97316] text-white"
                        : step.color === "blue"
                          ? "bg-[#3b82f6] text-white"
                          : "bg-[#DAE6DC] text-[#053F31]";

                  return (
                    <div key={step.id} className="relative flex gap-4 pb-6">
                      {!isLast && (
                        <div
                          className={`absolute left-[11px] md:left-[15px] top-7 w-0.5 border-l-2 border-dashed ${isDone ? lineBorderColor : "border-[#E6E6E6]"}`}
                          style={{ height: "calc(100% - 0.25rem)" }}
                        />
                      )}
                      <div
                        className={`relative z-10 shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center ${
                          isDone
                            ? step.color === "green"
                              ? "bg-[#053F31] text-white"
                              : step.color === "orange"
                                ? "bg-[#f97316] text-white"
                                : "bg-[#3b82f6] text-white"
                            : "bg-white border-2 border-[#E6E6E6]"
                        }`}
                      >
                        {isDone && (step.id === "transit" ? <IconTruck /> : <IconCheck />)}
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <p className="font-outfit font-semibold text-[#424242]">{step.title}</p>
                        <p className="font-outfit text-sm text-[#757575] mt-0.5">{step.description}</p>
                        <span
                          className={`inline-block mt-2 rounded-full px-3 py-1 text-xs font-outfit font-medium ${pillBg}`}
                        >
                          {step.date}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 rounded-[10px] bg-[#DAE6DC]/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#053F31] text-white flex items-center justify-center shrink-0">
                    <IconTruckLarge />
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-[#424242]">Transport Provider</p>
                    <p className="font-outfit text-sm text-[#757575]">{TRANSPORT_PROVIDER.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-outfit font-medium text-[#424242]">Tracking:</span>
                  <span className="font-outfit text-sm font-medium text-[#053F31] bg-[#DAE6DC] px-3 py-1.5 rounded-full">
                    {TRANSPORT_PROVIDER.tracking}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 md:mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[50px] bg-[#053F31] text-white font-outfit font-semibold py-3.5 px-5 hover:opacity-90 transition-opacity min-h-[48px]"
              >
                Upload Transport Documents
                <IconArrowUpRight />
              </button>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <OrderDetailPage orderId={id} />;
}
