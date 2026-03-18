import ContactHero from '@/components/ContactHero';
import Footer from '@/components/Footer';
import BackgroundGradients from '@/components/BackgroundGradients';
import OrderConfirmation from '@/components/OrderConfirmation';
import OrderSummary from '@/components/OrderSummary';
import BillingInfoDeliveryLocationCards from '@/components/BillingInfoDeliveryLocationCards';
import WhatHappensNext from '@/components/WhatHappensNext';
import OrderInfoSection from '@/components/OrderInfoSection';

function IconRight() {
    return (
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="95" height="95" rx="47.5" fill="#F7FAF8" fillOpacity="0.1" />
            <rect x="0.5" y="0.5" width="95" height="95" rx="47.5" stroke="#DAE6DC" />
            <path d="M68.0096 32.9894C66.689 31.6702 64.5482 31.6702 63.2276 32.9894L40.3513 55.849L32.7724 48.2783C31.4518 46.9592 29.311 46.9592 27.9904 48.2783C26.6699 49.5974 26.6699 51.7359 27.9904 53.0551L37.9563 63.0101C39.0472 64.0998 40.7368 64.3128 42.0656 63.5345C42.1148 63.5017 42.164 63.4771 42.2051 63.4443C42.3937 63.3214 42.5742 63.174 42.7382 63.0101L68.0096 37.7661C69.3301 36.447 69.3301 34.3085 68.0096 32.9894Z" fill="white" />
        </svg>
    );
}
const CODE_ZIGZAG_COUNT = 3;

export default function DocsPage() {
    return (
        <main className="px-[20px] md:px-[40px]">
            <div className="absolute  z-10 md:mt-[104px] mt-40 left-1/2 -translate-x-1/2">
                <IconRight />
            </div>
            <ContactHero
                headline={
                    <h1 className="font-extralight text-white font-lexend leading-tight mt-35">
                        Payment&nbsp;<br className='md:hidden block'/>
                        <span className="font-medium">Successful!</span>
                    </h1>
                }
                description="Thank you for your order. Your transaction has been completed successfully."
                showSearch={false}
            />
            <BackgroundGradients count={CODE_ZIGZAG_COUNT} />
            <div className="mt-10 md:mt-14 flex flex-col gap-[30px] md:gap-[50px] xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto">
                <OrderConfirmation/>
                <OrderSummary
                    items={[
                        {
                            image: "/placeholder-product-1.jpg",
                            productName: "Organic Manure Compost",
                            lerCode: "02 01 06",
                            quantity: "12 m³",
                            frequency: "Monthly Supply",
                            location: "Madrid, Spain",
                            price: "€2500.00",
                            priceUnit: "per month",
                        },
                        {
                            image: "/placeholder-product-2.jpg",
                            productName: "Organic Manure Compost",
                            lerCode: "02 01 06",
                            quantity: "12 m³",
                            frequency: "Monthly Supply",
                            location: "Madrid, Spain",
                            price: "€5000.00",
                            priceUnit: "per month",
                        },
                    ]}
                    subtotal="€7500.00"
                    vat="€1575.00"
                    vatPercent="21%"
                    total="€9,075.00"
                />
                <BillingInfoDeliveryLocationCards/>
                <WhatHappensNext />
                <OrderInfoSection />
            </div>
            <Footer showCallToAction={false} />
        </main>
    );
}
