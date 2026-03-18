import BackgroundGradients from "@/components/BackgroundGradients";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";
import SignupComponent from "@/components/SignupComponent";

const REGISTER_ZIGZAG_COUNT = 2;

export default function Register() {
    return (
        <>
            {/* <RegisterPage /> */}
            <main className="min-h-screen px-[20px] md:px-[40px] font-outfit">
                <ContactHero headline={
                    <h1 className="font-lexend font-extralight text-white leading-tight">
                        Join <span className="font-medium">BIOMKET</span>
                    </h1>
                }
                    // 2. DESCRIPTION
                    description="Choose your profile type to start valorizing organic resources"
                    // 3. NO SEARCH BAR
                    showSearch={false} />
                <BackgroundGradients count={REGISTER_ZIGZAG_COUNT} />

                <SignupComponent />
                <Footer showCallToAction={false} />
            </main>
        </>
    );
}