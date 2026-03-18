import BackgroundGradients from "@/components/BackgroundGradients";
import Footer from "@/components/Footer";
import ProductDetailPage from "@/components/ProductDetailPage";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({ id: String(i + 1) }));
}

const MARKETPLACE_PRODUCT_ZIGZAG_COUNT = 3;

export default async function MarketplaceProductPage({ params }: Props) {
  const { id } = await params;
  return (
    <>
      <BackgroundGradients count={MARKETPLACE_PRODUCT_ZIGZAG_COUNT} />
      <ProductDetailPage
        productId={id}
        title="Organic Manure Compost"
        category="Livestock Waste"
        code="02 01 06"
        description="High-quality organic compost derived from livestock manure. Ideal for biogas production, composting facilities, and organic fertilizer manufacturing. Consistent quality with regular supply availability."
        image="/hero-bg.png"
        quantity="500 tons/month"
        supplyFrequency="Monthly Recurring"
        location="Valencia, Spain"
        locationDetail="Province of Valencia"
        wasteType="Animal Feces & Urine"
        price="35.00"
        priceUnit="Price per Ton"
      />
      <div className="relative px-5 sm:px-10 xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto">
        <Footer />
      </div>
    </>
  );
}
