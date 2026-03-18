import { NextResponse } from "next/server";

export const dynamic = "force-static";

const MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL || process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "";
const MEDUSA_PUBLISHABLE_KEY = process.env.MEDUSA_PUBLISHABLE_API_KEY || process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY || "";

const DEFAULT_BUTTONS = [
  { label: "Access Marketplace", href: "/marketplace", variant: "primary" as const },
  { label: "Request Personalized Service", href: "/services", variant: "secondary" as const },
];

const FALLBACK_HERO = {
  title: `Transform${"\u00a0"}your waste`,
  titleBold: "into Resources",
  description:
    "Connect waste producers with valorizers through our B2B marketplace or optimize your waste management with personalized consulting services.",
  buttons: DEFAULT_BUTTONS,
};

export async function GET() {
  const base = MEDUSA_BACKEND_URL ? MEDUSA_BACKEND_URL.replace(/\/$/, "") : "";
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (MEDUSA_PUBLISHABLE_KEY) headers["x-publishable-api-key"] = MEDUSA_PUBLISHABLE_KEY;

  if (base) {
    try {
      const res = await fetch(`${base}/store/products?limit=5`, { method: "GET", headers });
      if (res.ok) {
        const data = await res.json();
        const products = Array.isArray(data.products) ? data.products : [];
        const first = products[0];
        if (first && (first.title || first.description || first.subtitle)) {
          const title = String(first.title ?? "").trim();
          const parts = title ? title.split(/\s+/) : [];
          const titleFirst = parts[0] ? `${parts[0]}\u00a0` : FALLBACK_HERO.title;
          const titleBold = parts.length > 1 ? parts.slice(1).join(" ") : (first.subtitle ?? "into Resources");
          const description =
            typeof first.description === "string" && first.description
              ? first.description
              : (first.subtitle ?? FALLBACK_HERO.description);
          return NextResponse.json({
            title: titleFirst,
            titleBold,
            description,
            buttons: DEFAULT_BUTTONS,
          });
        }
      }
    } catch {
      // fall through to fallback
    }
  }

  return NextResponse.json(FALLBACK_HERO);
}
