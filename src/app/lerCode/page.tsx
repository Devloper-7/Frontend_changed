import ContactHero from '@/components/ContactHero';
import Footer from '@/components/Footer';
import WhatAreEWCCodes from '@/components/WhatAreEWCCodes';
import HowToInterpretLer from '@/components/HowToInterpretLer';
import BackgroundGradients from '@/components/BackgroundGradients';
import FindYourWaste from '@/components/FindYourWaste';


const CODE_ZIGZAG_COUNT = 3;

export default function LerCodePage() {
    return (
        <main className="px-[20px] md:px-[40px]">
            <ContactHero
                headline={
                    <h1 className="font-extralight text-white font-lexend leading-tight">
                        LER
                        <span className="font-medium"> Code</span>
                    </h1>
                }
                description="Choose your profile type to start valorizing organic resources"
                showSearch={false}
            />
            <BackgroundGradients count={CODE_ZIGZAG_COUNT} />
            <WhatAreEWCCodes />
            <HowToInterpretLer />
            <FindYourWaste />
            <Footer />
        </main>
    );
}