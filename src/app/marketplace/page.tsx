import BackgroundGradients from "@/components/BackgroundGradients";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";
import ProductListing from "@/components/ProductListing";

/**
 * Product / Marketplace page.
 * Uses ContactHero with marketplace-specific text and search.
 */

const marketplaceData = {
  title: "Organic Waste Marketplace",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  products: [
    {
      id: "1",
      image: "../product.png",
      category: "AGRICULTURAL",
      title: "Organic Manure Compost",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "22",
      inStock: true,
    },
    {
      id: "2",
      image: "../product1.png",
      category: "AGRICULTURAL",
      title: "Residuo de jardineria municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "18",
      inStock: false,
    },
    {
      id: "3",
      image: "../product2.jpg",
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
      image: "../product.png",
      category: "AGRICULTURAL",
      title: "Organic Manure Compost",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "35",
      inStock: true,
    },
    {
      id: "5",
      image: "../product2.jpg",
      category: "AGRICULTURAL",
      title: "Residuo de jardineria municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "45",
      inStock: true,
    },
    {
      id: "6",
      image: "../product1.png",
      category: "AGRICULTURAL",
      title: "Resto de mercado municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "55",
      inStock: true,
    },
    {
      id: "7",
      image: "../product.png",
      category: "AGRICULTURAL",
      title: "Organic Manure Compost",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "65",
     inStock: true,
    },
    {
      id: "8",
      image: "../product1.png",
      category: "AGRICULTURAL",
      title: "Residuo de jardineria municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "75",
      inStock: true,
    },
    {
      id: "9",
      image: "../product2.jpg",
      category: "AGRICULTURAL",
      title: "Resto de mercado municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "85",
     inStock: true,
    },
    {
      id: "10",
      image: "../product1.png",
      category: "AGRICULTURAL",
      title: "Organic Manure Compost",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "95",
      inStock: true,
    },
    {
      id: "11",
      image: "../product.png",
      category: "AGRICULTURAL",
      title: "Residuo de jardineria municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "50",
      inStock: true,
    },
    {
      id: "12",
      image: "../product2.jpg",
      category: "AGRICULTURAL",
      title: "Resto de mercado municipal",
      location: "Valencia, Spain",
      quantity: "12 m³",
      code: "02 01 06",
      price: "88",
      inStock: true,
    }
  ],
};

const MARKETPLACE_ZIGZAG_COUNT = 4;

export default function MarketplacePage() {
  return (
    <>
    <div className="relative px-[20px] xl:px-[60px] xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto">
      <ContactHero
        headline={
          <>
           <h1 className="font-light">Organic <span className="font-medium">Waste Marketplace</span></h1>
          </>
        }
        description="Browse verified organic waste products from producers across Europe"
        showSearch
      />
      <BackgroundGradients count={MARKETPLACE_ZIGZAG_COUNT} />
      {/* Add product listing section below when needed */}
      <ProductListing products={marketplaceData.products}/>
      <Footer showCallToAction={false}/>
    </div>
    {/* <Footer />  */}
    </>
  );
}
