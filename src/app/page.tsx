import BackgroundGradients from "@/components/BackgroundGradients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import WasteCategoriesSection from "@/components/WasteCategoriesSection";
import WasteManagementSection from "@/components/WasteManagementSection";
import WhyBiomketSection from "@/components/WhyBiomketSection";

const heroData = {
  title: `Transform${"\u00a0"}your waste`,
  titleBold: "into Resources",
  description:
    "Connect waste producers with valorizers through our B2B marketplace or optimize your waste management with personalized consulting services.",
  buttons: [
    {
      label: "Access Marketplace",
      href: "/marketplace",
      variant: "primary" as const,
    },
    {
      label: "Request Personalized Service",
      href: "/services",
      variant: "secondary" as const,
    },
  ],
};

const marketplaceData = {
  title: "Organic Waste Marketplace",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  products: [
    {
      id: "1",
      image: "../product1.png",
      category: "AGRICULTURAL",
      title: "Organic Manure Compost",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "35",
      inStock: true,
    },
    {
      id: "2",
      image: "../product2.jpg",
      category: "AGRICULTURAL",
      title: "Residuo de jardineria municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "18",
      inStock: true,
    },
    {
      id: "3",
      image: "../product.png",
      category: "AGRICULTURAL",
      title: "Resto de mercado municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "25",
      inStock: true,
    },
    {
      id: "4",
      image: "../product2.jpg",
      category: "AGRICULTURAL",
      title: "Residuo de jardineria municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "18",
      inStock: false,
    },
    {
      id: "5",
      image: "../product1.png",
      category: "AGRICULTURAL",
      title: "Organic Manure Compost",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "35",
      inStock: false,
    },
    {
      id: "6",
      image: "../product.png",
      category: "AGRICULTURAL",
      title: "Resto de mercado municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "25",
      inStock: false,
    },
  ],
};

/** Number of zig-zag strips on home page (for BackgroundGradients). */
const HOME_ZIGZAG_COUNT = 6;

export default function Home() {
  return (
    // <div className="min-h-screen bg-white">
    <div className="min-h-screen flex flex-col text-black max-w-[1920px] mx-auto px-[20px] md:px-[40px]">
      <Hero
        title={heroData.title}
        titleBold={heroData.titleBold}
        description={heroData.description}
        buttons={heroData.buttons}
      />
      <BackgroundGradients count={HOME_ZIGZAG_COUNT} />
      <MarketplaceSection
        title={marketplaceData.title}
        description={marketplaceData.description}
        products={marketplaceData.products}
      />
      <WasteCategoriesSection />
      <WasteManagementSection />
      <HowItWorksSection />
      <WhyBiomketSection />
      <Footer />
      {/* <main className="py-12">
        <p className="text-zinc-500">
          View navbar: default (guest) or add{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
            ?user=1
          </code>{" "}
          to the URL to see the logged-in state.
        </p>
      </main> */}
      </div>
    
  );
}