import BackgroundGradients from '@/components/BackgroundGradients';
import ContactHero from '@/components/ContactHero';
import Footer from '@/components/Footer';
import RegulationsAccordion from '@/components/RegulationsAccordion';

const LEGAL_ZIGZAG_COUNT = 1;

export default function LegalPage() {
  return (
    <main className="px-[20px] md:px-[40px]">
      <ContactHero
        headline={
          <h1 className="font-extralight text-white font-lexend leading-tight">
            Regulation on Organic 
            <span className="font-medium"> Waste</span>
          </h1>
        }
        description="Choose your profile type to start valorizing organic resources"
        showSearch={false}
      />
        <BackgroundGradients count={LEGAL_ZIGZAG_COUNT} />
        <RegulationsAccordion />
        <Footer />
    </main>
  );
}