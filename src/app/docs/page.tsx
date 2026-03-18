import ContactHero from '@/components/ContactHero';
import Footer from '@/components/Footer';
import BackgroundGradients from '@/components/BackgroundGradients';
import DocsInfoSection from '@/components/DocsInfoSection';
import DocsAccordion from '@/components/DocsAccordion';


const CODE_ZIGZAG_COUNT = 3;

export default function DocsPage() {
    return (
        <main className="px-[20px] md:px-[60px]">
            <ContactHero
                headline={
                    <h1 className="font-extralight text-white font-lexend leading-tight">
                        Documents &
                        <span className="font-medium"> Requirements</span>
                    </h1>
                }
                description="Choose your profile type to start valorizing organic resources"
                showSearch={false}
            />
            <BackgroundGradients count={CODE_ZIGZAG_COUNT} />
            <DocsInfoSection />
            <DocsAccordion />
            <Footer />
        </main>
    );
}